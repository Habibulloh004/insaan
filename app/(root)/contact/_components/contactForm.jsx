"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

export default function MyForm() {
  const t = useTranslations("MyForm");
  const servicesT = useTranslations("Services");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // <--- Popover ochiq/yopiq holati uchun

  const servicesData = [
    {
      label: servicesT("service_1_title"),
      value: "Ҳужжатларни рўйхатдан ўтказиш",
    },
    {
      label: servicesT("service_2_title"),
      value: "Кадастр хужжатлари",
    },
    {
      label: servicesT("service_3_title"),
      value: "Архитектура лойиҳалари",
    },
  ];

  const formSchema = z.object({
    full_name: z.string().min(1, t("zod_full_name")),
    phone: z.string().min(7, t("zod_phone")),
    service: z.string().min(1, t("zod_service")),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      phone: "+998",
      service: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);

      const message = `
📥 *Янги форма юборилди*:

👤 ФИО: ${values.full_name}
📱 Телефон: ${values.phone}
🛠 Хизмат: ${values.service}
      `;

      const promise = new Promise(async (resolve, reject) => {
        try {
          await new Promise((res) => setTimeout(res, 1000));

          const res = await fetch(
            `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                chat_id: process.env.NEXT_PUBLIC_CHATID,
                text: message,
                parse_mode: "Markdown",
              }),
            }
          );

          if (!res.ok) {
            throw new Error("Telegram yuborishda xatolik");
          }

          resolve(res);
        } catch (err) {
          reject(err);
        }
      });

      await toast.promise(
        promise,
        {
          loading: t("sending"),
          success: t("success"),
          error: t("error"),
        },
        {
          style: { minWidth: "250px" },
        }
      );

      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(t("error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="justify-start space-y-8 py-10 max-w-md"
      >
        {/* Full Name Field */}
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("full_name_label")}</FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  placeholder={t("full_name_placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>{t("phone_label")}</FormLabel>
              <FormControl className="w-full">
                <PhoneInput
                  placeholder={t("phone_placeholder")}
                  {...field}
                  defaultCountry="UZ"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Service Field (Popup Select) */}
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>{t("service_label")}</FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between h-12",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? servicesData.find((s) => s.value === field.value)?.label
                      : t("service_placeholder")}
                    <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <div className="w-full flex flex-col">
                    {servicesData.map((item) => (
                      <button
                        type="button"
                        key={item.value}
                        className={cn(
                          "flex w-full items-center p-2 hover:bg-muted gap-2",
                          item.value === field.value && "bg-muted"
                        )}
                        onClick={() => {
                          field.onChange(item.value);
                          setOpen(false); // <--- Tanlagandan keyin popover yopiladi
                        }}
                      >
                        {item.label}
                        {item.value === field.value ? (
                          <CheckIcon className="ml-auto h-4 w-4" />
                        ) : null}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} type="submit" className="w-full h-12">
          {t("submit_button")}
        </Button>
      </form>
    </Form>
  );
}

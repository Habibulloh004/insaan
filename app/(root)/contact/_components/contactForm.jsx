"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

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

export default function MyForm() {
  const t = useTranslations("MyForm");
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    first_name: z.string().min(1, t("zod_first_name")).optional(),
    second_name: z.string().min(1, t("zod_last_name")).optional(),
    email: z.string().email(t("zod_email")),
    phone: z.string().min(7, t("zod_phone")),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      second_name: "",
      email: "",
      phone: "+998",
    },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
  
      const message = `
  📥 *Янги форма юборилди*:
  
  👤 Исм: ${values.first_name || "-"}
  👥 Фамилия: ${values.second_name || "-"}
  📧 Электрон почта: ${values.email}
  📱 Телефон: ${values.phone}
      `;
  
      const promise = new Promise(async (resolve, reject) => {
        try {
          // 1 soniya kutish
          await new Promise((res) => setTimeout(res, 1000));
  
          const res = await fetch(
            `https://api.telegram.org/bot7729055413:AAEL76FP1sjYdXSwp7DqbfwUrqwBYAwMqjw/sendMessage`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                chat_id: "-4786281248",
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
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("first_name_label")}</FormLabel>
              <FormControl>
                <Input
                  className={"h-12"}
                  placeholder={t("first_name_placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="second_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("second_name_label")}</FormLabel>
              <FormControl>
                <Input
                  className={"h-12"}
                  placeholder={t("second_name_placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email_label")}</FormLabel>
              <FormControl>
                <Input
                  className={"h-12"}
                  placeholder={t("email_placeholder")}
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        <Button disabled={loading} type="submit" className={"w-full h-12"}>
          {t("submit_button")}
        </Button>
      </form>
    </Form>
  );
}

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
      const templateParams = {
        from_name: values.first_name + " " + values.second_name,
        from_email: values.email,
        phone: values.phone,
      };
      console.log(templateParams);
  
      const promise = emailjs.send(
        "service_v7dhg2r", // service ID
        "template_8a3mrnm", // template ID
        templateParams,
        "Lf8Unr87wRrz0nuRa" // public key
      );
  
      // toast.promise with progress indication
      toast.promise(
        promise,
        {
          loading: t("sending"),
          success: t("success"),
          error: t("error"),
        },
        {
          style: {
            minWidth: "250px",
          },
          // Add progress tracking here if needed (optional)
          progress: (progress) => {
            return {
              label: `${t("sending")}: ${Math.round(progress * 100)}%`,
              progress: progress * 100, // Update progress percentage
            };
          },
        }
      );
  
      await promise;
      form.reset();
    } catch (error) {
      console.error(error);
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

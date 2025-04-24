"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

const formSchema = z.object({
  first_name: z.string().min(1).optional(),
  second_name: z.string().min(1).optional(),
  email: z.string(),
  phone: z.string(),
});

export default function MyForm() {
  const t = useTranslations("MyForm");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "+998", // O'zbekiston kodi
    }
  });

  function onSubmit(values) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

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
                <Input placeholder={t("first_name_placeholder")} type="" {...field} />
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
                  placeholder={t("second_name_placeholder")}
                  type=""
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

        <Button type="submit">{t("submit_button")}</Button>
      </form>
    </Form>
  );
}
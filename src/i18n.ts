/*
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config

import deepmerge from "deepmerge";
import { locales } from "@/navigation";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const userMessages = (await import(`../messages/${locale}.json`)).default;
  const defaultMessages = (await import(`../messages/en.json`)).default;
  const messages = deepmerge(defaultMessages, userMessages);

  return {
    messages: messages,
  };
});

*/
import { getRequestConfig, GetRequestConfigParams } from "next-intl/server";
import deepmerge from "deepmerge";
import { locales } from "@/navigation";

// نوع پیام‌ها را به `AbstractIntlMessages` تغییر دهید.
import type { AbstractIntlMessages } from "next-intl";
import { unknown } from "zod";

// تعریف صحیح ساختار پیام‌ها
type Messages = AbstractIntlMessages;

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  // اطمینان از معتبر بودن `locale`
  if (!locales.includes(locale as any)) unknown();

  // بارگذاری پیام‌ها
  const userMessages: Messages = (await import(`../messages/${locale}.json`)).default;

  // ادغام پیام‌های کاربر و پیش‌فرض
  const messages = deepmerge((await import(`../messages/en.json`)).default, userMessages);

  return {
    messages,
  };
});

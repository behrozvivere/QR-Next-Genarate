/*کد اولیه 
import { toast } from "sonner";

export const http: typeof fetch = async (input, init) => {
  const res = await fetch(input, init);
  if (!res.ok) {
    const body = await res.json();
    const msg = body["error"] || "Network Error";
    toast.error(msg);
    throw Error(msg);
  }
  return res;
};
*/
import { toast } from "sonner";

export const http: typeof fetch = async (input, init) => {
  const MAX_RETRIES = 2; // تعداد دفعات تلاش مجدد برای درخواست
  let retries = 0;

  while (retries <= MAX_RETRIES) {
    try {
      const res = await fetch(input, init);

      if (!res.ok) {
        // خطای مهم برای وضعیت‌های 4xx و 5xx
        if (res.status >= 500) {
          console.error(`Server Error: ${res.status}`);
        } else {
          console.warn(`Client Error: ${res.status}`);
        }

        // اگر خطا غیر بحرانی باشد، نوتیفیکیشن نمایش داده نمی‌شود
        if (res.status >= 400 && res.status < 500) {
          throw new Error("Request failed but no user notification needed.");
        }

        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      return res; // پاسخ موفق
    } catch (error) {
      retries++;
      console.error(`Attempt ${retries} failed:`, error.message);

      if (retries > MAX_RETRIES) {
        // خطای نهایی فقط در صورت شکست همه تلاش‌ها
        const msg = error instanceof Error ? error.message : "Network Error";
        toast.error("مشکلی پیش آمد، لطفاً بعداً تلاش کنید.", {
          description: res?.statusText || msg,
        });
        throw error;
      }
    }
  }
};



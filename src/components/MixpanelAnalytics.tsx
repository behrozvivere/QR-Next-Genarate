"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { http } from "@/lib/network";
import { useSession } from "next-auth/react";
import { trackPageView, identifyUser, resetUser } from "@/lib/analytics";

const body = {
  collection_name: "counter_global",
  name: "page_view",
};

export default function MixpanelAnalytics() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isLogout = !session || !session.user;

  // Track page views
  useEffect(() => {
    try {
      trackPageView();
      http("/api/update_count", {
        method: "POST",
        body: JSON.stringify(body),
      }).catch((error) => {
        console.error("Failed to update count:", error);
      });
    } catch (error) {
      console.error("Failed to track pageview:", error);
    }
  }, [pathname]);

  // older code
 /* useEffect(() => {
    if (!isLogout && session?.user) {
      identifyUser(session.user.id, {
        $name: session.user.name,
        $email: session.user.email,
        $avatar: session.user.image,
      });
    } else {
      resetUser();
    }
  }, [isLogout, session]);
*/
useEffect(() => {
  if (!isLogout && session?.user?.id) {
    identifyUser(session.user.id as string, {
      $name: session.user.name,
      $email: session.user.email,
      $avatar: session.user.image,
    });
  } else {
    resetUser();
  }
}, [isLogout, session]);

  return null;
}

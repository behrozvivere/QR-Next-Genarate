"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/components/TrackComponents";
import { useState } from "react";

export function DiscordSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="20"
      viewBox="0 0 640 512"
      className="mr-2"
    >
      <path
        opacity="1"
        fill="currentColor"
        d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
      />
    </svg>
  );
}

const providers = [
  {
    id: "discord",
    name: "Discord",
    icon: <DiscordSvg />,
  },
];

export default function AuthButtons() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (providerId: string) => {
    try {
      setIsLoading(true);
      trackEvent("sign_in_attempt", {
        provider: providerId,
      });

      const result = await signIn(providerId, {
        callbackUrl: window.location.origin,
        redirect: true,
      });

      if (result?.error) {
        console.error("Sign in error:", result.error);
      }
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {providers.map((provider) => (
        <Button
          key={provider.id}
          variant="outline"
          type="button"
          className="w-full flex items-center justify-center gap-2 py-6"
          onClick={() => handleSignIn(provider.id)}
          disabled={isLoading}
        >
          {provider.icon}
          {isLoading ? "Signing in..." : provider.name}
        </Button>
      ))}
    </div>
  );
}

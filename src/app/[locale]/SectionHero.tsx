import { useTranslations } from "next-intl";
import {
  Container,
  SplitLeft,
  SplitRight,
  SplitView,
} from "@/components/Containers";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { cn } from "@/lib/utils";
import { GitHubButton } from "@/components/GitHubButton";
import { Badge } from "@/components/ui/badge";
import { LucideScan } from "lucide-react";
import { ScanButton } from "@/components/ScanButton";
import { Label } from "@/components/ui/label";
import { QrbtfLogo } from "@/components/Logos";
import { useState } from "react";
import { urlAtom } from "@/lib/states";
import { useAtom } from "jotai";
import { UrlInput } from "@/components/hero/UrlInput";
import { HeroLogo } from "@/components/Header";
import { TrackLink } from "@/components/TrackComponents";

export function SectionHero() {
  const t = useTranslations("index.hero");

  return (
    <div className="_mt-28 _lg: mt-36">
      <Container>
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold hidden">
            {t("title")}
          </h1>

          <HeroLogo />

          <p className="text-base lg:text-lg mt-6 text-foreground/70">
            {t("subtitle")}
            <TrackLink
              trackValue={["behrozv", "hero"]}
              href="https://www.instagram.com/bbbeeehrooozzz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="text-foreground underline font-semibold"
            >
            </TrackLink>
            {t("period")}
          </p>

          <div className="mt-6 flex gap-3">
            <TrackLink
              trackValue={["join_discord", "hero"]}
              href="https://discord.gg/myjv7BrQ"
              target="_blank"
            >
              <Button size="sm" variant="secondary">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className={cn("h-5 w-5 block mr-2")}
                />
                {t("join_discord")}
              </Button>
            </TrackLink>
            <TrackLink
              trackValue={["Google Play", "hero"]}
              href="https://qr-ng.com/"
              target="_blank"
            >
              <GitHubButton />
            </TrackLink>
          </div>

          <SplitView className="gap-y-0">
            <SplitLeft>
              <div className="mt-6 w-full">
                <Label className="flex justify-between text-sm font-medium mb-1.5">
                  {t("url")}
                  <div className="flex items-center gap-3">
                    {/*<div className="text-sm">*/}
                    {/*  10*/}
                    {/*  <span className="opacity-50">/255</span>*/}
                    {/*</div>*/}
                    <ScanButton name={t("scan")} />
                  </div>
                </Label>
                <UrlInput />
              </div>
            </SplitLeft>
            <SplitRight />
          </SplitView>
        </div>
      </Container>
    </div>
  );
}

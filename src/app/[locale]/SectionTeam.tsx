import { useTranslations } from "next-intl";
import { Container } from "@/components/Containers";
import { SectionTitle } from "@/components/Titles";

export function SectionTeam() {
  const t = useTranslations("index.team");

  return (
    <div className="">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-6 leading-7">
        <p>{t("content")}</p>
      </div>
    </div>
  );
}

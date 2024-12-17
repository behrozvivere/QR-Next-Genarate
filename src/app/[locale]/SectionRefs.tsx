import { useTranslations } from "next-intl";
import { Container } from "@/components/Containers";
import { SectionTitle } from "@/components/Titles";
import { Button } from "@/components/ui/button";
import { TrackLink } from "@/components/TrackComponents";

export function SectionRefs() {
  const t = useTranslations("index.refs");

  return (
    <div className="">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-6 flex gap-3 flex-wrap">
        <TrackLink
          trackValue={["nons", "refs"]}
          href="https://nons.ir/"
          target="_blank"
        >
          <Button variant="secondary" size="sm">
            {t("nons")}
          </Button>
        </TrackLink>
        <TrackLink
          trackValue={["dicardo", "refs"]}
          href="https://dicardo.com/"
          target="_blank"
        >
          <Button variant="secondary" size="sm">
            {t("dicardo")}
          </Button>
        </TrackLink>
        <TrackLink
          trackValue={["m2yu", "refs"]}
          href="https://m2yu.com/"
          target="_blank"
        >
          <Button variant="secondary" size="sm">
            {t("m2yu")}
          </Button>
        </TrackLink>
      </div>
    </div>
  );
}

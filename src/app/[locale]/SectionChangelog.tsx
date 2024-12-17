import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/Titles";

interface FeatureItemProps {
  title: string;
  content: string;
  isLast?: boolean;
}

function FeatureItem(props: FeatureItemProps) {
  return (
    <div className="flex items-stretch relative">
      <div className="w-1.5 mr-4 flex flex-col items-center translate-y-2">
        <div className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
        {!props.isLast && (
          <div className="grow w-[1px] bg-foreground/30 my-2" />
        )}
      </div>
      <div className="grow">
        <h3 className="font-semibold">{props.title}</h3>
        <p className="text-sm mb-6 mt-1 text-muted-foreground">
          {props.content}
        </p>
      </div>
    </div>
  );
}

export function SectionChangelog() {
  const t = useTranslations("index.changelog");
  const items = t.raw("items");

  return (
    <div className="">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-6">
        {items.slice(0, 6).map((item: any, index: number) => (
          <FeatureItem
            key={index}
            title={item.title}
            content={item.content}
            isLast={index === 5}
          />
        ))}
      </div>
    </div>
  );
}

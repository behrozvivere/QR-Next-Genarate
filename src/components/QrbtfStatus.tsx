import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { StatusCard } from "./StatusCard";
import { useTranslations } from "next-intl";
import { getCount, getGitHubStars } from "@/lib/server/count";

interface QrbtfStatusProps {}

async function fetchStatusData() {
  const names = ["download_count", "generate_count", "page_view", "github_stars"] as const;
  const promises = names.map(async (name) => {
    try {
      if (name === "github_stars") {
        return await getGitHubStars();
      } else {
        return await getCount("counter_global", name);
      }
    } catch (error) {
      console.error(`Error fetching ${name}:`, error);
      return "N/A";
    }
  });

  return names.map((name, index) => ({ name, value: promises[index] || "N/A" }));
}

export default async function QrbtfStatus(props: QrbtfStatusProps) {
  const t = useTranslations("index.status");
  const statusData = await fetchStatusData();

  return (
    <Suspense fallback={<SkeletonStatus />}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {statusData.map((data) => (
          <StatusCard title={t(data.name)} key={data.name}>
            <div>{data.value?.toLocaleString?.() || data.value}</div>
          </StatusCard>
        ))}
      </div>
    </Suspense>
  );
}

function SkeletonStatus() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="p-4 bg-gray-200 rounded">
          <Skeleton className="h-6 mb-2" />
          <Skeleton className="h-8" />
        </div>
      ))}
    </div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/Titles";
import { StatusCard } from "@/components/StatusCard";
import { useEffect, useState } from "react";

interface Stats {
  qrCreated: number;
  qrDownloaded: number;
  visitors: number;
}

export function SectionStatus() {
  const t = useTranslations("index.status");
  const [stats, setStats] = useState<Stats>({
    qrCreated: 0,
    qrDownloaded: 0,
    visitors: 0
  });

  useEffect(() => {
    // Function to fetch statistics from backend
    const fetchStats = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('/api/stats');
        const data = await response.json();
        setStats({
          qrCreated: data.qrCreated || 0,
          qrDownloaded: data.qrDownloaded || 0,
          visitors: data.visitors || 0
        });
      } catch (error) {
        console.error('Failed to fetch statistics:', error);
      }
    };

    // Initial fetch
    fetchStats();

    // Set up periodic updates (every 5 minutes)
    const interval = setInterval(fetchStats, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num?.toLocaleString() || '0';
  };

  return (
    <div className="">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-3">
          <StatusCard title={t("google_play")}>100K+</StatusCard>
          <StatusCard title={t("qr_created")}>
            {formatNumber(stats.qrCreated)}
          </StatusCard>
          <StatusCard title={t("qr_downloaded")}>
            {formatNumber(stats.qrDownloaded)}
          </StatusCard>
          <StatusCard title={t("visitors")}>
            {formatNumber(stats.visitors)}
          </StatusCard>
        </div>
      </div>
    </div>
  );
}

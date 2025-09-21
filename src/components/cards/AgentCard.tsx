"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

export default function AgentCard({ icon, title, bullets }: { icon: ReactNode; title: string; bullets: string; }) {
  return (
    <Card className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow rounded-2xl border border-neutral-200">
      <CardHeader className="flex-row items-center gap-3">
        <div className="h-10 w-10 rounded-xl grid place-items-center bg-[var(--primary)]/15 text-yellow-600">
          {icon}
        </div>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600">{bullets}</p>
      </CardContent>
      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
    </Card>
  );
}
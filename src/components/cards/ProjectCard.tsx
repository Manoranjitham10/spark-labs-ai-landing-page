"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({ title, description }: { title: string; description: string; }) {
  return (
    <Card className="group relative overflow-hidden bg-neutral-50 shadow-sm hover:shadow-md transition-shadow rounded-2xl border border-neutral-200">
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">{description}</p>
      </CardContent>
      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
    </Card>
  );
}
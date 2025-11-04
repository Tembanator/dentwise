import { Badge } from "../components/ui/badge";
import type { IconNames } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";

export default function SectionHeader({
  badgeText,
  title,
  titleStyled,
  subtitle,
  icon,
  leftAlign,
}: {
  badgeText: string;
  title: string;
  titleStyled: string;
  subtitle: string;
  icon: IconNames;
  leftAlign: boolean;
}) {
  return (
    <div className={`flex flex-col gap-8 ${leftAlign ? "" : "items-center"}`}>
      <Badge className="text-primary text-xs md:text-sm font-medium bg-primary/20 border border-primary/70">
        <DynamicIcon name={icon} />
        {badgeText}
      </Badge>
      {/* title  */}
      <h1
        className={`${
          leftAlign ? "" : "text-center"
        } font-bold text-4xl md:text-5xl text-muted-foreground`}
      >
        {title} <br /> <span className="text-primary">{titleStyled}</span>
      </h1>
      {/* subtitle  */}
      <p
        className={`text-lg md:text-2xl ${
          leftAlign ? "" : "text-center max-auto"
        } text-muted-foreground max-w-xl leading-relaxed `}
      >
        {subtitle}
      </p>
    </div>
  );
}

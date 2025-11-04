import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface CardProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export default function StepCard({
  id,
  icon,
  title,
  description,
  tags,
}: CardProps) {
  return (
    <div className="relative flex flex-col max-w-60 gap-4 items-center p-4 border rounded-md border-muted-foreground/10 bg-primary-foreground">
      <Badge className="absolute -top-3 left-8 text-[9px] font-bold bg-primary/70">
        {id}
      </Badge>
      <div className="w-8 h-8 bg-primary/30 rounded-md flex items-center justify-center">
        <Image
          className="w-7"
          src={`${icon}.png`}
          width={80}
          height={80}
          alt={`${icon}`}
        />
      </div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-center text-xs text-muted-foreground leading-">
        {description}
      </p>
      <div className="grid grid-cols-2 gap-1">
        <Badge className="text-primary text-[8px] font-medium bg-primary/20 border border-primary/70">
          {tags[0]}
        </Badge>
        <Badge className="text-primary text-[8px] font-medium bg-primary/20 border border-primary/70">
          {tags[1]}
        </Badge>
      </div>
    </div>
  );
}

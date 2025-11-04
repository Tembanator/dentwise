import { MessageSquare } from "lucide-react";
import React from "react";

export default function AboutCard({
  text,
  description,
  tags,
}: {
  text: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col gap-4 border border-muted rounded-md p-4 bg-primary-foreground">
      <div className="flex gap-4">
        <div className="bg-primary/20 h-fit p-2 rounded-xl">
          <MessageSquare className="text-primary size-4" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="bg-primary/20 h-fit p-2 rounded-xl text-primary text-sm">
            {text}
          </p>
          <div className="flex flex-col gap-2 p-2 bg-muted/50 rounded-xl text-sm">
            <p>{description}</p>
            <div className="flex gap-3">
              <span className="bg-primary/20 h-fit p-2 rounded-xl text-xs text-primary">
                {tags[0]}
              </span>
              <span className="bg-primary/20 h-fit p-2 rounded-xl text-xs text-primary">
                {tags[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

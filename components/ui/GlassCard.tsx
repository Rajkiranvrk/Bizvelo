import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glow = false,
  ...props
}: GlassCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 md:p-8 ${
        glow ? "relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-radial-glow before:opacity-50" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

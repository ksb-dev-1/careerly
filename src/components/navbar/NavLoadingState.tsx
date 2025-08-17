"use client";

// 3rd party
import ThemeSwitch from "@/components/navbar/ThemeSwitch";

export default function NavLoadingState() {
  return (
    <div className="flex items-center space-x-4">
      <ThemeSwitch />
      <div className="skeleton h-8 w-8 rounded-full"></div>
    </div>
  );
}

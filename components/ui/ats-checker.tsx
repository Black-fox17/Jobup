"use client";

import { Button } from "@/components/ui/button";
import { FileScan } from "lucide-react";
import Link from "next/link";

export function AtsChecker() {
  return (
    <div className="mt-6">
      <Link href="/ats-checker" className="block w-full">
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          <FileScan className="w-4 h-4 mr-2" />
          ATS Resume Checker
        </Button>
      </Link>
    </div>
  );
}

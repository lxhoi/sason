"use client";

import { useEffect } from "react";

export function DevRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.self === window.top) {
      const search = window.location.search;
      if (!search.includes("standalone=1") && !search.includes("embed=1")) {
        window.location.replace("/dev");
      }
    }
  }, []);

  return null;
}

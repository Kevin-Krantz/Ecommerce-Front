import { useEffect } from "react";

export function useBodyScrollLock(showNav: boolean) {
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showNav]);
}

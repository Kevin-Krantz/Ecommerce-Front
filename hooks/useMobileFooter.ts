import { useEffect, useRef } from "react";

export const useMobileFooter = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const links = Array.from(nav.getElementsByTagName("a"));
    let activeIndex = links.findIndex((link) =>
      link.className.includes("active")
    );
    let currentIndex = activeIndex;
    let increment = 1;

    const line = nav.querySelector(".line") as HTMLElement | null;
    if (!line) return;

    const placeLine = (line: HTMLElement, link: HTMLAnchorElement) => {
      line.style.width = `${link.offsetWidth}px`;
      line.style.left = `${link.offsetLeft + link.offsetWidth / 2}px`;
    };

    links.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLAnchorElement;
        if (!target) return;

        activeIndex = index;
        const traversingInterval = setInterval(() => {
          const currentLink = links[currentIndex];
          const nextLink = links[currentIndex + increment];

          currentLink?.classList.remove("traversing", "active");
          currentIndex += increment;
          nextLink?.classList.add("traversing");
          if (currentIndex === activeIndex) {
            clearInterval(traversingInterval);
            target.classList.add("active");
          }
        }, 100);
        placeLine(line, target);
      });
    });

    if (activeIndex !== -1) {
      placeLine(line, links[activeIndex]);
    }
  }, []);

  return navRef;
};

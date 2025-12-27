import { useEffect } from "react";

/**
 * Hook pour animer les elements avec la classe 'animate-on-scroll'
 * lorsqu'ils entrent dans le viewport.
 *
 * @param dependencies - Tableau de dependances qui declenchent une re-observation
 * @param delay - Delai avant d'observer les elements (defaut: 50ms)
 */
export function useScrollAnimation(
  dependencies: React.DependencyList = [],
  delay: number = 50
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el);
      });
    }, delay);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

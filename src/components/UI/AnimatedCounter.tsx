import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const hasNumeric = /\d+/.test(value);

  useEffect(() => {
    const node = ref.current;
    const numericMatch = value.match(/\d+/);
    if (!node || !numericMatch) return;

    const targetNum = parseInt(numericMatch[0], 10);
    const matchIndex = value.indexOf(numericMatch[0]);
    const prefix = value.substring(0, matchIndex);
    const suffix = value.substring(matchIndex + numericMatch[0].length);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic function for smooth slowing down at the end
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * targetNum);

            setDisplayValue(`${prefix}${currentCount}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayValue ?? (hasNumeric ? "0" : value)}
    </span>
  );
}

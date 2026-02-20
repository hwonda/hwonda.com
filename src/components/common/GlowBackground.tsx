import { useMouseGlow } from '@/hooks';

interface GlowBackgroundProps {
  children: React.ReactNode;
}

export default function GlowBackground({ children }: GlowBackgroundProps) {
  const { glowPosition, isVisible } = useMouseGlow({ useViewport: true });

  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `
            radial-gradient(
              800px circle at ${glowPosition.x}% ${glowPosition.y * 3}%,
              rgba(254, 59, 97, 0.08),
              transparent 40%
            ),
            radial-gradient(
              600px circle at ${glowPosition.x + 5}% ${glowPosition.y * 3 + 5}%,
              rgba(236, 69, 141, 0.06),
              transparent 40%
            ),
            radial-gradient(
              400px circle at ${glowPosition.x - 3}% ${glowPosition.y * 3 - 3}%,
              rgba(97, 71, 255, 0.05),
              transparent 40%
            )
          `,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

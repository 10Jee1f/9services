interface GameIconProps {
  category: string;
  size?: number;
}

export default function GameIcon({ category, size = 48 }: GameIconProps) {
  // All products are Free Fire — use the flame icon with an orange/red glow
  const icon = { emoji: '🔥', glow: 'rgba(255,100,0,0.35)' };

  return (
    <div
      style={{
        width: size + 16,
        height: size + 16,
        background: `radial-gradient(circle, ${icon.glow} 0%, transparent 70%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <span style={{ fontSize: size * 0.65 }}>{icon.emoji}</span>
    </div>
  );
}

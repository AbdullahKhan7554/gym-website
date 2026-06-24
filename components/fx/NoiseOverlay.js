// Static film grain. A fixed lightweight texture (no per-frame recompositing) —
// keeps the cinematic feel without the cost of an animated full-screen layer.
export default function NoiseOverlay() {
  return <div className="grain" aria-hidden="true" />;
}

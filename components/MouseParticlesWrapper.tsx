"use client";

import MouseParticles from "react-mouse-particles";

const CastedParticles = MouseParticles as any;

export default function MouseParticlesWrapper() {
  return (
    <CastedParticles
      g={1}
      num={6}
      color="random"
      cull="stats,image-wrapper"
      level={6}
    />
  );
}

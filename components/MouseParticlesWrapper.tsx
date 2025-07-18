'use client';

import dynamic from 'next/dynamic';


const MouseParticles = dynamic(() => import('react-mouse-particles'), {
  ssr: false,
});

export default function MouseParticlesWrapper() {
  return (
    <MouseParticles
      g={1}
      color="random"
      cull="col,image-wrapper"
    />
  );
}

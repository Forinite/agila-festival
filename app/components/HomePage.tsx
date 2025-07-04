import React from 'react';
import Hero from './Hero';
import MediaFeed from './MediaFeed';
import { heroImages } from '@/app/constants';

export default function HomePage({ searchParams }: { searchParams: { filter?: string } }) {
  return (
    <>
      <Hero
        imageList={heroImages}
        title="Ijega Festival"
      />
      <MediaFeed searchParams={searchParams} />
    </>
  );
}

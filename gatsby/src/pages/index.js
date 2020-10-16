import React from 'react';
import SEO from '../components/SEO';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <p>CurrentlySlicing</p>
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <p>HotSlices</p>
    </div>
  );
}

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <>
      <SEO title="Home" />
      <div className="center">
        <h1>The Best Pizza Downtown</h1>
        <p>Open 11am to 11pm Every Single Day</p>
        <div>
          <CurrentlySlicing slicemasters={slicemasters} />
          <HotSlices hotSlices={hotSlices} />
        </div>
      </div>
    </>
  );
}

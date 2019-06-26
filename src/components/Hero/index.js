import React, { useEffect, useState } from 'react';
import HeroSVG from '../svgs/HeroSVG';
import ReadMore from '../ReadMore';

import './style.scss';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // On mount
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <h1>
          Future
          <br />
          workforce
        </h1>
        <p>
          Matching the varying expectations of workers across the five
          generations now in employment is essential for successful
          recruitment and retention.
        </p>
      </div>
      <div className={`hero__art ${loaded ? 'visible-art' : ''}`}>
        <HeroSVG />
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;

import React, { useEffect, useRef } from 'react';

import { TimelineMax } from 'gsap';

export default function BoomboxSVG() {
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  const slide4 = useRef(null);
  const slide5 = useRef(null);
  const speakerR = useRef(null);
  const speakerL = useRef(null);

  useEffect(() => {
    const slideTL = new TimelineMax({ repeat: -1, yoyo: true });
    slideTL
      .to(slide1.current, 2, { y: 10 },0)
      .to(slide2.current, 1, { y: 10 },0)
      .to(slide3.current, 2, { y: 10 },0)
      .to(slide4.current, 1, { y: 10 },0)
      .to(slide5.current, 2, { y: 10 },0);

    const speakerTL = new TimelineMax({ repeat: -1, yoyo: true });
    speakerTL
      .to(speakerR.current, 0.3, { x: 2 }, 0)
      .to(speakerL.current, 0.3, { x: 2 }, 0);
  },[]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Layer_1" width="469.65" height="519.41" data-name="Layer 1" viewBox="0 0 469.65 519.41">
        <defs>
            <linearGradient id="linear-gradient-bb" x1="193.74" x2="302.62" y1="203.11"
            y2="133.83" gradientTransform="matrix(1 0 0 -1 0 522)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#42145f" stopOpacity="0.25" />
                <stop offset="1" stopColor="#42145f" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="linear-gradient-bb-2" x1="128.33" x2="651.78" y1="308.29"
            y2="61.13" gradientTransform="matrix(1 0 0 -1 0 522)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#f5f3f7" />
                <stop offset="1" stopColor="#714f87" />
            </linearGradient>
            <linearGradient id="linear-gradient-bb-3" x1="309.65" x2="315.12" y1="146.17"
            y2="140.33" xlinkHref="#linear-gradient-bb-2" />
        </defs>
        <g id="Layer_4" data-name="Layer 4">
            <path fill="url(#linear-gradient-bb)" d="M206.6 243a62.2 62.2 0 0 0-30.5-40.6 31 31 0 0 0-3.8-1.6c11 8.7 20.2 23 22.4 35.6 1.5 9-1 15-6 17.4s-20.6 9.4-32.4 20.4a44.7 44.7 0 0 0-9 15.8 264.3 264.3 0 0 0-8 25.6l-.9 3v.5a46.3 46.3 0 0 1-29.6 30.3 41 41 0 0 1-2.7 9.1 54.7 54.7 0 0 1-28-7.6 54.2 54.2 0 0 0 31.2 7.5 46.2 46.2 0 0 0 41-32.6l.1-.5.8-3a264.3 264.3 0 0 1 8-25.6 46.2 46.2 0 0 1 9-15.8c11.9-11 32.5-20.4 32.5-20.4 5-2.3 7.4-8.5 5.9-17.4z"
            />
            <polygon fill="#fff" points="384.64 0 0 222.07 83.91 270.06 468.55 47.99 384.64 0"
            />
            <polygon fill="#f5f3f7" points="84.58 519.41 0.67 471.42 0 222.07 83.91 270.06 84.58 519.41"
            />
            <polygon fill="url(#linear-gradient-bb-2)" points="468.55 47.99 83.91 270.06 84.58 519.41 468.55 297.73 468.55 47.99"
            />
            <polygon fill="#7489c3" points="85.01 270.06 85.21 354.84 469.65 132.89 469.65 47.99 85.01 270.06"
            />
            <path fill="#fff" d="M364.3 332.5c-21.3 0-35.2-17.3-35.2-44.2-.2-37.8 26.5-84 59.4-103 9.6-5.6 19-8.4 27.6-8.4 21.4 0 35.2 17.4 35.3 44.3 0 37.8-26.6 84-59.5 103a55.6 55.6 0 0 1-27.6 8.3z"
            />
            <ellipse cx="390.2" cy="254.71" fill="#516cb4" rx="81.98" ry="47.48" transform="rotate(-59.8 390.2 254.7)"
            />
            <path id="speakerR" ref={speakerR} fill="#7489c3" d="M364.3 318.9c-20 0-21.6-23.5-21.6-30.6 0-32.9 24-74.6 52.7-91.2a43 43 0 0 1 20.7-6.5c20 0 21.6 23.4 21.6 30.6 0 32.9-24 74.6-52.6 91.1a43 43 0 0 1-20.8 6.6z"
            />
            <path fill="#516cb4" d="M383.7 271c-5 0-5.5-6-5.5-7.7 0-8.4 6-19 13.3-23.1a10.8 10.8 0 0 1 5.3-1.7c5 0 5.4 6 5.4 7.8a30 30 0 0 1-13.3 23 10.8 10.8 0 0 1-5.2 1.7z"
            />
            <path fill="#fff" d="M385.7 270c-4.4 0-4.8-5.3-4.8-6.9 0-7.4 5.4-16.8 11.8-20.5a9.7 9.7 0 0 1 4.7-1.4c4.5 0 4.8 5.2 4.8 6.8 0 7.4-5.4 16.8-11.8 20.5a9.5 9.5 0 0 1-4.7 1.5z"
            />
            <path fill="#fff" d="M399.4 241.5c6.6 3.2 7.8 12.3 4 19.5-4.1 8-14.9 12-20.2 8.2M435.8 143.8c-5.7 0-9.4-4.6-9.5-11.8 0-10 7.1-22.4 16-27.5a14.8 14.8 0 0 1 7.3-2.2c5.7 0 9.4 4.6 9.4 11.8 0 10-7.1 22.4-15.9 27.5a14.8 14.8 0 0 1-7.4 2.2z"
            />
            <ellipse cx="442.65" cy="123.04" fill="#516cb4" rx="21.86" ry="12.66"
            transform="rotate(-59.8 442.7 123)" />
            <path fill="#7489c3" d="M435.8 140.2c-5.4 0-5.8-6.3-5.8-8.2 0-8.8 6.4-19.9 14-24.3a11.5 11.5 0 0 1 5.5-1.8c5.4 0 5.8 6.3 5.8 8.2 0 8.8-6.4 19.9-14 24.3a11.5 11.5 0 0 1-5.6 1.8z"
            />
            <path fill="#516cb4" d="M441 127.4c-1.4 0-1.5-1.6-1.5-2a8 8 0 0 1 3.5-6.2 2.8 2.8 0 0 1 1.4-.5c1.4 0 1.5 1.6 1.5 2a8 8 0 0 1-3.6 6.2 2.9 2.9 0 0 1-1.4.5z"
            />
            <path fill="#fff" d="M441.5 127.1c-1.2 0-1.3-1.4-1.3-1.8a7.1 7.1 0 0 1 3.1-5.5 2.6 2.6 0 0 1 1.3-.4c1.2 0 1.3 1.4 1.3 1.9a7 7 0 0 1-3.2 5.4 2.5 2.5 0 0 1-1.2.4z"
            />
            <path fill="#fff" d="M445.1 119.5c1.8.9 2 3.3 1 5.2-1 2.1-4 3.2-5.3 2.2M137.6 471.4c-21.3 0-35.1-17.3-35.2-44.2-.1-37.8 26.5-84 59.4-103 9.7-5.5 19-8.3 27.6-8.3 21.4 0 35.2 17.3 35.3 44.2 0 37.8-26.6 84-59.5 103-9.6 5.5-18.9 8.3-27.6 8.3z"
            />
            <ellipse cx="161.31" cy="393.44" fill="#516cb4" rx="81.55" ry="47.23"
            transform="rotate(-59.8 161.3 393.4)" />
            <path id="speakerL" ref={speakerL} fill="#7489c3" d="M137.6 457.8c-20 0-21.5-23.4-21.5-30.6-.1-32.9 24-74.6 52.6-91.1a43 43 0 0 1 20.7-6.6c20 0 21.6 23.4 21.6 30.6.1 32.9-24 74.6-52.6 91.1a42.9 42.9 0 0 1-20.8 6.6z"
            />
            <path fill="#516cb4" d="M157 409.9c-5 0-5.5-6-5.5-7.8a30 30 0 0 1 13.4-23 10.9 10.9 0 0 1 5.2-1.7c5 0 5.5 6 5.5 7.8a30 30 0 0 1-13.3 23 11 11 0 0 1-5.3 1.7z"
            />
            <path fill="#fff" d="M159 408.9c-4.4 0-4.8-5.3-4.8-6.9 0-7.4 5.4-16.8 11.8-20.5a9.7 9.7 0 0 1 4.7-1.4c4.5 0 4.9 5.2 4.9 6.8 0 7.4-5.4 16.8-11.9 20.5a9.7 9.7 0 0 1-4.6 1.5z"
            />
            <path fill="#fff" d="M172.7 380.4c6.6 3.2 7.8 12.3 4 19.5-4.1 8-14.9 12-20.2 8.2"
            />
            <polygon fill="#fff" points="238.05 265.72 238.05 430.81 321.45 382.65 321.45 217.57 238.05 265.72"
            />
            <polygon fill="#516cb4" points="238.05 326.42 238.05 374.21 321.45 326.05 321.45 278.27 238.05 326.42"
            />
            <polygon fill="#7489c3" points="246.05 331.04 313.45 292.12 313.45 321.43 246.05 360.35 246.05 331.04"
            />
            <path fill="#516cb4" d="M292.8 302c3-1.8 5.6-.4 5.6 3a12.2 12.2 0 0 1-5.5 9.7c-3.1 1.7-5.6.3-5.6-3.2a12.2 12.2 0 0 1 5.5-9.6zM268.5 316.2c3-1.8 5.6-.3 5.6 3.2a12.2 12.2 0 0 1-5.6 9.5c-3 1.8-5.5.4-5.5-3.1a12.2 12.2 0 0 1 5.5-9.6z"
            />
            <polygon fill="#38c2c9" points="309.93 294.16 309.93 318.94 246.05 355.83 246.05 360.35 313.45 321.43 313.45 292.12 309.93 294.16"
            />
            <polygon fill="#38c2c9" points="313.45 321.43 309.93 318.94 246.05 355.83 246.05 360.35 313.45 321.43"
            />
            <polygon fill="#fff" points="308.81 363.89 315.52 374.52 307.52 379.18 300.81 368.54 308.81 363.89"
            />
            <polygon fill="#f5f3f7" points="300.81 368.54 307.52 379.18 307.52 381.14 300.81 377.87 300.81 368.54"
            />
            <polygon fill="url(#linear-gradient-bb-3)" points="315.52 374.52 307.52 379.18 307.52 381.14 315.52 376.49 315.52 374.52"
            />
            <polygon fill="#38c2c9" points="296.91 370.86 303.61 381.5 295.61 386.15 288.91 375.51 296.91 370.86"
            />
            <polygon fill="#06b3bb" points="288.91 375.51 295.61 386.15 295.61 388.11 288.91 384.84 288.91 375.51"
            />
            <polygon fill="#516cb4" points="303.61 381.5 295.61 386.15 295.61 388.11 303.61 383.46 303.61 381.5"
            />
            <polygon fill="#38c2c9" points="285 377.84 291.71 388.47 283.71 393.13 277 382.49 285 377.84"
            />
            <polygon fill="#06b3bb" points="277 382.49 283.71 393.13 283.71 395.09 277 391.82 277 382.49"
            />
            <polygon fill="#516cb4" points="291.71 388.47 283.71 393.13 283.71 395.09 291.71 390.44 291.71 388.47"
            />
            <polygon fill="#38c2c9" points="273.1 384.81 279.81 395.45 271.81 400.1 265.1 389.46 273.1 384.81"
            />
            <polygon fill="#06b3bb" points="265.1 389.46 271.81 400.1 271.81 402.06 265.1 398.79 265.1 389.46"
            />
            <polygon fill="#516cb4" points="279.81 395.45 271.81 400.1 271.81 402.06 279.81 397.41 279.81 395.45"
            />
            <polygon fill="#38c2c9" points="261.19 391.79 267.9 402.42 259.9 407.07 253.19 396.44 261.19 391.79"
            />
            <polygon fill="#06b3bb" points="253.19 396.44 259.9 407.07 259.9 409.04 253.19 405.77 253.19 396.44"
            />
            <polygon fill="#516cb4" points="267.9 402.42 259.9 407.07 259.9 409.04 267.9 404.38 267.9 402.42"
            />
            <polygon fill="#06b3bb" points="254.02 384.06 253.19 383.65 253.19 385.61 254.02 386.02 254.02 384.06"
            />
            <polygon fill="#38c2c9" points="262.02 379.4 261.19 379.02 253.19 383.65 254.02 384.06 262.02 379.4"
            />
            <polygon fill="#516cb4" points="262.02 379.4 254.02 384.06 254.02 386.02 262.02 381.37 262.02 379.4"
            />
            <polygon fill="#06b3bb" points="265.92 377.05 265.1 376.65 265.1 378.61 265.92 379.02 265.92 377.05"
            />
            <polygon fill="#38c2c9" points="273.92 372.4 273.1 372.01 265.1 376.65 265.92 377.05 273.92 372.4"
            />
            <polygon fill="#516cb4" points="273.92 372.4 265.92 377.05 265.92 379.02 273.92 374.36 273.92 372.4"
            />
            <polygon fill="#06b3bb" points="277.82 370.05 277 369.64 277 371.61 277.82 372.01 277.82 370.05"
            />
            <polygon fill="#38c2c9" points="285.82 365.4 285 365.01 277 369.64 277.82 370.05 285.82 365.4"
            />
            <polygon fill="#516cb4" points="285.82 365.4 277.82 370.05 277.82 372.01 285.82 367.36 285.82 365.4"
            />
            <polygon fill="#06b3bb" points="289.73 363.05 288.91 362.64 288.91 364.6 289.73 365.01 289.73 363.05"
            />
            <polygon fill="#38c2c9" points="297.73 358.39 296.91 358.01 288.91 362.64 289.73 363.05 297.73 358.39"
            />
            <polygon fill="#516cb4" points="297.73 358.39 289.73 363.05 289.73 365.01 297.73 360.36 297.73 358.39"
            />
            <polygon fill="#06b3bb" points="301.63 356.05 300.81 355.64 300.81 357.6 301.63 358.01 301.63 356.05"
            />
            <polygon fill="#38c2c9" points="309.63 351.39 308.81 351.01 300.81 355.64 301.63 356.05 309.63 351.39"
            />
            <polygon fill="#516cb4" points="309.63 351.39 301.63 356.05 301.63 358.01 309.63 353.36 309.63 351.39"
            />
            <path fill="#06b3bb" d="M250.4 283a3 3 0 0 0-3 .3 9.4 9.4 0 0 0-4.3 7.4 3 3 0 0 0 1.3 2.8l5 3 5.9-10.6z"
            />
            <path fill="#38c2c9" d="M250.4 283a3 3 0 0 0-3 .3 8.2 8.2 0 0 0-2 1.7l7.5 4.9.3-.2 2.1-3.8z"
            />
            <path fill="#516cb4" d="M252.2 286.2c2.4-1.4 4.3-.3 4.4 2.5a9.4 9.4 0 0 1-4.3 7.4c-2.4 1.4-4.3.3-4.3-2.5a9.4 9.4 0 0 1 4.2-7.4z"
            />
            <path fill="#06b3bb" d="M268.8 272.2a3.1 3.1 0 0 0-3 .3 9.4 9.4 0 0 0-4.3 7.5 3 3 0 0 0 1.3 2.7l5 3 5.9-10.5z"
            />
            <path fill="#38c2c9" d="M268.8 272.2a3.1 3.1 0 0 0-3 .3 7.8 7.8 0 0 0-2 1.8l7.5 4.8.2-.1 2.2-3.8z"
            />
            <path fill="#516cb4" d="M270.6 275.5c2.4-1.4 4.3-.3 4.3 2.4a9.5 9.5 0 0 1-4.3 7.5c-2.4 1.3-4.3.2-4.3-2.5a9.4 9.4 0 0 1 4.3-7.4z"
            />
            <path fill="#06b3bb" d="M287.1 261.3a3 3 0 0 0-3 .3 9.4 9.4 0 0 0-4.3 7.4 3 3 0 0 0 1.3 2.8l5 3 5.9-10.6z"
            />
            <path fill="#38c2c9" d="M287.1 261.3a3 3 0 0 0-3 .3 7.8 7.8 0 0 0-2 1.7l7.5 4.9.3-.1 2.1-3.9z"
            />
            <path fill="#516cb4" d="M289 264.5c2.4-1.4 4.3-.3 4.3 2.5a9.5 9.5 0 0 1-4.3 7.4c-2.3 1.4-4.3.3-4.3-2.5a9.4 9.4 0 0 1 4.3-7.4z"
            />
            <path fill="#06b3bb" d="M309.3 243.9c-1.3-.7-3.1-.6-5 .5A15.9 15.9 0 0 0 297 257c0 2.4.8 4 2.2 4.7l8.3 5 10-17.8z"
            />
            <path fill="#38c2c9" d="M309.3 243.9c-1.3-.7-3.1-.6-5 .5a12.8 12.8 0 0 0-3.5 3l12.7 8.2.4-.3 3.6-6.5z"
            />
            <path fill="#516cb4" d="M312.4 249.4c4-2.3 7.2-.5 7.3 4.1a16 16 0 0 1-7.3 12.5c-4 2.3-7.2.5-7.2-4.2a16 16 0 0 1 7.2-12.4z"
            />
            <polygon fill="#516cb4" points="394.46 169.31 401.1 165.48 401.1 125.93 394.46 129.76 394.46 169.31"
            />
            <g id="slide5" ref={slide5}>
                <polygon fill="#06b3bb" points="390.44 137.97 388.75 137.14 388.75 142.38 390.44 143.22 390.44 137.97"
                />
                <polygon fill="#38c2c9" points="406.81 128.45 405.13 127.66 388.75 137.14 390.44 137.97 406.81 128.45"
                />
                <polygon fill="#516cb4" points="406.81 128.45 390.44 137.97 390.44 143.22 406.81 133.69 406.81 128.45"
                />
            </g>
            <polygon fill="#516cb4" points="370.13 183.25 376.77 179.42 376.77 139.86 370.13 143.69 370.13 183.25"
            />
            <g id="slide4" ref={slide4}>
                <polygon fill="#06b3bb" points="366.1 175.78 364.42 174.94 364.42 180.18 366.1 181.02 366.1 175.78"
                />
                <polygon fill="#38c2c9" points="382.48 166.25 380.8 165.46 364.42 174.94 366.1 175.78 382.48 166.25"
                />
                <polygon fill="#516cb4" points="382.48 166.25 366.1 175.78 366.1 181.02 382.48 171.49 382.48 166.25"
                />
            </g>
            <polygon fill="#516cb4" points="345.8 197.32 352.44 193.49 352.44 153.94 345.8 157.77 345.8 197.32"
            />
            <g id="slide3" ref={slide3}>
                <polygon fill="#06b3bb" points="341.77 175.38 340.09 174.55 340.09 179.79 341.77 180.62 341.77 175.38"
                />
                <polygon fill="#38c2c9" points="358.15 165.85 356.47 165.06 340.09 174.55 341.77 175.38 358.15 165.85"
                />
                <polygon fill="#516cb4" points="358.15 165.85 341.77 175.38 341.77 180.62 358.15 171.09 358.15 165.85"
                />
            </g>
            <polygon fill="#516cb4" points="321.47 211.34 328.11 207.51 328.11 167.95 321.47 171.79 321.47 211.34"
            />
            <g id="slide2" ref={slide2}>
                <polygon fill="#06b3bb" points="317.44 198.7 315.76 197.86 315.76 203.1 317.44 203.94 317.44 198.7"
                />
                <polygon fill="#38c2c9" points="333.82 189.17 332.14 188.38 315.76 197.86 317.44 198.7 333.82 189.17"
                />
                <polygon fill="#516cb4" points="333.82 189.17 317.44 198.7 317.44 203.94 333.82 194.41 333.82 189.17"
                />
            </g>
            <polygon fill="#516cb4" points="297.14 225.38 303.77 221.55 303.77 182 297.14 185.83 297.14 225.38"
            />
            <g id="slide1" ref={slide1}>
                <polygon fill="#06b3bb" points="293.11 198.7 291.43 197.86 291.43 203.1 293.11 203.94 293.11 198.7"
                />
                <polygon fill="#38c2c9" points="309.49 189.17 307.8 188.38 291.43 197.86 293.11 198.7 309.49 189.17"
                />
                <polygon fill="#516cb4" points="309.49 189.17 293.11 198.7 293.11 203.94 309.49 194.41 309.49 189.17"
                />
            </g>
            <polygon fill="#38c2c9" points="423.06 109.28 425.38 110.59 462.15 84.04 466.8 57.84 464.48 56.53 423.06 80.44 423.06 109.28"
            />
            <polygon fill="#516cb4" points="425.38 110.59 466.8 86.68 466.8 57.84 425.38 81.76 425.38 110.59"
            />
            <polygon fill="#06b3bb" points="425.38 81.76 423.06 80.44 423.06 109.28 425.38 110.59 425.38 81.76"
            />
            <path fill="#fff" d="M104.2 336.8c-5.7 0-9.4-4.6-9.4-11.8 0-10 7-22.4 15.8-27.5a15 15 0 0 1 7.4-2.2c5.7 0 9.4 4.6 9.4 11.8 0 10-7 22.4-15.9 27.5a14.9 14.9 0 0 1-7.3 2.2z"
            />
            <ellipse cx="111.1" cy="316.06" fill="#516cb4" rx="21.86" ry="12.66" transform="rotate(-59.8 111.1 316)"
            />
            <path fill="#7489c3" d="M104.2 333.2c-5.3 0-5.8-6.3-5.8-8.2 0-8.8 6.4-19.9 14-24.3a11.5 11.5 0 0 1 5.6-1.7c5.3 0 5.8 6.2 5.8 8.2 0 8.7-6.4 19.8-14 24.2a11.4 11.4 0 0 1-5.6 1.8z"
            />
            <path fill="#516cb4" d="M109.3 320.4c-1.3 0-1.4-1.6-1.4-2a8 8 0 0 1 3.5-6.2 2.9 2.9 0 0 1 1.4-.5c1.4 0 1.5 1.6 1.5 2.1a8 8 0 0 1-3.5 6.2 3 3 0 0 1-1.5.4z"
            />
            <path fill="#fff" d="M109.9 320.1c-1.2 0-1.3-1.4-1.3-1.8a7 7 0 0 1 3.2-5.5 2.6 2.6 0 0 1 1.2-.4c1.2 0 1.3 1.5 1.3 1.9a7 7 0 0 1-3.2 5.4 2.5 2.5 0 0 1-1.2.4z"
            />
            <path fill="#fff" d="M113.5 312.5c1.8.9 2.1 3.3 1.1 5.2-1 2.2-4 3.2-5.4 2.2"
            />
            <polygon fill="#38c2c9" points="91.49 302.3 93.81 303.61 130.58 277.06 135.23 250.87 132.91 249.55 91.49 273.46 91.49 302.3"
            />
            <polygon fill="#516cb4" points="93.81 303.61 135.23 279.7 135.23 250.87 93.81 274.78 93.81 303.61"
            />
            <polygon fill="#06b3bb" points="93.81 274.78 91.49 273.46 91.49 302.3 93.81 303.61 93.81 274.78"
            />
            <polygon fill="#06b3bb" points="139.93 283.78 138.24 282.95 138.24 288.19 139.93 289.02 139.93 283.78"
            />
            <polygon fill="#38c2c9" points="156.3 274.25 154.62 273.46 138.24 282.95 139.93 283.78 156.3 274.25"
            />
            <polygon fill="#516cb4" points="156.3 274.25 139.93 283.78 139.93 289.02 156.3 279.5 156.3 274.25"
            />
            <polygon fill="#06b3bb" points="139.93 298.66 138.24 297.82 138.24 303.06 139.93 303.9 139.93 298.66"
            />
            <polygon fill="#38c2c9" points="156.3 289.13 154.62 288.34 138.24 297.82 139.93 298.66 156.3 289.13"
            />
            <polygon fill="#516cb4" points="156.3 289.13 139.93 298.66 139.93 303.9 156.3 294.37 156.3 289.13"
            />
            <polygon fill="#06b3bb" points="139.93 313.54 138.24 312.7 138.24 317.94 139.93 318.78 139.93 313.54"
            />
            <polygon fill="#38c2c9" points="156.3 304.01 154.62 303.22 138.24 312.7 139.93 313.54 156.3 304.01"
            />
            <polygon fill="#516cb4" points="156.3 304.01 139.93 313.54 139.93 318.78 156.3 309.25 156.3 304.01"
            />
            <polygon fill="#06b3bb" points="163.79 269.3 162.11 268.46 162.11 273.7 163.79 274.54 163.79 269.3"
            />
            <polygon fill="#38c2c9" points="180.17 259.77 178.49 258.98 162.11 268.46 163.79 269.3 180.17 259.77"
            />
            <polygon fill="#516cb4" points="180.17 259.77 163.79 269.3 163.79 274.54 180.17 265.01 180.17 259.77"
            />
            <polygon fill="#06b3bb" points="163.79 284.18 162.11 283.34 162.11 288.58 163.79 289.42 163.79 284.18"
            />
            <polygon fill="#38c2c9" points="180.17 274.65 178.49 273.86 162.11 283.34 163.79 284.18 180.17 274.65"
            />
            <polygon fill="#516cb4" points="180.17 274.65 163.79 284.18 163.79 289.42 180.17 279.89 180.17 274.65"
            />
            <polygon fill="#06b3bb" points="163.79 299.05 162.11 298.22 162.11 303.46 163.79 304.29 163.79 299.05"
            />
            <polygon fill="#38c2c9" points="180.17 289.53 178.49 288.74 162.11 298.22 163.79 299.05 180.17 289.53"
            />
            <polygon fill="#516cb4" points="180.17 289.53 163.79 299.05 163.79 304.29 180.17 294.77 180.17 289.53"
            />
            <path fill="#06b3bb" d="M211 243.8c-1.4-.7-3.2-.6-5.2.6a15.9 15.9 0 0 0-7.2 12.5c0 2.3.9 4 2.2 4.7l8.3 5 10-17.8z"
            />
            <path fill="#38c2c9" d="M211 243.8c-1.4-.7-3.2-.6-5.2.6a13 13 0 0 0-3.4 3l12.7 8.2.4-.3 3.6-6.4z"
            />
            <path fill="#516cb4" d="M214 249.3c4-2.3 7.3-.4 7.3 4.2A16 16 0 0 1 214 266c-4 2.3-7.2.5-7.2-4.2a15.9 15.9 0 0 1 7.2-12.5z"
            />
            <path fill="#06b3bb" d="M241.9 225.9c-1.3-.8-3.1-.6-5 .5a15.9 15.9 0 0 0-7.3 12.5c0 2.4.8 4 2.2 4.7l8.3 5 10-17.8z"
            />
            <path fill="#38c2c9" d="M241.9 225.9c-1.3-.8-3.1-.6-5 .5a13 13 0 0 0-3.5 3l12.7 8.2.4-.2 3.6-6.5z"
            />
            <path fill="#516cb4" d="M245 231.4c4-2.4 7.3-.5 7.3 4.1A16 16 0 0 1 245 248c-4 2.3-7.3.5-7.3-4.2a16 16 0 0 1 7.3-12.4z"
            />
            <path fill="#06b3bb" d="M272.9 207.9c-1.3-.7-3.1-.6-5.1.6a16 16 0 0 0-7.2 12.5c0 2.3.8 4 2.2 4.7l8.3 5 10-17.8z"
            />
            <path fill="#38c2c9" d="M272.9 207.9c-1.3-.7-3.1-.6-5.1.6a13.4 13.4 0 0 0-3.4 3l12.7 8.1.4-.2 3.6-6.5z"
            />
            <path fill="#516cb4" d="M276 213.4c4-2.3 7.3-.5 7.3 4.1a16 16 0 0 1-7.3 12.6c-4 2.3-7.3.4-7.3-4.2a16 16 0 0 1 7.3-12.5z"
            />
            <polygon fill="#42145f" points="148.2 265.29 415.94 110.71 415.94 94.56 148.2 249.14 148.2 265.29"
            />
            <polygon fill="#516cb4" points="175.98 174.41 175.98 134.32 172.78 136.14 172.78 176.23 175.98 174.41"
            />
            <polygon fill="#516cb4" points="295.8 53.42 159.96 131.85 172.78 140.52 308.59 62.12 308.59 57.73 295.8 53.42"
            />
            <polygon fill="#fff" points="295.8 50.62 159.96 129.05 172.78 136.14 308.59 57.73 295.8 50.62"
            />
            <polygon fill="#f5f3f7" points="172.78 176.23 172.78 136.14 159.96 129.05 159.96 169.14 172.78 176.23"
            />
            <polygon fill="#f5f3f7" points="305.39 99.7 305.39 63.95 292.56 71.36 292.56 92.61 305.39 99.7"
            />
            <polygon fill="#516cb4" points="308.59 97.88 308.59 57.78 305.39 59.61 305.39 99.7 308.59 97.88"
            />
        </g>
    </svg>
  )


}
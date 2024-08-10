import React from "react";

const Line = () => {
  return (
    <div className="w-fit mx-auto my-20">
      <svg
        width="12"
        height="321"
        viewBox="0 0 12 321"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          opacity="0.4"
          x1="6"
          y1="5"
          x2="5.99999"
          y2="321"
          stroke="white"
          stroke-width="2"
        />
        <g filter="url(#filter0_d_132_204)">
          <line
            x1="6"
            y1="5"
            x2="6.00001"
            y2="264"
            stroke="white"
            stroke-width="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_132_204"
            x="0"
            y="0"
            width="12"
            height="269"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_132_204"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_132_204"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Line;

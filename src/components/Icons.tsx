import { IconProps } from "@radix-ui/react-icons/dist/types";

export const Icons = {
  LinkArrow: (props: IconProps) => {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8.16675 19.8334L19.8334 8.16669"
          stroke="currentcolor"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.16675 8.16669H19.8334V19.8334"
          stroke="currentcolor"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Copyright: (props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        {...props}
      >
        <g clip-path="url(#clip0_165_113)">
          <path
            d="M13.75 7.5C13.75 10.9517 10.9517 13.75 7.5 13.75C4.04822 13.75 1.25 10.9517 1.25 7.5C1.25 4.04822 4.04822 1.25 7.5 1.25C10.9517 1.25 13.75 4.04822 13.75 7.5Z"
            stroke="#F5FAE8"
            stroke-width="1.5"
          />
          <path
            d="M9.375 8.75C9.375 9.44037 8.81537 10 8.125 10H7.5C6.91756 10 6.62638 10 6.39663 9.90487C6.09036 9.778 5.84702 9.53462 5.72015 9.22837C5.625 8.99862 5.625 8.70744 5.625 8.125V6.875C5.625 6.29256 5.625 6.00136 5.72015 5.77164C5.84702 5.46536 6.09036 5.22202 6.39663 5.09515C6.62638 5 6.91756 5 7.5 5H8.125C8.81537 5 9.375 5.55964 9.375 6.25"
            stroke="#F5FAE8"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_165_113">
            <rect width="15" height="15" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
};

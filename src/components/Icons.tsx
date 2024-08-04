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
};

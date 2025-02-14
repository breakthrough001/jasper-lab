import clsx from "clsx";

export default function RoundCorner({ className, ...props }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("absolute", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H0C8.837 0 16 7.163 16 16V0Z"
        fill="white"
      />
    </svg>
  );
}

const BrandLogo = () => {
  return (
    <div className="flex shrink-0 items-center gap-[8px]">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top part of the Spenzee mark */}
        <path
          d="M18.45 5.75C16.95 3.45 14.35 2.15 11.45 2.15C7.35 2.15 4.2 4.55 4.2 7.85C4.2 10.55 5.95 12.05 9.85 13.35L13.1 14.4C15.05 15.05 15.9 15.85 15.9 17.15C15.9 19 14.05 20.35 11.35 20.35C8.45 20.35 6.05 18.9 4.6 16.5"
          stroke="#087344"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom part */}
        <path
          d="M6.55 18.95C8.05 21.35 10.6 22.75 13.55 22.75C17.65 22.75 20.8 20.35 20.8 17.05C20.8 14.35 19.05 12.85 15.15 11.55L11.9 10.5C9.95 9.85 9.1 9.05 9.1 7.75C9.1 5.9 10.95 4.55 13.65 4.55C16.55 4.55 18.95 6 20.4 8.4"
          stroke="#38A16E"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-[15px] font-bold leading-none tracking-[-0.04em] text-[#101815]">
        Spenzee
      </span>
    </div>
  )
}

export default BrandLogo
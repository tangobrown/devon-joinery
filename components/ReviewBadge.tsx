type Props = {
  size?: "sm" | "md";
  variant?: "light" | "dark";
};

export function ReviewBadge({ size = "md", variant = "light" }: Props) {
  const isSm = size === "sm";
  const containerClasses =
    variant === "light"
      ? "bg-white border border-[#ececec] shadow-[0_2px_10px_rgba(0,0,0,.05)]"
      : "bg-white text-[#222]";

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-[15px] py-2 ${containerClasses}`}
    >
      <span
        className={`${isSm ? "text-[20px]" : "text-[22px]"} font-bold text-[#4285f4]`}
      >
        G
      </span>
      <div className="text-left leading-[1.25]">
        <div className="flex items-center gap-1.5">
          <span
            className={`text-starGold ${isSm ? "text-[11px]" : "text-[12px]"} tracking-[1px]`}
          >
            ★★★★★
          </span>
          <span
            className={`font-bold ${isSm ? "text-[12px]" : "text-[13px]"}`}
          >
            4.9
          </span>
        </div>
        <div
          className={`font-semibold ${isSm ? "text-[12px]" : "text-[13px]"}`}
        >
          Top Rated Service
        </div>
        <div
          className={`text-[#8a8a8a] ${isSm ? "text-[9px]" : "text-[10px]"}`}
        >
          verified by Trustindex
        </div>
      </div>
    </div>
  );
}

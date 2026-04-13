type Props = {
  children?: React.ReactNode;
  className?: string;
  hideNotch?: boolean;
};

export default function PhoneFrame({ children, className = "", hideNotch = false }: Props) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ aspectRatio: "9 / 19", maxWidth: 320 }}>
      <div
        className="absolute inset-0 rounded-[3rem] overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #1c1c2b, #0A0A0A)",
          border: "2px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 40px 80px -20px rgba(0,0,0,0.6), inset 0 0 0 6px #0A0A0A, inset 0 0 0 8px rgba(255,255,255,0.05)",
        }}
      >
        {!hideNotch && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-full z-10" />
        )}
        <div className="absolute inset-[6px] rounded-[2.6rem] overflow-hidden bg-[#0A0A0A]">
          {children}
        </div>
      </div>
    </div>
  );
}

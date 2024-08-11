interface IStrokeDigitProps {
  digit: number;
  strokeWidth?: number;
  fontSize?: number;
}

export const StrokeDigit = ({ digit, strokeWidth = 2, fontSize = 64 }: IStrokeDigitProps) => {
  const numDigits = String(digit).length;
  const width = numDigits * (fontSize * 0.6);

  return (
    <svg
      width={width}
      height={fontSize}
      viewBox={`0 0 ${width} ${fontSize}`}
      fill="none"
      stroke="#fff"
      strokeWidth={strokeWidth}
    >
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" in="SourceAlpha" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.47" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
          {/* <feFlood floodColor="" result="glow" /> */}
          <feComposite operator="over" in2="SourceAlpha" />
        </filter>
      </defs>
      <text
        x={width / 2}
        y={fontSize / 2 + strokeWidth}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        filter="url(#shadow)"
      >
        {digit}
      </text>
    </svg>
  );
};

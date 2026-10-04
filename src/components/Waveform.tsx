const bars = [18, 26, 34, 22, 40, 28, 48, 20, 36, 24, 54, 26, 42, 18, 30, 22, 46, 24]

function Waveform({ className = '' }: { className?: string }) {
  return (
    <div className={`waveform ${className}`.trim()} aria-hidden="true">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="waveform__bar"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  )
}

export default Waveform

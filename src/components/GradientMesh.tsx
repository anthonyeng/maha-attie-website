import clsx from 'clsx'

interface GradientMeshProps {
  variant: 'warm' | 'cool' | 'dark'
  className?: string
}

const blobs: Record<
  GradientMeshProps['variant'],
  [string, string, string]
> = {
  warm: [
    'radial-gradient(circle, rgba(160,106,59,0.35) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(194,148,88,0.3) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(139,90,48,0.25) 0%, transparent 70%)',
  ],
  cool: [
    'radial-gradient(circle, rgba(59,130,160,0.3) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(48,139,130,0.25) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(80,120,170,0.3) 0%, transparent 70%)',
  ],
  dark: [
    'radial-gradient(circle, rgba(13,21,32,0.5) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(30,20,50,0.4) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(21,32,45,0.45) 0%, transparent 70%)',
  ],
}

const positions: [string, string, string] = [
  'top-0 left-[10%]',
  'top-[20%] right-[5%]',
  'bottom-[10%] left-[30%]',
]

export default function GradientMesh({ variant, className }: GradientMeshProps) {
  const blobStyles = blobs[variant]

  return (
    <div className={clsx('absolute inset-0 overflow-hidden pointer-events-none z-0', className)}>
      {blobStyles.map((bg, i) => (
        <div
          key={i}
          className={clsx('absolute w-[40vw] h-[40vw] rounded-full', positions[i])}
          style={{
            background: bg,
            filter: 'blur(80px)',
            opacity: 0.3,
            animation: `meshFloat 8s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

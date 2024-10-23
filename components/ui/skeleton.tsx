import cn from '../../tailwindcss-config'

export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('bg-lightGray animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

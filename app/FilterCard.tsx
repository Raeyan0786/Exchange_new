import React, { FC, PropsWithChildren } from 'react'
import cn from '../tailwindcss-config'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover'
import { PopoverContentProps } from '@radix-ui/react-popover'

const FilterCard: FC<
  {
    label: string
    className?: string
    count?: number
    isOpen?: boolean
    setIsOpen?: (e: boolean) => void
    popContentProps?: PopoverContentProps
    contentClassName?: string
  } & PropsWithChildren
> = ({
  label,
  className,
  children,
  count = 0,
  isOpen,
  setIsOpen,
  popContentProps = {},
  contentClassName,
}) => {
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'relative z-[0] flex cursor-pointer items-center rounded-full border border-black px-4 py-2 text-black data-[state=open]:bg-black data-[state=open]:text-white',
            className,
          )}
        >
          <div className='mr-4'>
          <svg
      width='17'
      height='12'
      viewBox='0 0 17 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      
    >
      <path
        d='M13.0871 6.78571H3.65848C3.18705 6.78571 2.87277 6.47143 2.87277 6C2.87277 5.52857 3.18705 5.21429 3.65848 5.21429H13.0871C13.5585 5.21429 13.8728 5.52857 13.8728 6C13.8728 6.47143 13.5585 6.78571 13.0871 6.78571ZM10.7299 11.5H6.01562C5.5442 11.5 5.22991 11.1857 5.22991 10.7143C5.22991 10.2429 5.5442 9.92857 6.01562 9.92857H10.7299C11.2013 9.92857 11.5156 10.2429 11.5156 10.7143C11.5156 11.1857 11.2013 11.5 10.7299 11.5ZM15.4442 2.07143H1.30134C0.829911 2.07143 0.515625 1.75714 0.515625 1.28571C0.515625 0.814286 0.829911 0.5 1.30134 0.5H15.4442C15.9156 0.5 16.2299 0.814286 16.2299 1.28571C16.2299 1.75714 15.9156 2.07143 15.4442 2.07143Z'
        fill='currentColor'
      />
    </svg>
          </div>
          
          <span>{label}</span>
          {!!count && (
            <span className='trans absolute right-0 top-0 flex h-[22px] w-[22px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-black text-xs text-white'>
              {count}
            </span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={10}
        className={cn(
          'w-auto overflow-hidden rounded-[10px] p-0',
          contentClassName,
        )}
        {...popContentProps}
      >
        {children}
      </PopoverContent>
    </Popover>
  )
}

export default FilterCard

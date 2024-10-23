import type { Column } from '@tanstack/react-table'
import React from 'react'
import cn from '../../tailwindcss-config'

type SortContent = {
  title?: string
  column?: Column<any, unknown>
  className?: string
}
const TableHeader = ({ column, title, className }: SortContent) => {
  return (
    <div className={cn(className, 'flex items-center gap-[0.94rem]')}>
      <span className='w-[200px] text-sm font-semibold leading-normal'>{title}</span>
      {/* <button type='button' onClick={() => {}}>
        <Image
          src='svg/icons/sort.svg'
          alt='sort'
          className='h-[0.79131rem] w-[0.56463rem] cursor-pointer'
        />
      </button> */}
    </div>
  )
}

export default TableHeader

'use client'

import React, { FC, useState } from 'react'
import FilterCard from './FilterCard'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import './globals.css'
import { Button, Input } from '@/components'

const defaultRange = {
  min: 0,
  max: 1281087601,
}

interface VolumeFilterProps {
  volumeRange: [number,number];
  setVolumeRange: (volumns: [number,number]) => void;
}

const PriceRange:FC<VolumeFilterProps> = ({volumeRange,setVolumeRange}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    getFieldState,
    reset,
    trigger
  } = useForm({
    resolver: yupResolver(new Yup.ObjectSchema({
      min: Yup.number().min(defaultRange.min).max(defaultRange.max),
      max: Yup.number().min(defaultRange.min).max(defaultRange.max),
    }) 
  ),
  defaultValues: {
    min:  defaultRange.min,
    max:  defaultRange.max,
  },
  });

  const handleReset = () => {
    

    setValue('min', defaultRange.min)
    setValue('max', defaultRange.max)
    trigger('min')
    setIsOpen(false)
  }

  const handleRange = (values) => {
    setIsOpen(false)
    setVolumeRange([values.min,values.max])
  }

  return (
    <FilterCard
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      label='Volumn'
      // count={min || max ? 1 : 0}
    >
      <div className='flex w-[450px] flex-col'>
        <div className='flex flex-col border-b p-4'>
          <span className='font-semibold'>Volumn Range(Total Volumn)</span>
          <RangeSlider
            id='price-range-slider'
            className='mt-6'
            value={[Number(getValues().min), Number(getValues().max)]}
            onInput={([min, max]) => {
              setValue('min', min)
              if (max < min) {
                setValue('max', min)
              } else {
                setValue('max', max)
              }
              trigger()
            }}
            min={defaultRange.min}
            max={defaultRange.max}
          />
          {/* <Form {...form}> */}
            <form
              onSubmit={handleSubmit(handleRange)}
              className='mt-6 flex h-full w-full gap-10'
            >
               <Controller
            name="min"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                // id="contact_no"
                inputClassName="placeholder-Full Name text-[#696767]  pl-[0.5rem] mx-auto sm:mx-0 mb-4 sm:mb-8  focus:border-primary peer block lg:h-[2.7372rem] h-[3rem] w-[85%] sm:w-full sm:mb-0 appearance-none rounded-[5px] sm:rounded-[0.3125rem] border-0  border-gray-300  bg-[#F0F0F0] lg:px-2.5 lg:py-2.5 p-1  text-sm  focus:outline-none focus:ring-0"
                placeholder="Min"
                type="text"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
          {/* <div style={{}} className="absolute -bottom-5">
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName.message}</span>
            )}
          </div> */}
              <Controller
            name="max"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                // id="contact_no"
                inputClassName="placeholder-Full Name text-[#696767]  pl-[0.5rem] mx-auto sm:mx-0 mb-4 sm:mb-8  focus:border-primary peer block lg:h-[2.7372rem] h-[3rem] w-[85%] sm:w-full sm:mb-0 appearance-none rounded-[5px] sm:rounded-[0.3125rem] border-0  border-gray-300  bg-[#F0F0F0] lg:px-2.5 lg:py-2.5 p-1  text-sm  focus:outline-none focus:ring-0"
                placeholder="Max"
                type="text"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
            </form>
        </div>
        <div className='flex w-full justify-between px-4 py-3'>
          <Button
            onClick={handleReset}
            autoFocus={false}
            type='button'
            className=' hover:bg-brand w-max rounded-full px-10 hover:text-white '
            label='Reset'
            // size='sm'
            // variant='outline'
          />

          <Button
            onClick={handleSubmit(handleRange)}
            autoFocus={false}
            className='w-max rounded-full px-10  hover:text-white'
            label='Apply'
            // size='sm'
          />

        </div>
      </div>
    </FilterCard>
  )
}

export default PriceRange

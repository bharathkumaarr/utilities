import React from 'react'
import {CardFooter} from "@/components/ui/card"

function Footer() {
  return (
    <CardFooter className='flex flex-col items-center justify-center text-center select-none absolute bottom-2 gap-2 text-neutral-500'>
        <p className='flex'>Built by 
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#737373" viewBox="0 0 256 256"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg>
          </span>
           @<a className='hover:underline' href="https://x.com/bharathkumxr/" target='_blank'>bharathkumxr</a></p>
        <p className='border p-2 pl-3 pr-3 rounded-full text-center flex items-center justify-center hover:bg-neutral-600 transition-colors duration-300 ease-in-out hover:text-neutral-900'><a href="https://github.com/bharathkumaarr/utilities" target='_blank'>Feel free to contribute here</a></p>
    </CardFooter>
  )
}

export default Footer

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {v4 as uuidv4} from 'uuid'

function UuidGenerator() {
const [uuid, setUuid] = useState('');

const generateUuid = () => {
    setUuid(uuidv4())
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(uuid)
}
  return (
    
        <div className='w-3/5 flex items-center justify-center'>

        <Card className='w-8/10 border-0'>
            <CardHeader className='flex items-center justify-center flex-col select-none'>
                <CardTitle className='text-8xl'>UUID Generator</CardTitle>
                <CardDescription className='text-2xl text-neutral-500'>Free and Open Source <span className='underline text-neutral-400'>UUID Generator</span> </CardDescription>
            </CardHeader>
            <CardContent className='p-2'>
                <div className='h-14 border bg-neutral-500 border-neutral-400 w-full outline-0 rounded-2xl mt-0 cursor-text flex items-center justify-center text-2xl'><p data-placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" contenteditable>{uuid}</p></div>
                <div className='flex justify-between mt-4 select-none'>
                    <Button onClick={copyToClipboard} className='text-center text-xl border border-neutral-500 rounded-2xl cursor-pointer active:scale-95'>Copy</Button>
                    <Button onClick={generateUuid} className='text-center text-xl border border-neutral-500 rounded-2xl text-neutral-900 bg-neutral-200 cursor-pointer active:scale-95'>Generate New</Button>
                </div>
            </CardContent>
            
        </Card>
        </div>
      
  )
}

export default UuidGenerator

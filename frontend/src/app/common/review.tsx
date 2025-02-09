import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel } from '@trendyol-js/react-carousel'
import React from 'react'

const Review = () => {
  return (
    <div>
      <Carousel show={1} slide={5} swiping={true} infinite={true} dynamic={true} autoSwipe={5000} transition={0.5} className='p-10'>
      {
        Array.from({ length: 5 }).map((_, index) => (
          <a href='' className='w-full'>
        <Card className='w-full bg-[#e0e2e2]'>
          
        </Card>
        </a>
        ))
      }
        
      </Carousel>
    </div>
  )
}

export default Review
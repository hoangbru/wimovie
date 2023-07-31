import { SectionFilm } from '@/components'
import React from 'react'
import { toast } from 'react-hot-toast'

export const metadata = {
    title: `Wimovie | Movie`
}

const page = () => {
  return (
    <div className='w-full'>
      <SectionFilm sectionTitle='Popular'/>
      <SectionFilm sectionTitle='Action'/>
      <SectionFilm sectionTitle='Education'/>
    </div>
  )
}

export default page
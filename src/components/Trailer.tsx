import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
    href: string
}

const Trailer:FC<Props> = ({href}) => {
  return (
    <Link 
    href={href} 
    className='
      transition
      hover:scale-110
      hover:ring-1 ring-zinc-50 ring-offset-1 rounded-md
    '>
        <Image
            src={"/images/poster.jpeg"}
            alt="trailer image"
            width={75}
            height={45}
            className="rounded-md w-32 h-16 object-cover"
          />
    </Link>
  )
}

export default Trailer
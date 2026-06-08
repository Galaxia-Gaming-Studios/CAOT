//import React from 'react'
import Image from 'next/image';
//import Link from 'next/Link';
import './Github.css';
interface Props {
  // Define your props here
}

export default function Github({}: Props) {
  return (
    <div className="contedor">
      <Image className="imagen"
          src="/git.svg" 
          alt="Diagrama completo del sistema respiratorio" 
          width={0}
          height={0}
      />
      <h1>
         {/*<Link href="/"= "Github" />*/}
      </h1>
    </div>
  )
}
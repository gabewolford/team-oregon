import Image from "next/image"

export default function PresentedBy({ color, display }) {
  return (
    <div className={`${display} justify-center -mt-1`}>
        <div className="flex flex-col justify-center">
          <p className={`text-sm mb-1 text-center ${color}`}>presented by</p>
          <Image 
            src="/images/rodda-paint-logo.png"
            width={100}
            height={50}
            alt="Rodda Paint Logo"
          >
          </Image>
        </div>
    </div>
  )
}

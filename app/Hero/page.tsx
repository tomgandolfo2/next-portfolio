import Image from "next/image"
import React from "react"

type Props = {}

export default function Hero({}: Props) {
    return (
        <div className="h-screen">
            <div>Hero</div>
            <img src="public/heroImg.jpg" alt="Hero Image" />
        </div>
    )
}

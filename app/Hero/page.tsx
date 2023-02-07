import Image from "next/image"
import React from "react"

type Props = {}

export default function Hero({}: Props) {
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center space-y-5 pt-10">
                <h1>Thomas Gandolfo</h1>
                <div className="rounded-full">
                    <img src="/heroImg.jpg" alt="Hero Image" width={300} height={300} />
                </div>
                <h2>Software Engineer</h2>
                <div className="space-x-5 text-bold">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

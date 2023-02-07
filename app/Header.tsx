import React from "react"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { SocialIcon } from "react-social-icons"

type Props = {}

function Header({}: Props) {
    return (
        <div className="flex justify-between items-center p-3 shadow-md sticky top-0 z-10 bg-neutral-100">
            <div className="space-x-4">
                <SocialIcon url="https://linkedin.com/" />
                <SocialIcon url="https://youtube.com/" />
                <SocialIcon url="https://twitter.com/" />
            </div>
            <a href="#contact" className="flex items-center space-x-3">
                <h2>Contact Me!</h2>
                <EnvelopeIcon className="h-10 w-10 text-blue-400" />
            </a>
        </div>
    )
}

export default Header

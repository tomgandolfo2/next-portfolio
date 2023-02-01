import React from "react"

type Props = {}

export default function About({}: Props) {
    return (
        <div className="h-screen">
            <div className="font-bold text-2xl p-5">About</div>
            <div className="flex items-center space-x-10 p-5">
                <img
                    src="/heroImg.jpg"
                    alt="Hero Image"
                    width={300}
                    height={300}
                    className="w-[200px] md:w-[300px] lg:w-[400px] transition-all"
                />
                <div>
                    <h3 className="font-bold text-xl">A little bit about me...</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At praesentium
                        eum aspernatur voluptates expedita rem mollitia id necessitatibus. Corporis
                        vel harum at ipsa, ipsum voluptatibus voluptate natus dolores veniam
                        aliquid.
                    </p>
                </div>
            </div>
        </div>
    )
}

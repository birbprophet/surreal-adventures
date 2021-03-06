import React from "react"

import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

import FloatingIconsSection from "../components/elements/FloatingIconSection"
import ChevronDownSvg from "../assets/svgs/cheveron-down.svg"

const ReactComponent: React.FC = () => {
  const typistLoopTextList: string[] = [
    "Stories",
    "Crossovers",
    "Adventures",
    "Fanfics",
    "Memes",
  ]
  return (
    <>
      <FloatingIconsSection />
      <div className="relative top-0 inset-x-0 flex flex-col h-screen mt-12">
        <div className="mt-16 ml-6 font-rounded font-bold text-gray-200 text-4xl text-left tracking-normal leading-tight">
          <div className="flex">
            <div className="mr-2">Create </div>
            <div>
              <TypistLoop interval={3000}>
                {typistLoopTextList.map(text => (
                  <Typist
                    key={text}
                    startDelay={500}
                    cursor={{
                      show: false,
                      blink: true,
                      element: "_",
                    }}
                  >
                    {text}
                    <Typist.Delay ms={4000} />
                    {Array.prototype.map.call(text, _ => (
                      <Typist.Backspace count={1} delay={50} />
                    ))}
                  </Typist>
                ))}
              </TypistLoop>
            </div>
          </div>
          <div>you never knew</div>
          <div>you wanted</div>
        </div>
        <div className="text-gray-400 mt-4 ml-6 mr-10 text-lg text-left">
          Generate your own unique stories by interacting with an AI via "choose
          your adventure" style prompts.
        </div>

        <div className="flex-1 flex flex-col justify-end mb-24 pb-6 mx-6">
          <div className="text-gray-400 flex justify-center text-lg">
            <ChevronDownSvg className="stroke-current fill-current text-gray-400 h-6 mx-2" />
            <div>Start your own adventure</div>
            <ChevronDownSvg className="stroke-current fill-current text-gray-400 h-6 mx-2" />
          </div>
          <button className="bg-gray-200 rounded-lg border border-gray-200 px-4 py-4 w-full text-gray-900 text-2xl font-rounded font-semibold mt-6">
            Create Stories Now
          </button>
        </div>
      </div>
    </>
  )
}

export default ReactComponent

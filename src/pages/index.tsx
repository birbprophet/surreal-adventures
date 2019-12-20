import React from "react"
import { graphql } from "gatsby"

import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

import ChevronDownSvg from "../assets/svgs/cheveron-down.svg"

import SvgLines from "react-mt-svg-lines"
import HeroAnimationCompositionSvg from "../assets/images/hero_animation/hero_animation_composition_trace.svg"

import ChooseYourAdventureAnimation from "../assets/animations/ChooseYourAdventureAnimation"
import FloatingIconsSection from "../components/elements/FloatingIconSection"

import SEO from "../components/core/SEOElement"

const ReactComponent: React.FC<IProps> = ({ data }) => {
  const typistLoopTextList: string[] = [
    "Stories",
    "Crossovers",
    "Adventures",
    "Fanfics",
    "Memes",
  ]

  return (
    <>
      <SEO
        title={data.datoCmsHomePage.title}
        description={data.datoCmsHomePage.description}
        lang="en"
        meta={[]}
      />

      <FloatingIconsSection />
      <div className="relative top-0 inset-x-0 flex flex-col h-screen bg-grey-900">
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

        <div className="flex-1 flex flex-col justify-end pb-24 mx-6">
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
      <div className="h-screen">
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
        heyyy <br />
      </div>
    </>
  )
}

export default ReactComponent

export const query = graphql`
  query HomePageQuery {
    datoCmsHomePage {
      description
      title
    }
  }
`

export interface IProps {
  data: IData
}

export interface IData {
  datoCmsHomePage: IDatoCmsHomePage
}

export interface IDatoCmsHomePage {
  description: string
  title: string
}

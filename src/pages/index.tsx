import React from "react"
import { graphql } from "gatsby"

import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

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

      <div className="">
        <FloatingIconsSection />
        <div className="flex flex-col h-screen fixed top-0">
          <div className="mt-24 ml-6 font-rounded font-bold text-gray-200 text-4xl text-left tracking-normal leading-tight">
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
          <div className="text-gray-400 mt-4 ml-6 mr-10 text-lg text-left flex-1">
            Generate your own unique stories by interacting with an AI via
            "choose your adventure" style prompts.
          </div>

          <div className="relative bottom-0 mx-6 mb-12">
            <button className="bg-gray-200 rounded-lg border border-gray-200 px-4 py-4 w-full text-gray-900 text-2xl font-rounded font-semibold">
              Create Stories Now
            </button>
            <div className="text-gray-400 flex justify-center mt-6 text-lg">
              <div>Find out how it works</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-full pl-24 pr-8 mt-8 z-0"></div>
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

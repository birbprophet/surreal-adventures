import React from "react"
import { graphql } from "gatsby"

import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

import SvgLines from "react-mt-svg-lines"
import Svg from "../assets/images/surreal_undraw_dreamer_trace.svg"

import SurrealUndrawDreamer from "../assets/animations/SurrealUndrawDreamer"
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
      <div className="scrolling-auto">
        <div className="flex flex-col">
          <div className="mt-12 ml-6 font-rounded font-bold text-gray-200 text-4xl text-left tracking-normal leading-tight">
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
          <div className="text-gray-400 mt-6 ml-6 mr-10 text-lg">
            Generate your own unique stories by interacting with an AI via
            "choose your adventure" style prompts.
          </div>

          <button className="mx-6 mt-16">
            <button className="bg-gray-200 rounded-lg border border-gray-200 px-4 py-4 w-full text-gray-900 text-xl font-rounded font-medium">
              Create Stories Now
            </button>
          </button>
        </div>

        <div className="mt-12">
          <SvgLines animate={true} duration={2000}>
            <Svg className="animated-svg h-48 w-full stroke-current text-gray-700" />
          </SvgLines>
        </div>
      </div>
      <div className="fixed w-full pl-24 pr-8 mt-8 z-0 hidden"></div>
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

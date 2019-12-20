import React from "react"
import { graphql } from "gatsby"

import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

import SurrealUndrawDreamer from "../assets/animations/SurrealUndrawDreamer"
import FloatingIconsSection from "../components/elements/FloatingIconSection"

import SEO from "../components/core/SEOElement"

const ReactComponent: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <SEO
        title={data.datoCmsHomePage.title}
        description={data.datoCmsHomePage.description}
        lang="en"
        meta={[]}
      />

      <FloatingIconsSection />
      <div className="mt-12 ml-6 font-rounded font-bold text-gray-200 text-4xl text-left tracking-normal leading-tight">
        <div className="flex">
          <div className="mr-2">Create </div>
          <div>
            <TypistLoop interval={3000}>
              {["Stories", "Crossovers", "Adventures", "Fanfics", "Memes"].map(
                text => (
                  <Typist
                    key={text}
                    startDelay={500}
                    cursor={{
                      show: true,
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
                )
              )}
            </TypistLoop>
          </div>
        </div>

        <div>you never knew</div>
        <div>you wanted</div>
      </div>

      <div className="fixed w-full pl-24 pr-8 mt-8 z-0 hidden">
        <SurrealUndrawDreamer />
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

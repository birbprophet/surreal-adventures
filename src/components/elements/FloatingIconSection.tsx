import React from "react"
import { animated } from "react-spring"

import { generateFloatingIconProps } from "./generateFloatingIconProps"

import ShrekSvg from "../../assets/images/floating_icons/shrek.svg"
import TrumpSvg from "../../assets/images/floating_icons/trump.svg"
import KimJongUnSvg from "../../assets/images/floating_icons/kimjongun.svg"
import BigChungusSvg from "../../assets/images/floating_icons/bigchungus.svg"
import DogeSvg from "../../assets/images/floating_icons/doge.svg"
import RicardoSvg from "../../assets/images/floating_icons/ricardo.svg"
import PepeSvg from "../../assets/images/floating_icons/pepe.svg"

const ReactComponent: React.FC = () => {
  return (
    <div className="absolute top-0 mt-24 w-full h-64">
      <animated.div style={generateFloatingIconProps()}>
        <ShrekSvg className="opacity-50 h-8" />
      </animated.div>

      <animated.div style={generateFloatingIconProps()}>
        <TrumpSvg className="opacity-50 h-8" />
      </animated.div>

      <animated.div style={generateFloatingIconProps()}>
        <KimJongUnSvg className="opacity-50 h-8" />
      </animated.div>

      <animated.div style={generateFloatingIconProps()}>
        <BigChungusSvg className="opacity-50 h-8" />
      </animated.div>

      <animated.div style={generateFloatingIconProps()}>
        <DogeSvg className="opacity-50 h-8" />
      </animated.div>

      <animated.div style={generateFloatingIconProps()}>
        <RicardoSvg className="opacity-50 h-8" />
      </animated.div>

      <animated.div style={generateFloatingIconProps()}>
        <PepeSvg className="opacity-50 h-8" />
      </animated.div>
    </div>
  )
}

export default ReactComponent

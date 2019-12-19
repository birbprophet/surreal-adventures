import React, { useState, useRef } from "react"

import Typist from "react-typist"

import { SiteState } from "../../stores/siteState"

import MenuIcon from "./elements/MenuIcon"
import MenuOverlay from "./elements/MenuOverlay"

const ReactComponent: React.FC = () => {
  let { siteState, setSiteState } = SiteState.useContainer()

  const menuOpen: boolean = siteState.menuOpen
  const toggleMenuOpen = () =>
    setSiteState({ ...siteState, ...{ menuOpen: !menuOpen } })

  return (
    <>
      <div className="flex pt-2">
        <div className="py-2 px-4 flex-1 z-20">
          <h3 className="font-rounded font-semibold text-gray-100 text-2xl">
            <Typist
              avgTypingDelay={100}
              startDelay={1000}
              cursor={{
                show: true,
                blink: true,
                element: "_",
                hideWhenDone: false,
              }}
            >
              Surreal <Typist.Delay ms={500} />
              Adventures
            </Typist>
          </h3>
        </div>
        <div>
        <MenuOverlay menuOpen={menuOpen}/>
        <MenuIcon menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
        </div>
      </div>
    </>
  )
}

export default ReactComponent

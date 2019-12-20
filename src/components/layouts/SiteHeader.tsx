import React, { useState, useRef } from "react"
import { Link } from "gatsby"

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
    <div className="fixed top-0 bg-gray-900 z-50 flex w-full">
      <div className="left-0 flex pt-2 overflow-x-hidden flex-1">
        <div className="my-2 mx-6 z-20 cursor-pointer relative z-30">
          <Link
            to="/"
            className="font-rounded font-semibold text-gray-100 text-2xl"
          >
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
          </Link>
        </div>
      </div>
      <div className="m-2">
        <MenuOverlay menuOpen={menuOpen} />
        <MenuIcon menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
      </div>
    </div>
  )
}

export default ReactComponent

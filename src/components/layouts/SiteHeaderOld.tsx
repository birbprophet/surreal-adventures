import React, { useState, useRef } from "react"
import { SiteState } from "../../stores/siteState"

import {
  Lottie,
  ReactLottiePlayingState,
  ReactLottieConfig,
} from "@crello/react-lottie"
import animatedMenu from "../animations/animated-menu.json"
import Typist from "react-typist"

const animatedMenuConfig: ReactLottieConfig = {
  animationData: animatedMenu,
  autoplay: false,
}

const ReactComponent: React.FC = () => {
  const [menuIconPlayingState, setMenuIconPlayingState] = useState<
    ReactLottiePlayingState
  >("stopped")
  const menuIconIsClosing = useRef<boolean>(false)
  let { siteState, setSiteState } = SiteState.useContainer()

  const handleMenuIconOnClick = () => {
    if (menuIconPlayingState !== "playing") {
      setMenuIconPlayingState("playing")
      setSiteState({
        ...siteState,
        ...{
          menuOpen: !menuIconIsClosing.current,
        },
      })
    }
  }

  const handleMenuIconEnterFrameEvent = (event: any) => {
    const { currentTime } = event
    if (currentTime >= 85 && !menuIconIsClosing.current) {
      menuIconIsClosing.current = true
      setMenuIconPlayingState("paused")
    }
  }

  const handleMenuIconCompleteEvent = () => {
    setMenuIconPlayingState("stopped")
    menuIconIsClosing.current = false
  }

  return (
    <>
      <div className="flex pt-2">
        <div className="py-2 px-4 flex-1">
          <h3 className="font-rounded font-semibold text-gray-900 text-2xl">
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
        <div
          className="w-10 mr-4 cursor-pointer high"
          onClick={handleMenuIconOnClick}
        >
          <Lottie
            config={animatedMenuConfig}
            playingState={menuIconPlayingState}
            lottieEventListeners={[
              {
                callback: handleMenuIconEnterFrameEvent,
                name: "enterFrame",
              },
              {
                callback: handleMenuIconCompleteEvent,
                name: "complete",
              },
            ]}
          />
        </div>
      </div>
      <div
        className={
          "h-screen z-10 opacity-50 " + (siteState.menuOpen ? "" : "hidden")
        }
      ></div>
    </>
  )
}

export default ReactComponent

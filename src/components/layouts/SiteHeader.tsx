import React, { useState, useRef } from "react"
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
                hideWhenDone: true,
                hideWhenDoneDelay: 3200,
              }}
            >
              Surreal <Typist.Delay ms={500} />
              Adventures
            </Typist>
          </h3>
        </div>
        <div
          className="w-10 mr-4 cursor-pointer high"
          onClick={() => setMenuIconPlayingState("playing")}
        >
          <Lottie
            config={animatedMenuConfig}
            playingState={menuIconPlayingState}
            lottieEventListeners={[
              {
                callback: ({ currentTime }) => {
                  if (currentTime >= 85 && !menuIconIsClosing.current) {
                    menuIconIsClosing.current = true
                    setMenuIconPlayingState("paused")
                  }
                },
                name: "enterFrame",
              },
              {
                callback: () => {
                  setMenuIconPlayingState("stopped")
                  menuIconIsClosing.current = false
                },
                name: "complete",
              },
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default ReactComponent

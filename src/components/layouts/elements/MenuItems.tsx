import React, { useState } from "react"
import { Link } from "gatsby"

import { useSpring, animated } from "react-spring"

import ChevronDownSvg from "../../../assets/svgs/cheveron-down.svg"

const ReactComponent: React.FC = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const resourcesOpenProps = useSpring({
    transform: resourcesOpen ? "rotate(0deg)" : "rotate(-90deg)",
  })

  const aboutOpenProps = useSpring({
    transform: aboutOpen ? "rotate(0deg)" : "rotate(-90deg)",
  })

  const handleResourcesOnClick = () => {
    if (aboutOpen && !resourcesOpen) {
      setAboutOpen(!aboutOpen)
    }
    setResourcesOpen(!resourcesOpen)
  }

  const handleAboutOnClick = () => {
    if (resourcesOpen && !aboutOpen) {
      setResourcesOpen(!resourcesOpen)
    }
    setAboutOpen(!aboutOpen)
  }

  return (
    <>
      <div className="absolute top-0 inset-x-0 mt-24 mx-6 flex flex-col h-full">
        <Link to="/">
          <div className="pb-2 border-b-2 border-gray-600">
            <div className="text-xl text-gray-200 pl-4 pr-2 py-2 flex flex-row items-center">
              <div>How It Works</div>
            </div>
          </div>
        </Link>

        <div className="pb-2 border-b-2 border-gray-600 mt-4">
          <div
            className={
              "text-xl text-gray-200 flex rounded-lg pl-4 pr-2 py-2 " +
              (resourcesOpen ? "bg-gray-700 font-semibold" : "")
            }
            onClick={handleResourcesOnClick}
          >
            <div className="flex-1">Resources</div>
            <div>
              <animated.div style={resourcesOpenProps}>
                <ChevronDownSvg className="fill-current w-8 h-8" />
              </animated.div>
            </div>
          </div>
          <div className={"ml-6 my-2 " + (resourcesOpen ? "" : "hidden")}>
            <div className="mb-2">
              <Link to="/" className="text-xl text-gray-200">
                Getting Started
              </Link>
            </div>
            <div className="mb-2">
              <Link to="/" className="text-xl text-gray-200">
                Playing With Friends
              </Link>
            </div>
            <div className="mb-2">
              <Link to="/" className="text-xl text-gray-200">
                FAQs
              </Link>
            </div>
          </div>
        </div>

        <div className="pb-2 border-b-2 border-gray-600 mt-4">
          <div
            className={
              "text-xl text-gray-200 flex rounded-lg pl-4 pr-2 py-2 " +
              (aboutOpen ? "bg-gray-700 font-semibold" : "")
            }
            onClick={handleAboutOnClick}
          >
            <div className="flex-1">About</div>
            <div>
              <animated.div style={aboutOpenProps}>
                <ChevronDownSvg className="fill-current w-8 h-8" />
              </animated.div>
            </div>
          </div>
          <div className={"ml-6 my-2 " + (aboutOpen ? "" : "hidden")}>
            <div className="mb-2">
              <Link to="/" className="text-xl text-gray-200">
                Technology
              </Link>
            </div>
            <div className="mb-2">
              <Link to="/" className="text-xl text-gray-200">
                Contact Us
              </Link>
            </div>
            <div className="mb-2">
              <Link to="/" className="text-xl text-gray-200">
                Terms & Policies
              </Link>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="pb-2 border-b-2 border-gray-600 mt-4">
            <div className="text-xl text-gray-200 pl-4 pr-2 py-2 flex flex-row items-center">
              <div>Blog</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="absolute bottom-0 inset-x-0 mx-6 mb-24 pb-6 pt-8 bg-gray-700">
        <button className="bg-gray-200 rounded-lg border border-gray-200 px-4 py-4 w-full text-gray-900 text-2xl font-rounded font-semibold">
          Create Stories Now
        </button>
      </div>
    </>
  )
}

export default ReactComponent

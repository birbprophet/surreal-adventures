import React, { useState } from "react"
import { Link } from "gatsby"

import ChevronUpSvg from "../../../assets/svgs/cheveron-up.svg"
import ChevronDownSvg from "../../../assets/svgs/cheveron-down.svg"

const ReactComponent: React.FC = () => {
  const [resourcesOpen, setResourcesOpen] = useState(true)

  const handleResourcesOnClick = () => {
    setResourcesOpen(!resourcesOpen)
  }
  return (
    <>
      <div className="absolute top-0 inset-x-0 mt-20 mx-6 flex flex-col">
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
              (resourcesOpen ? "bg-gray-700" : "")
            }
            onClick={handleResourcesOnClick}
          >
            <div className="flex-1">Resources</div>
            <div>
              {resourcesOpen ? (
                <ChevronUpSvg className="fill-current w-8 h-8" />
              ) : (
                <ChevronDownSvg className="fill-current w-8 h-8" />
              )}
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
                Generating Stories
              </Link>
            </div>
            <div className="mb-2">
              <Link to="/" className="text-xl text-gray-200">
                Playing With Friends
              </Link>
            </div>
          </div>
        </div>

        <Link to="/">
          <div className="pb-2 border-b-2 border-gray-600 mt-4">
            <div className="text-xl text-gray-200 pl-4 pr-2 py-2">FAQs</div>
          </div>
        </Link>
      </div>
      <div className="absolute bottom-0 inset-x-0 mx-6 mb-8">
        <button className="bg-gray-200 rounded-lg border border-gray-200 px-4 py-4 w-full text-gray-900 text-xl font-rounded font-medium">
          Create Stories Now
        </button>
      </div>
    </>
  )
}

export default ReactComponent

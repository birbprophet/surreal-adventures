import React from "react"
import { Link } from "gatsby"

import ChevronUpSvg from "../../../assets/svgs/cheveron-up.svg"

const ReactComponent: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 mt-20 mx-6 w-9/12">
      <Link to="/" className="text-xl text-gray-200">
        What is Surreal Adventures?
      </Link>
      <hr className="mb-3" />
      <Link to="/" className="text-xl text-gray-200 flex">
        <div>Resources</div>
        <ChevronUpSvg className="fill-current w-4 h-4 mr-2" />
      </Link>
      <hr className="" />
    </div>
  )
}

export default ReactComponent

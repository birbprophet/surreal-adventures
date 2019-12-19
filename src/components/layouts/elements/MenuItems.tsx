import React from "react"
import { Link } from "gatsby"

const ReactComponent: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 mt-20 mx-6 w-9/12">
      <Link to="/" className="text-xl text-gray-200">
        What is Surreal Adventures?
      </Link>
      <hr className="mb-3" />
      <Link to="/" className="text-xl text-gray-200 flex">
        <div>Resources</div>
      </Link>
      <hr className="" />
    </div>
  )
}

export default ReactComponent

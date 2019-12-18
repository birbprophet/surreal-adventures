import React, { useState, useMemo, useCallback } from "react"
import { Lottie } from "@crello/react-lottie"
import animationData from "./animated-menu.json"

const ReactComponent: React.FC = () => (
  <Lottie config={{ animationData: animationData }} />
)

export default ReactComponent

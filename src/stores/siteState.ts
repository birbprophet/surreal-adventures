import React, { useState } from "react"
import { createContainer } from "unstated-next"

interface IInitialState {
  menuOpen: boolean
}

const defaultState: IInitialState = {
  menuOpen: true,
}

const useSiteState = (initialState = defaultState) => {
  let [siteState, setSiteState] = useState(initialState)

  return { siteState, setSiteState }
}

export let SiteState = createContainer(useSiteState)

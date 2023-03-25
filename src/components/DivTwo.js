import React from "react"
import DivOne from "./components/DivOne"


function DivTwo(props){

  return <div ><h3 onClick={props.updateCapitalization} >{props.name}</h3></div>
}

export default DivTwo

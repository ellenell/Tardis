import React from "react"

// Now that App.js is rendering DivOne and sending it props, we can access those values through the props object under the names we pass them under in App.js 

function DivOne(props){

  return <div><h3 onClick={props.updateCapitalization} >{props.name}</h3></div>
}

export default DivOne

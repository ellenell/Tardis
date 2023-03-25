import './App.css'
import DivOne from "./components/DivOne"
import DivTwo from "./components/DivTwo"



// Import the useState hook
import {useState} from "react"

function App(props){

  // variable to be used as the initial value of our state
  const tardis = {
  name: 'Time and Relative Dimension in Space',
  caps: false,
  }

  // creating our state, using tardis as the initial value
  // state is the variable that holds the data
  // set state is a function to update the state
  const [state, setState] = useState(tardis)

  // Function that will update the state to all call caps or all lowercase

  const updateCapitalization = () => {
    // create a new object to replace state, it's name property will be capitalized based the current states caps property
    // If state.caps is true, lowercase the name, if not, uppercase the name
    const newState = {
    name: state.caps ? state.name.toLowercase() : state.name.toUpperCase(),
    caps: false,
    }

    // Replace the current state with the new state, this triggers the component rebuilding itself to reflect changes
    setState(newState)
  }

  // The return value which is the JSX/HTML the component renders
  // we now pass the function and the name property as props to DivOne
  return <div><DivTwo updateCapitalization={updateCapitalization} name={state.name}/></div>

}

export default App


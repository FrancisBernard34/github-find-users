import classes from './App.module.css'
import Home from "./components/Home"

function App() {
  return (
    <div className={classes.app}>
      <h1>Github Finder</h1>
      <Home />
    </div>
  )
}

export default App

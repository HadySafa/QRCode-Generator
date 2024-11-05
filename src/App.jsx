import Choice from "./Choice"
import QR from "./QR"
import { useState } from "react"

function App() {

  const [choice,setChoice] = useState("URL")

  return (
    <div className="main">
      <Choice choice={choice} setChoice={setChoice} />
      <QR choice={choice} />
    </div>
  )


}

export default App

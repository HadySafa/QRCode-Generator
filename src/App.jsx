import Choice from "./Choice"
import QR from "./QR"
import { useState } from "react"

function App() {

  const [choice,setChoice] = useState("URL")
  const [scan, setScan] = useState(false);

  return (
    <div className="main">
      <Choice setScan={setScan} choice={choice} setChoice={setChoice} />
      <QR setScan={setScan} scan={scan} choice={choice} />
    </div>
  )


}

export default App

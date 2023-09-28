import CanvasModel from "./canvas"
import Home from "./pages/Home"
import Customizer from "./pages/Customizer"

function App() {
 

  return (
    <main className="app bg-teal-100 transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}

export default App

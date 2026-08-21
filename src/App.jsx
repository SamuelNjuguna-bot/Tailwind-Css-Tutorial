import Example from "./pages/Example"
import Cloud from "./pages/cloud"
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Example/>}>
      example
      </Route>
      <Route path="cloud" element={<Cloud/>}>
      example
      </Route>
    </Routes>
  )
}

export default App

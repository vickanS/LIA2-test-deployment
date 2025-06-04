import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/x" element={<div>hello world</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

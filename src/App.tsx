import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HOME} from './Routes/Routes'
import './App.css'
import Home from './Pages/Home'
import {Props, ThemeContextType} from './Types/props'
import {useThemeContext } from './Context/ThemeContext'

const Profile: Props = {
  Nombre: "Ismael",
  Apellido: "Chávez",
  Desc: "Un apasionado de la Programación."
}

function App() {

  const {Theme,setTheme} = useThemeContext() as ThemeContextType;

  return (
    <div id={Theme}>
    <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home {...Profile} />} />
    </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App

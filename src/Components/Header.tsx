import { useState } from 'react'
import {Link} from 'react-router-dom'
import ReactSwitch from "react-switch";
import CV from "../assets/CV.pdf";
import imagen from "../assets/Perfil.jpg";
import {Props, ThemeContextType} from '../Types/props'
import { useThemeContext } from '../Context/ThemeContext';

const Header = ({Nombre, Apellido, Desc}: Props) => {

  const { Theme, setTheme } = useThemeContext() as ThemeContextType;
  const [checked, setChecked] = useState<boolean>(false);

  const handleSwitch = (nextChecked: boolean) => {
    const newTheme: string = Theme === 'Light' ? 'Dark' : 'Light';
    setTheme(newTheme)
    setChecked(nextChecked);
  };


  return (
    <div id={Theme}>
      <div className="perfil-container">
        <img className="perfil" src={imagen} alt="" />
        <div className="perfil-desc">
          <h3>{Nombre} {Apellido}</h3>
          <p>{Desc}</p>
          <a href={CV} download className="btn btn-dark me-3">
              <i className="fa-solid fa-user-tie"></i> Resumen
          </a>
          <Link to={"https://github.com/Ismaeldevs"} target="_blank" className='btn btn-dark'>
              <i className="fa-brands fa-github"></i> GitHub
          </Link>
        </div>
      </div>
      <div className="check-switch">
          <ReactSwitch
            onChange={handleSwitch}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </div>
        <hr className="separador" />
      </div>
  )
}

export default Header

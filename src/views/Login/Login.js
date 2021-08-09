import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { userLogin } from "../../services/pruebaApi";
import "./Login.scss";

import imgLogo from "../../resources/img/Login-Best-Pizza.png";
import icUser from "../../resources/img/ic_usuario.png";
import icPass from "../../resources/img/ic_contrasena.png";

export default function Login( ) {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const history = useHistory();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      history.push("/listado");
    }
  })

  function handleClickLogin() {
    userLogin( userEmail, userPass, history );
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <div className="login__left__img"></div>
        </div>

        <div className="login__right">
          <a href="/">
            <img
              className="login__right__logo"
              src={imgLogo}
              alt={imgLogo}
            />
          </a>
          <div className="login__right__box">
            <h2 className="login__right__box__title">Bienvenido</h2>
            <p className="login__right__box__text">
              A las mejores pizzas del país
            </p>

            <form className="login__form">
              <div className="login__form__input">
                <input
                  value={userEmail}
                  onChange={({target: { value }}) => setUserEmail(value)}
                  placeholder="Usuario"
                  className="login__form__text-input"
                />
                <img className="login__form__input__icon" src={icUser} alt={icUser} />
              </div>

              <div className="login__form__input">
                <input
                  type="password" 
                  value={userPass}
                  onChange={({target: { value }}) => setUserPass(value)}
                  placeholder="Contraseña"
                  className="login__form__text-input"
                />
                <img className="login__form__input__icon" src={icPass} alt={icPass} />
              </div>
            </form>

            <a href="/" className="login__form__forget">¿Olvidaste tu contraseña?</a>
            <button className="login__form__button" onClick={() => handleClickLogin()}>Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
}

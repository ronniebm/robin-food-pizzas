import { useState } from "react"
import "./Login.scss";

import imgLogo from "../../resources/img/Login-Best-Pizza.png";
import icUser from "../../resources/img/ic_usuario.png";
import icPass from "../../resources/img/ic_contrasena.png";

export default function Login( users ) {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  function handleClick() {
    alert('click')
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <div className="login__left__img"></div>
        </div>

        <div className="login__right">
          <img
            className="login__right__logo"
            src={imgLogo}
            alt={imgLogo}
          />
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
            <button className="login__form__button" onClick={() => handleClick()}>Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
}

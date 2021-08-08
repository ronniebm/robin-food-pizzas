import "./Listado.scss";
import ListadoItem from "./ListadoItem/ListadoItem";

import imgLogo from "../../resources/img/Logo.png";
import icLock from "../../resources/img/ic_contrasena.png";
import ListadoSocial from "./ListadoFooter/ListadoFooter";

export default function Listado() {
    return (
        <div className="listado">
          <div className="listado__container">

            <div className="listado__left">
              <div className="listado__left__img"></div>
            </div>

            <div className="listado__right">
              <p className="listado__right__tab-title">Pizzerías</p>
              <img
                className="listado__right__logo"
                src={imgLogo}
                alt={imgLogo}
              />
              <div className="listado__right__logout">
                <img
                  className="listado__right__logout__icon"
                  src={icLock}
                  alt={icLock}
                />
                <span className="listado__right__logout__exit">Salir</span>
              </div>

              <div className="listado__right__box">
                <h2 className="listado__right__box__title">Tiendas</h2>
                <p className="listado__right__box__text">
                  Escoge tu pizzería favorita
                </p>
    
                <div className="listado__stores">
                    <ListadoItem brand="Pano's Pizza" address="Calle 54 # 7-43" />
                    <ListadoItem brand="Pano's Pizza" address="Calle 54 # 7-43" />
                    <ListadoItem brand="Pano's Pizza" address="Calle 54 # 7-43" />
                    <ListadoItem brand="Pano's Pizza" address="Calle 54 # 7-43" />
                    <ListadoItem brand="Pano's Pizza" address="Calle 54 # 7-43" />
                    <ListadoItem brand="Pano's Pizza" address="Calle 54 # 7-43" />
                </div>
               </div>
               
               <ListadoSocial />
            </div>

          </div>
        </div>
      );
}
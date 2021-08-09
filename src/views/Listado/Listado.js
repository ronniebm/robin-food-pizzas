import ListadoItem from "./ListadoItem/ListadoItem";
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getStores } from "../../services/pruebaApi";
import "./Listado.scss";

import imgLogo from "../../resources/img/Logo.png";
import icLock from "../../resources/img/ic_contrasena.png";
import ListadoSocial from "./ListadoFooter/ListadoFooter";

export default function Listado() {
  const [stores, setStores] = useState([]);
  const history = useHistory();

  function handleClickLogout () {
    localStorage.removeItem('user');
    history.push("");
  }

  useEffect(() => {
    getStores( setStores );
  }, [])

  console.log(stores);

  return (
      <div className="listado">
        <div className="listado__container">

          <div className="listado__left">
            <div className="listado__left__img"></div>
          </div>

          <div className="listado__right">
            <p className="listado__right__tab-title">Pizzerías</p>
            <a href="/" className="listado__right__logo-wrap">
              <img
                className="listado__right__logo"
                src={imgLogo}
                alt={imgLogo}
              />
            </a>
            <div className="listado__right__logout">
              <a
                onClick={() => handleClickLogout()}
                className="listado__right__logout__exit"
              >
                <img
                  className="listado__right__logout__icon"
                  src={icLock}
                  alt={icLock}
                />
                <span className="listado__right__logout__exit">Salir</span>
              </a>
            </div>

            <div className="listado__right__box">
              <h2 className="listado__right__box__title">Tiendas</h2>
              <p className="listado__right__box__text">
                Escoge tu pizzería favorita
              </p>
  
              <div className="listado__stores">
                {
                  stores.map( store => 
                    <ListadoItem
                      brand={store.name}
                      address={store.address}
                    />
                  )
                }
                <ListadoItem
                  brand="Salvatore"
                  address="Calle 84 # 49B - 120"
                />
              </div>
              </div>

              <ListadoSocial />
          </div>

        </div>
      </div>
    );
}
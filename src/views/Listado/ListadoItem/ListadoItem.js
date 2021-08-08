import "./ListadoItem.scss";
import { Link } from 'react-router-dom';

import img01 from "../../../resources/img/Panos_pizza.png"

export default function ListadoItem({brand, address}) {
  return (
    <div className="listado-item">
      <Link to="/">
        <div className="listado-item__logo-div">
            <img className="listado-item__logo-img" src={img01} alt={img01}/>
        </div>
      </Link>
      <p className="listado-item__title">{brand}</p>
      <p className="listado-item__address">{address}</p>
    </div>
  );
}

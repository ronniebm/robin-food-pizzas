import "./ListadoItem.scss";

import img01 from "../../../resources/img/Panos_pizza.png"

export default function ListadoItem({ brand, address, setModal, stores, setProducts, setStoreSelected}) {

  function handleClickItem(event) {
    const storeSelected = event.currentTarget.id;
    const store = stores.filter((item)=> item.name === storeSelected );
    
    setStoreSelected(store);
    setProducts(store[0].products);
    setModal(true);
  }

  return (
    <div className="listado-item">
      <a onClick={(event) => handleClickItem(event)} id={ brand } >
        <div className="listado-item__logo-div">
            <img className="listado-item__logo-img" src={img01} alt={img01}/>
        </div>
      </a>
      <p className="listado-item__title">{brand}</p>
      <p className="listado-item__address">{address}</p>
    </div>
  );
}

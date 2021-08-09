import "./ListadoModalWindow.scss";

import icClose from '../../../resources/img/ic_close.png'
import icPizza from '../../../resources/img/panos_pizza_1.png'

export default function ListadoModalWindow({ setModal, storeSelected, products }) {

    const storeName = storeSelected[0].name;
    const storeAddress = storeSelected[0].address;
    const storeDesc = storeSelected[0].description;

    function handleClickClose () {
        setModal(false);
    }

    return (
        <div className="listado-modal-window">
            <div className="listado-modal-window__wrap">

                <a onClick={() => handleClickClose()} >
                    <img className="listado-modal-window__close" src={icClose} alt={icClose} />
                </a>

                <div className="listado-modal-window__datos">
                    <h3 className="listado-modal-window__datos__name">{storeName}</h3>
                    <hr/>
                    <p className="listado-modal-window__datos__address">{storeAddress}</p>
                    <p className="listado-modal-window__datos__description">{storeDesc}</p>
                </div>

                <div className="listado-modal-window__menu">
                        {
                            products.map( item => 
                                
                                <div className="listado-modal-window__item">
                                    <img
                                        src={icPizza}
                                        className="listado-modal-window__item__img"
                                    />
                                    <div className="listado-modal-window__item__wrap">
                                        <p className="listado-modal-window__item__title">{item.name}</p>
                                        <p className="listado-modal-window__item__text">"Lorem ipsum dolor sit amet, consectetur adipiscing."</p>
                                    </div>
                                </div>
                                
                            )
                        }
                        

                </div>


            </div>
        </div>
    )
}
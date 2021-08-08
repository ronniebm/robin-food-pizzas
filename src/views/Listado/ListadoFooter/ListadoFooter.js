import "./ListadoFooter.scss";

import icFcbk from '../../../resources/img/ic_facebook.png'
import icInst from '../../../resources/img/ic_instagram.jpg'
import icPizWh from '../../../resources/img/BestPizza.png'

export default function ListadoFooter() {
    return (
        <div className="listado-footer">
            <div className="listado-footer__social">
                <img className="listado-footer__social__icon" src={icFcbk} alt={icFcbk} />
                <img className="listado-footer__social__icon" src={icInst} alt={icInst}/>
            </div>

            <img className="listado-footer__brand-logo" src={icPizWh} alt={icPizWh} />

        </div>
    )
}

import "./Card.css"

import editSvg from "../../assets/icons/edit.svg"
import deleteSvg from "../../assets/icons/delete.svg"
import logoSvg from "../../assets/icons/twitter.svg"

function Card() {
    return(
        <div className="card">
            <img className="card__logo" alt="company logo" src={logoSvg} />
            <div className="card__info">
                <p className="info__name">ТОО "Название компании"</p>
                <p className="info__iin">ИИН/БИН 696969</p>
            </div>
            <div className="card__buttons">
                <img className="card__button" alt="edit button icon" src={editSvg}/>
                <img className="card__button" alt="delete button icon" src={deleteSvg} />
            </div>
        </div>
    )
}

export default Card
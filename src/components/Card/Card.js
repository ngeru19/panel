

function Card() {
    return(
        <div className="card">
            <img className="card__logo" alt="company logo" src="#" />
            <div className="card__info">
                <p className="info__name">ТОО "Название компании"</p>
                <p className="info__iin">ИИН/БИН 696969</p>
            </div>
            <div className="card__buttons">
                <img className="button edit" alt="edit button icon" src="#" />
                <img className="button delete" alt="delete button icon" src="#" />
            </div>
        </div>
    )
}

export default Card
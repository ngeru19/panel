

function EditPanel() {
    return(
        <div className="edit_panel">
            <h3 >Редактировать данные организации</h3>
            <div className="edit_panel__buttons">
                <button className="button">ТОО</button>
                <button className="button">ИП</button>
                <button className="button">Прочие</button>
            </div>
            <div className="edit_panel__forms">
                <form>
                    <label htmlFor="tax-form-select">Выберите систему налогообложения</label>
                    <select
                    id="tax-form-select">
                        <option value="0-18">
                            18 and under
                        </option>
                        <option value="19-39">
                            19 to 39
                        </option>
                        <option value="40-64">
                            40 to 64
                        </option>
                        <option value="65-infinity">
                            65 and over
                        </option>
                    </select>

                    <label htmlFor="iin-input">Введите ИИН/БИН</label>
                    <input
                    type="text" 
                    id="iin-input"></input>
                    
                </form>
            </div>
        </div>
    )
}

export default EditPanel;
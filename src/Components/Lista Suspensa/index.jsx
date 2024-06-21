import "./Lista-suspensa.css"
export const ListaSuspensa = (props) => {
    return (
        <div className="ListaSuspensa">
            <label>
                {props.label}
            </label>
            <select onChange={(e) => props.aoAlterar(e.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
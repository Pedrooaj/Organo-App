import "./Input.css";
export const Input = ({tipo = 'text', label, valor, aoAlterar, obrigatorio, placeholder}) => {    
    return(
        <div className={`Input Input-${tipo}`}>
            <label>
                {label}
            </label>
            <input type={tipo} value={valor} onChange={(e) => aoAlterar(e.target.value)} required={obrigatorio} placeholder={`${placeholder}...`} />
        </div>
    )
}
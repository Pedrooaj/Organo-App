import { Colaborador } from "../Colaborador";
import "./time.css";
import hexToRgba from 'hex-to-rgba';

export const Time = (props) => {
    return (    
        (props.colaboradores.length > 0) ? <section style={{ backgroundColor: hexToRgba(props.time.cor, '0.4') }} className="time">
            <input value={props.time.cor} onChange={e => props.mudarCor(e.target.value, props.time.id, props.nome)} type="color" className="input-cor"/>
            <h3 style={{ borderColor: props.time.cor}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador,indice) => {
                    return <Colaborador colaborador={colaborador} aoFavoritar={props.aoFavoritar} corDeFundo={props.time.cor} key={indice}  aoDeletar={props.aoDeletar} />
                })}
            </div>
        </section>
        : ''
    )
}
import "./colaborador.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    const favoritar = () => {
        aoFavoritar(colaborador);
    }

    const propsfavorito = {
        onClick: favoritar,
        color: 'yellow',
    }
    return(
        <div className="colaborador">
            <div className="deletar" onClick={() => aoDeletar(colaborador.id)}><MdDeleteForever /></div>
            <div className="cabecalho" style={{ backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <div className="nomes">
                    <h4>{colaborador.nome}</h4>
                    <h5>{colaborador.cargo}</h5>
                </div>
                <div className="favoritar">
                    {colaborador.favorito ? <FaStar {...propsfavorito} /> : <FaRegStar {...propsfavorito} />}
                </div>

            </div>
            
        </div>
    )
};
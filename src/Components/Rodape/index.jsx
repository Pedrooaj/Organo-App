import "./Rodape.css"
import { FaReact } from "react-icons/fa";

export const Rodape = () => {
    return(
        <footer  className="footer">
            <div className="redes">
                <a href="https://pedrooaj.cloud"><img src="/imagens/fb.png" alt="Facebook" /></a>
                <a href="https://pedrooaj.cloud"><img src="/imagens/tw.png" alt="Twitter" /></a>
                <a href="https://pedrooaj.cloud"><img src="/imagens/ig.png" alt="Instagram" /></a>
            </div>
            <div className="logo">
                <img src="/imagens/logo.png" alt="Logo" />
            </div>
            <div className="desenvolvido">
                <h2>Desenvolvido Por Pedrooaj &copy; 2024
                <br/>
                <FaReact />
                <br/>Design Por Alura
                </h2>
                
                
            </div>
        </footer>
    )
}
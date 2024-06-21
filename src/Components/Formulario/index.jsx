import "./Formulario.css"
import { Input } from "../Input"
import { ListaSuspensa } from "../Lista Suspensa"
import { Botao } from "../Botao"
import { useState } from "react"
export const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nometime, setNomeTime] = useState('');
    const [cortime, setCorTime] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        props.cadastro({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section onSubmit={handleSubmit} className="Formulario">
            <form>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <Input  valor={nome} aoAlterar={(valor) => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite Seu Nome" />
                <Input  valor={cargo} aoAlterar={(valor) => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite Seu Cargo" />
                <Input  valor={imagem} aoAlterar={(valor) => setImagem(valor)} label="Imagem" placeholder="Digite URL de Sua Imagem" />
                <ListaSuspensa valor={time} aoAlterar={(valor) => setTime(valor)} obrigatorio={true}  label="Time" itens={props.times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.addTime({nome: nometime, cor: cortime});
                setNomeTime('')
                setCorTime('')
            }}>
                <h1>Preencha os dados para criar um novo time.</h1>
                <Input  valor={nometime} aoAlterar={(valor) => setNomeTime(valor)} obrigatorio={true} label="Nome" placeholder="Digite o nome do Time" />
                <Input tipo="color" valor={cortime} aoAlterar={(valor) => setCorTime(valor)} obrigatorio={true} label="Cor" placeholder="Digite a cor do Time" />
                <Botao>
                    Criar um novo Time
                </Botao>
            </form>
        </section>
    )
}
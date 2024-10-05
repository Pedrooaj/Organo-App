import Banner from './Components/Banner';
import { Formulario } from './Components/Formulario';
import { useState, useEffect } from 'react';
import { Time } from './Components/Time';
import { Rodape } from './Components/Rodape';
import { GoOrganization } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function App() {
  const [action, setAction] = useState(0);
  const [times, setTimes] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
 

  async function LoadingToast() {
    let toastId = toast.loading("Aguardando resposta da API", { position: 'bottom-left' });

    try {
      await fetch(`${process.env.REACT_APP_API_URL}/Colaboradores`);
      toast.update(toastId, {render: "API conectada aproveite a aplicação (:", type: 'success', autoClose: 3000, isLoading: false})
    } catch (error) {
      toast.update(toastId, {render: "Erro ao carregar dados!", type: 'error', isLoading: false, autoClose: 3000})
    } 


  }

  useEffect(() => {
    LoadingToast();
  }, []);







  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/Colaboradores`)
      .then(res => res.json())
      .then(data => setColaboradores(data));
  }, [action])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/Times`)
      .then(res => res.json())
      .then(data => setTimes(data))
  }, [action])
  const alterarCor = async (cor, id, nome) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/Times/${id}`, { cor, nome }); // Replace with your actual API endpoint
      console.log('Cor atualizada com sucesso:', response);
      setAction(action + 1);
    } catch (error) {
      console.error('Erro ao atualizar cor:', error);
    }

  }
  const deleteColab = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/Colaboradores/${id}`)
      .then(res => {
        console.log('Colaborador deletado com sucesso!')
        setAction(action + 1)
      })
      .catch(error => { console.log('Erro ao deletar colaborador!', error) });

  }

  const addColab = async (colaborador) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/Colaboradores`, colaborador)
      .then(res => {
        console.log('Colaborador cadastrado com sucesso!')
        setAction(action + 1);
      })
      .catch(error => { console.log('Erro ao cadastrar colaborador!', error) });

  }

  const addTime = async (novoTime) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/Times`, novoTime)
      .then(res => {
        setAction(action + 1)
      })
      .catch(error => { console.log('Erro ao cadastrar time!', error) })

  }

  const favorito = async (colaborador) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/Colaboradores/${colaborador.id}`, {
        id: colaborador.id,
        nome: colaborador.nome,
        cargo: colaborador.cargo,
        imagem: colaborador.imagem,
        time: colaborador.time,
        // eslint-disable-next-line
        favorito: colaborador.id === colaborador.id ? !colaborador.favorito : colaborador.favorito
      })
      console.log('Colaborador favoritado com sucesso!');
      setAction(action + 1);
    } catch {
      console.log('Erro ao favoritar colaborador!')
    }
  }



  return (
    <div className="App">
      <Banner />
      <Formulario addTime={addTime} times={times.map(time => time.nome)} cadastro={colaborador => addColab(colaborador)} />
      <h1 style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Minha Organização <GoOrganization /></h1>
      {times.map((time, indice) =>
        <Time
          aoFavoritar={favorito}
          mudarCor={alterarCor}
          nome={time.nome}
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deleteColab} />)}
      <Rodape />
      <ToastContainer />
    </div>
  );
}

export default App;

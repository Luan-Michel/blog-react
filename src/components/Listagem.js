import { useState, useEffect } from "react";
import axios from "axios";

function Listagem() {

    let [lista, setLista] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then((data)=>{
            setLista(data.data.posts);
        })
    },[]);

    const handleReacoes = (i) => {
        let lista_aux = [...lista];
        lista_aux[i].reactions++;
        setLista(lista_aux);
    }

    return (<div>
        <h1>Listagem</h1>
            <table>
                <thead>
                    <tr>
                        <td>Título</td>
                        <td>Tags</td>
                        <td>Reações</td>
                        <td>Reagir</td>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, i) => {
                        return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.tags.map((tag) => tag+',')}</td>
                                <td>{item.reactions}</td>
                                <td><button type="button" onClick={() => handleReacoes(i)}>Reagir</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Listagem;
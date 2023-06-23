import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList, deletePost, changeIndex } from "../store/actions";
import axios from "axios";

function Listagem() {
    const lista = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then((data)=>{
            dispatch(setList(data.data.posts));
        })
    },[dispatch]);

    const handleReacoes = (i) => {
        let lista_aux = [...lista];
        lista_aux[i].reactions++;
        dispatch(setList(lista_aux));
        // setLista(lista_aux);
    }

    const handleExcluir = (i) => {
        //chamada de deleção
        dispatch(deletePost(i));
        // let lista_aux = [...lista];
        // lista_aux = lista_aux.filter((e, index) => index !== i);
        // dispatch(setList(lista_aux));
    }

    const handleEdit = (i) => {
        dispatch(changeIndex(i))
    }

    return (<div className="col-6">
        <h1>Listagem</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Título</td>
                        <td>Tags</td>
                        <td>Reações</td>
                        <td>Reagir</td>
                        <td>Excluir</td>
                        <td>Editar</td>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, i) => {
                        return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.tags.map((tag) => tag+',')}</td>
                                <td>{item.reactions}</td>
                                <td><button className="btn btn-info" type="button" 
                                        onClick={() => handleReacoes(i)}>
                                            Reagir
                                    </button>
                                </td>
                                <td><button className="btn btn-danger" type="button" 
                                        onClick={() => handleExcluir(i)}>
                                            Excluir
                                    </button>
                                </td>
                                <td><button className="btn btn-warning" type="button" 
                                        onClick={() => handleEdit(i)}>
                                            Editar
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Listagem;
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setList } from "../store/actions";

function Edit () {
    const [post, setPost] = useState({});
    const index = useSelector((state) => state.editing);
    const lista = useSelector((state) => state.posts);
    const dispatch = useDispatch()

    useEffect(() => {
        setPost(lista[index])
    }, [index, lista])

    const handleTitle = (e) => {
        let post_aux = {...post};
        post_aux.title = e.target.value;
        setPost(post_aux);
    }

    const save = () => {
        let lista_aux = [...lista];
        lista_aux[index] = {...post};
        dispatch(setList(lista_aux));
    }

    return (
        <div className="col-6">
            <h1>Edição</h1>
            <input type="text" 
                onChange={handleTitle}
                value={post === undefined || post.title === undefined ? '' : post.title}>
            </input>
            <button type="button" onClick={save} className="btn btn-success">Salvar</button>
        </div>
    )
}

export default Edit;
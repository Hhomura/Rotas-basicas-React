import { useParams, Navigate, useNavigate } from "react-router-dom"

export default (() =>{
    const {id} = useParams();
    const navigate = useNavigate();
    function retornar(){
        console.log("Retordando");
        return navigate("/");
    }
    return(
        <div>
            <h1>Detalhes do Contato: {id}</h1>
            <button onClick={retornar}>retornar</button>
        </div>
    )
})
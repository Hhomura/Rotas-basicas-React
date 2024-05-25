import { Link } from "react-router-dom"

export default (() =>{
    return(
        <div>
            <h1>Contatos</h1>
            <Link to="/contacts/1">Detalhes 1</Link>
            <Link to="/contacts/2">Detalhes 2</Link>
            <Link to="/contacts/3">Detalhes 3</Link>
        </div>
    )
})
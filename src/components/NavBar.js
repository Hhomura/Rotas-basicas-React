import { Link } from "react-router-dom"

export default (() =>{
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
        </nav>
    )
})
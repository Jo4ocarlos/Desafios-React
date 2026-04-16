import { Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div> 
        <h1>Ops... Parece que você esta procurando algo que não existe mais :(</h1>
        <Link to={'/'}>Voltar</Link>
    </div>
  )
}

export default NotFound
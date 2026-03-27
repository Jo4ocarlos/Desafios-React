import { useEffect, useState } from "react"

const Clicker = () => {
const [click, setClick] = useState(0)
const [levels, setLevels] = useState('Iniciante')


    const handleClick =()=>{
        
        setClick((prevCLick)=>{
            return prevCLick +1
        })
    }


   useEffect (()=> {

    document.title = `cliques: ${click}`

    if (click >= 100) {
        alert("zerou o game");
        setClick(0);
        setLevels('Iniciante');
    } else if (click >= 50) {

        setLevels('Mestre dos cliques');
    } else if (click >= 10) {

        setLevels('Explorador');
    }
    //toda vez que ocorre uma mudança na variável click a lógica é executada
    // assim funciona o useEffect, ele fica "de olho"
    }, [click])

  return (
    <div>
        {levels}
        <h4>Número de cliques: {click}</h4>
        <button onClick={handleClick}>CLique</button>
    </div>
  )
}

export default Clicker
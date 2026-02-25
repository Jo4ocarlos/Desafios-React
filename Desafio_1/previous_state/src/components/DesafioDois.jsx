import { useState } from "react";

const DesafioDois = () => {
    const [monstros, setMonstros] = useState([
        { id: 1, nome: "Orc", hp: 100 },
        { id: 2, nome: "Goblin", hp: 100 },
        { id: 3, nome: "Troll", hp: 100 }
    ]);

    const atacarAleatorio = () => {
    
        const indiceSorteado = Math.floor(Math.random() * monstros.length)
        console.log(indiceSorteado)

       const idSorteado = monstros[indiceSorteado].id
       setMonstros((prevMonstro =>{
        return prevMonstro.map((monstro) =>{ 
            if(monstro.id == idSorteado ){
                return {...monstro, hp: monstro.hp - 20}
            }else {
            return monstro;
        }
        })
       }))

    }

    return (
        <>
            <h3>Monstros Vivos</h3>
            <ul>
                {monstros.map(monstro => (
                    <li key={monstro.id}>
                        {monstro.nome} - HP: {monstro.hp}
                    </li>
                ))}
            </ul>
            <button onClick={atacarAleatorio}>Atacar Monstro Aleatório</button>
        </>
    )
}
export default DesafioDois;
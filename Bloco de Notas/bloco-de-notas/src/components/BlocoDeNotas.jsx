import { useEffect, useState } from "react";

const BlocoDeNotas = () => {
  const [userText, setUserText] = useState('')

  const handleChange = (e)=>{
    setUserText(e.target.value)
  }
  

  useEffect(()=>{
    localStorage.setItem('Textsaved', userText)

  }, [userText])


  return (
    <div>
        <form>
            <textarea placeholder="digite seu texto" onChange={handleChange} value={userText}>  </textarea>
        </form>
        
    </div>
  )
}

export default BlocoDeNotas;
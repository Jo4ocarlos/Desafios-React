
import './App.css'
import DesafioDois from './components/DesafioDois'
import DesafioUm from './components/DesafioUm'
import DesafioPorteiro from './components/DesafioPorteiro'
function App() {
  

  return (
    <>
    <section className='desafios'>
      <div><DesafioUm/></div>
      <div><DesafioDois/></div>
      <div><DesafioPorteiro/></div>
    </section>
      
    </>
  )
}

export default App

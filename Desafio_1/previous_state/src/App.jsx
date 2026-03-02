
import './App.css'
import DesafioDois from './components/DesafioDois'
import DesafioUm from './components/DesafioUm'
import DesafioPorteiro from './components/DesafioPorteiro'
import DesafioEstoque from './components/DesafioEstoque'
import DesafioTarefas from './components/DesafioTarefas'
function App() {
  

  return (
    <>
    <section className='desafios'>
      <div><DesafioUm/></div>
      <div><DesafioDois/></div>
      <div><DesafioPorteiro/></div>
      <div><DesafioEstoque/></div>
      <div><DesafioTarefas/></div>
    </section>
    </>
  )
}

export default App

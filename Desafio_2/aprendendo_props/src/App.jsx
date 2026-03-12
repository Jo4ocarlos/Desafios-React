import Cracha from "./components/Cracha";
import ListaClientes from "./components/ListaClientes";
import Projeto from "./components/Projeto";
const App = () => {
  const meusClientes = [
    { id: 1, nome: "Carol", servico: "Gestão de Redes Sociais" },
    { id: 2, nome: "Rogerio", servico: "Manutenção WooCommerce" },
  ];

  return (
    <div>
      <div>
        <h2>Sistema de RH</h2>
        <Cracha
          nome="João"
          profissao="Desenvolvedor Full Stack"
          formacao="Gestão da TI"
        />
      </div>

      <div>
        <h2>Lista de clientes</h2>
        <ListaClientes clientes={meusClientes} />
      </div>

      <div>
        <h2>Meus Projetos</h2>
        <Projeto titulo="Automação n8n" concluido={true} />
        <Projeto titulo="Criação de Landing Page" concluido={false} />
      </div>
    </div>
  );
};

export default App;

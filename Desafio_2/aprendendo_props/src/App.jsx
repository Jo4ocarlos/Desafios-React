import Cracha from "./components/Cracha";
import ListaClientes from "./components/ListaClientes";
import Projeto from "./components/Projeto";
import ProdutoCard from "./components/ProdutoCard";
const App = () => {
  // objeto para ser usado no componente "ListaClientes"
  const meusClientes = [
    { id: 1, nome: "Carol", servico: "Gestão de Redes Sociais" },
    { id: 2, nome: "Rogerio", servico: "Manutenção WooCommerce" },
  ];
  //objeto para ser usado no componente "ProdutoCard"
  const ProductsList = [
    { id: 3, nome: "toner", preco: 10, quantidadeEstoque: 40 },
    { id: 4, nome: "Placa ps", preco: 40, quantidadeEstoque: 0 },
    { id: 5, nome: "Lona", preco: 800, quantidadeEstoque: 5 },
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

      <div className="products_area">
        {ProductsList.map((product) => (
          <ProdutoCard
            key={product.id}
            nome={product.nome}
            preco={product.preco}
            estoque={product.quantidadeEstoque}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

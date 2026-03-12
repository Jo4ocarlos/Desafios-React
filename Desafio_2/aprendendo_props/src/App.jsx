import Cracha from "./components/Cracha";
import ListaClientes from "./components/ListaClientes";
import Projeto from "./components/Projeto";
import ProdutoCard from "./components/ProdutoCard";
import PainelChamadas from "./components/PainelChamadas";
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
//objeto para ser usado no componente "PainelChamadas"
  const Ticktes = [
    {id:6, assunto:"retirar RG", prioridade:"normal", status: "processando"},
    {id:7, assunto:"Regularizar CNH", prioridade:"alta", status: "processando"},
    {id:8, assunto:"imprimir antecedentes criminais", prioridade:"normal", status: "resolvido"},
    {id:9, assunto:"Aposentadoria", prioridade:"alta", status: "resolvido"},
  ]

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

      <div>
        <h1>Help Desk</h1>
        {Ticktes.map((ticket)=>(
          <PainelChamadas
          key={ticket.id}
          {...ticket}
          />

          /* da para passar todos os dados de um objeto pela prop utilizando spreed Operator basta importaar na ordem correta no elemento filho*/
        ))}
      </div>
    </div>
  );
};

export default App;

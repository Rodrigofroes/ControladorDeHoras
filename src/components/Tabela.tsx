interface TabelaProps {
  NomeHora: string;
  NomeDia: string;
  dados: Array<{ ValorHora: string; ValorDia: string }>;
}

const Tabela = ({ NomeDia, NomeHora, dados }: TabelaProps) => {
  return (
    <>
      <table className="tabela">
        <thead>
          <tr>
            <th>{NomeHora}</th>
            <th>{NomeDia}</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.ValorHora}</td>
              <td>{item.ValorDia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabela;


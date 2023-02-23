import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      
      <Summary />

      <TransactionsContainer>

        <SearchForm />
        
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>22/02/2023</td>
            </tr>
            <tr>
              <td>Almoço</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>22/02/2023</td>
            </tr>
            <tr>
              <td>Computador</td>
              <td>
                <PriceHighlight variant="income">R$ 5.400,00</PriceHighlight>
              </td>
              <td>Computador</td>
              <td>22/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
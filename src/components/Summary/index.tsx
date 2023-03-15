import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../ultis/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {

  const summary = useSummary();

  return(
    <SummaryContainer>

      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant={'green'}>
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#FFFFFF" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>

    </SummaryContainer>
  )
}
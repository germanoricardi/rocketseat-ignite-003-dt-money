import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    align-items: center;
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    justify-content: space-between;
  }

  strong {
    display: block;
    font-size: 2rem;
    margin-top: 1rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`

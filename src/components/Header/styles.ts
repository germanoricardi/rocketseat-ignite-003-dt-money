import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  background-color: ${props => props.theme["green-500"]};
  border: 0;
  border-radius: 8px;
  color: ${props => props.theme.white};
  cursor: pointer;
  font-weight: bold;
  height: 50px;
  padding: 0 1.25rem;

  &:hover,
  &:focus {
    background: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`
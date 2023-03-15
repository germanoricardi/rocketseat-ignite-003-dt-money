import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    background: ${(props) => props.theme['gray-900']};
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme['gray-300']};
    flex: 1;
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 0.75rem;

    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    padding: 1rem;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      transition: all 0.2s;
    }
  }
`

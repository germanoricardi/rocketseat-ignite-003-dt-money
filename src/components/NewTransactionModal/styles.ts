import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0,0,0,0.75);
  height: 100vh;
  inset: 0;
  position: fixed;
  width: 100vw;
`;

export const Content = styled(Dialog.Content)`
  background: ${props => props.theme['gray-800']};
  border-radius: 6px;
  min-width: 32rem;
  padding: 2.5rem 3rem;

  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${props => props.theme['gray-900']};
      color: ${props => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${props => props.theme['green-500']};
      color: ${props => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover,
      &:focus {
        background: ${props => props.theme['green-700']};
        transition: background-color 0.2s;
      }


    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  color: ${props => props.theme['gray-500']};
  cursor: pointer;
  line-height: 0;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  align-items: center;
  background: ${props => props.theme['gray-700']};
  border: 0;
  color: ${props => props.theme['gray-300']};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;

  svg {
    color: ${props => props.variant == 'income' ? props.theme['green-300'] : props.theme['red-300']}
  }
  
  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background: ${props => props.theme['gray-600']};
  }

  &[data-state="checked"] {
    color: ${props => props.theme.white};
    background: ${props => props.variant == 'income' ? props.theme['green-500'] : props.theme['red-500']};
    
    svg {
      color: ${props => props.theme.white};      
    }
  }
`;
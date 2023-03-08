import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

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
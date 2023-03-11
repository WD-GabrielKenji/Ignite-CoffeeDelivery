import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  margin-top: 0.7rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['brand-yellow']};
  transition: 0.4s;
  color: ${({ theme }) => theme.colors['base-white']};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  font-weight: 700;
  line-height: 1.3rem;
  text-transform: uppercase;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`

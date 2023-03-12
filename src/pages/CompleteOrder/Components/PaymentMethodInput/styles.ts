import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${({ theme }) => css`
      border-color: ${theme.colors['brand-purple']};
      background: ${theme.colors['brand-purple-light']};
      &:hover {
        background: ${theme.colors['brand-purple-light']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  gap: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  transition: 0.4s;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  text-transform: uppercase;
  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
  user-select: none;
`

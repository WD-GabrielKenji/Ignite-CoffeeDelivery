import styled, { css } from 'styled-components'

export interface QuantityInputContainerProps {
  size: 'medium' | 'small'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};
  input {
    width: 100%;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors['base-title']};
    text-align: center;
    &:focus {
      outline: none;
    }
  }
  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 1.475rem;
  border: none;
  background: none;
  transition: 0.4s;
  color: ${({ theme }) => theme.colors['brand-purple']};
  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`

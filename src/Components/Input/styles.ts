import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`

interface InputContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.625rem;
  padding: 0 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors['base-input']};
  transition: 0.4s;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  &:focus-within {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`
export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors['base-text']};
  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const OptionalText = styled.p`
  margin-right: 0.75rem;
  color: ${({ theme }) => theme.colors['base-label']};
  font-size: 0.75rem;
  font-style: italic;
`

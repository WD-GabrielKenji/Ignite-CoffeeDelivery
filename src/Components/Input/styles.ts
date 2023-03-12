import styled from 'styled-components'

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
  height: 2.625rem;
  padding: 0 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors['base-input']};
  transition: 0.4s;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  &:focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
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

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors['base-label']};
`

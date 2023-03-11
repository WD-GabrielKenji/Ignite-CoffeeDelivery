import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  margin-top: 0.5rem;
  gap: 0.5rem;
  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
  gap: 0.25rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`

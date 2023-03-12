import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 6.5rem;
  top: 0;
  left: 0;
  z-index: 5;
  background: ${({ theme }) => theme.colors['base-background']};
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 2.3rem;
  height: 2.3rem;
  padding: 0 0.5rem;
  gap: 4px;
  border: none;
  border-radius: 6px;
  cursor: inherit;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    border-radius: 50%;
    color: ${({ theme }) => theme.colors['base-white']};
    font-size: 0.75rem;
    font-weight: 700;
  }
  ${({ variant }) => css`
    background: ${({ theme }) => theme.colors[`brand-${variant}-light`]};
    color: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
    span {
      background: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
    }
  `}
  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${({ theme }) => theme.colors[`brand-${variant}`]};
      }
    `}
`

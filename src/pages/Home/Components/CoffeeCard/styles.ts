import { RegularText, TitleText } from '../../../../Components/Typography'

import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1.25rem;
  padding-top: 0;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors['base-card']};
  text-align: center;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  gap: 4px;
  span {
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const Name = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
})`
  margin-bottom: 0.5rem;
  font-weight: 700;
`

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    gap: 3px;
    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    margin-left: 0.3rem;
    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['brand-purple-dark']};
    transition: 0.4s;
    color: ${({ theme }) => theme.colors['base-card']};
    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`

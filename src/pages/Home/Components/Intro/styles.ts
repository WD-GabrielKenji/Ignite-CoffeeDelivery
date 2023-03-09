import { rgba } from 'polished'
import styled from 'styled-components'
import { TitleText } from '../../../../Components/Typography'

import introBackgroundImg from '../../../../assets/intro-background.png'

export const IntroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
`

export const IntroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 3.5rem;
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 4.125rem;
  row-gap: 1.25rem;
`

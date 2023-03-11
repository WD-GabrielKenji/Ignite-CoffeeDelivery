import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 0.75rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px 6px 44px;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

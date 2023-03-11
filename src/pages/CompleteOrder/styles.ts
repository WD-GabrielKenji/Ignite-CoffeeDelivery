import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.5rem;
  gap: 2rem;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-card']};
`

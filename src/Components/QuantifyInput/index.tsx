import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer size={'small'}>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input value={10} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}

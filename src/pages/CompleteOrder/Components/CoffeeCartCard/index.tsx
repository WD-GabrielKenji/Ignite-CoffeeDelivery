import { RegularText } from '../../../../Components/Typography'
import { QuantityInput } from '../../../../Components/QuantifyInput'

import coffee from '../../../../../public/coffees/tradicional.png'
import { Trash } from 'phosphor-react'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee} alt="" />

        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton type="button">
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
    </CoffeeCartCardContainer>
  )
}

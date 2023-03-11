import { RegularText } from '../../../../Components/Typography'
import { Button } from '../../../../Components/Button'

import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 29,70</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ 33,20
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" type="submit" />
    </ConfirmationSectionContainer>
  )
}

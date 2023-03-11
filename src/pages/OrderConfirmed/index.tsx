import { useTheme } from 'styled-components'

import { RegularText, TitleText } from '../../Components/Typography'
import { InfoWithIcon } from '../../Components/InfoWithIcon'

import confirmedOrderIllustration from '../../../src/assets/IllustrationConfirmedOrder.svg'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

export function OrderConfirmed() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}

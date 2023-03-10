import { ShoppingCart } from 'phosphor-react'
import { RegularText, TitleText } from '../../../../Components/Typography'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'
import { QuantityInput } from '../../../../Components/QuantifyInput'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src={
          'https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1679270400&Signature=GfkYFVurmDZgqPp6zM2scXRfQ3Y~stE~zDqGXHDcm8HOJj6jyaCNGqlTWldgemR4tF-6x9lBMPwJZ7bq2iORJ-QNjS-K5M75~gPyISByfsYJc~r8VdEzXegscXBhgzJO8LTpeQWYhtCc-N8~7Ldkpt2pVGcnhJyHk8ehb1i-a-8pE7FUaDJF2sKZYaP68z53jI9wQCgxwX5M4lDYmrEgYczPNmlOrmOXC-ts5ukUIMw8Z9O-LgZ3LdBbh7MZFrj6YiAR5KIXpydacw~oNy-J5I-pTh8PO-8qfE9ovdSHJC6WI69GhI8NCFCPWaTSPJrUTl5eQcbnJ6QgXX5DJh1SCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        }
        alt=""
      />
      <Tags>
        <span>Tradicional</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />

          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}

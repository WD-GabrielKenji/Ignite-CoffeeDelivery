import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogoImg from '../../assets/logoCoffeeDelivery.svg'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="Logo App Coffee Delivery" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}

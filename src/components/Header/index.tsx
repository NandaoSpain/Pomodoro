import { HeaderContainer } from './styles'

import logo from '../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logotipo" />
      <nav>
        <a href="#">
          <Timer size={24} />
        </a>
        <a href="#">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}

import { HeaderContainer, HeaderContext, LogoSmall, NavHeader, NavDivAvatar} from "./styles";
import avatar from "../../assets/avatar.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContext>
        <LogoSmall>
          <span>Marvel</span>
        </LogoSmall>

        <NavHeader>
        <ul>
          <li>
            <a href="/personagens">Personagens</a>
          </li>

          <li>
            <a href="/filmes">Filmes</a>
          </li>

          <li>
            <a href="/hqs">HQs</a>
          </li>

          <li>
            <NavDivAvatar>
              <img src={avatar} alt="Avatar" />
              <a href="/">Sair</a>
            </NavDivAvatar>

          </li>
        </ul>
      </NavHeader>
      </HeaderContext>
    </HeaderContainer>

  )
}
// DEPENDENCIES
import { memo } from "react";
import { useHistory } from "react-router-dom";

// STYLED
import { StyledNavbar, ImgContainer, LinksContainer } from "./styled";

// IMAGES
import logo from "../../images/large logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  logged?: boolean;
  email: string;
  logoutAction(): void;
  hasFav: boolean;
}

const Navbar = memo<IProps>(({ logged, email, logoutAction, hasFav }) => {

  const history = useHistory();

  return (
    <StyledNavbar>
      <ImgContainer>
        <img src={logo} alt="netflixLogo" />
      </ImgContainer>

      <LinksContainer>
        {logged && (
          <ul>
            <li>
              <strong>{email}</strong>
            </li>
            <li>
              <span onClick={() => history.push('/Movies')}>
                Peliculas
              </span>
            </li>
            <li>
              <span className={hasFav ? '' : 'inactive'} onClick={() => history.push('/FavMovieList')}>
                Favoritos
              </span>
            </li>
            <li>
              <span onClick={logoutAction}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Salir
              </span>
            </li>
          </ul>
        )}
      </LinksContainer>
    </StyledNavbar>
  );
});

export { Navbar };

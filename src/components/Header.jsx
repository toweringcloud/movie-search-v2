import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const MenuGroup = styled.div`
  background-color: black;
  color: white;
  font-size: 20px;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

function Header() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movie Search</title>
      </Helmet>
      <MenuGroup>
        <span>POPULAR</span>
        <span>COMING SOON</span>
        <span>NOW PLAYING</span>
      </MenuGroup>
    </>
  );
}
export default Header;

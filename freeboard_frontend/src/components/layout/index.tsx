import Banner from './banner/banner.container'
import Header from './header/Header.container';
import Navigation from './navigation/Navigation.container';
import styled from '@emotion/styled';

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Layout(props) {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      <Body>{props.children}</Body>
    </>
  );
}
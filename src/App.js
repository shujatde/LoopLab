/** @format */

import "./App.css";
import Header from "./Components/Header";
import styled from "styled-components";
import HeroSection from "./Components/HeroSection";
import ExploreSection from "./Components/ExploreSection";
import CreateSection from "./Components/CreateSection";
import ShareSection from "./Components/ShareSection";
import FooterComponent from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <HeaderContainer>
        <Header />
        <HeroSection />
      </HeaderContainer>
      <ExploreSection />
      <CreateSection />
      <ShareSection />
      <FooterComponent />
    </div>
  );
}

export default App;
const HeaderContainer = styled.div`
  background-image: url(/img/home.jpg);
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  height: auto;
`;

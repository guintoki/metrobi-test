import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 96vh;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  color: white;
  margin: 5px;
`;

const Header = styled(Section)`
  background-color: #00bcd4;
  padding: 20px 0;
`;

const Footer = styled(Section)`
  background-color: #ff9800;
  padding: 20px 0;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const Hero = styled(Section)`
  background-color: #ba68c8;
  flex: 1;
`;

const Sidebar = styled(Section)`
  background-color: #81c784;
  flex: 1;
`;

const MainContent = styled(Section)`
  background-color: #ffeb3b;
  color: black;
  flex: 2;
`;

const ExtraContent = styled(Section)`
  background-color: #757575;
  flex: 1;
`;

const RelatedSection = styled.div`
  display: flex;
  flex: 1;
`;

const RelatedItem = styled(Section)`
  flex: 1;
`;

const RelatedImages = styled(RelatedItem)`
  background-color: #66bb6a;
`;

const RelatedPosts = styled(RelatedItem)`
  background-color: #f06292;
`;

const Layout = () => {
  return (
    <Container>
      <Header>Header</Header>

      <MainContentWrapper>
        <LeftColumn>
          <Hero>Hero</Hero>
          <Sidebar>Sidebar</Sidebar>
        </LeftColumn>

        <RightColumn>
          <MainContent>Main Content</MainContent>
          <ExtraContent>Extra Content</ExtraContent>
        </RightColumn>
      </MainContentWrapper>

      <RelatedSection>
        <RelatedImages>Related Images</RelatedImages>
        <RelatedPosts>Related Posts</RelatedPosts>
      </RelatedSection>

      <Footer>Footer</Footer>
    </Container>
  );
};

export default Layout;

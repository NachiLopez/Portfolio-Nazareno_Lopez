import styled from "styled-components";
import Home from "../home/Home";
import WorkExperience from "../workExperience/WorkExperience";
import Skills from "../skills/Skills";
import AboutMe from "../aboutMe/AboutMe";

const Index = () => {
  const handleNavigate = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Content>
      <Header>
        <Logo src="/public/NL - Diseño Logo.png" alt="logo" />
        <List>
          <ItemList onClick={() => handleNavigate("home")}>Inicio</ItemList>
          <ItemList onClick={() => handleNavigate("jobexperience")}>
            Experiencia laboral
          </ItemList>
          <ItemList onClick={() => handleNavigate("skills")}>
            Habilidades
          </ItemList>
          <ItemList onClick={() => handleNavigate("aboutMe")}>
            Sobre mí
          </ItemList>
        </List>
      </Header>
      <MainContent>
        <Home />
        <div className="separator"></div>
        <WorkExperience />
        <div className="separator"></div>
        <Skills />
        <div className="separator"></div>
        <AboutMe />
      </MainContent>
    </Content>
  );
};

export default Index;

const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    var(--color-secondary),
    var(--color-accent)
  );
  transition: grid-template-columns 0.3s ease-in-out;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  display: inline-flex;
  justify-content: space-evenly;
  background-color: var(--color-primary);
  z-index: 10;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const List = styled.ul`
  color: var(--color-background);
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 2rem;
`;

const ItemList = styled.li`
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-secondary);
    font-size: 1.2rem;
  }
`;

const MainContent = styled.main`
  width: 80%;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  .separator {
    width: 100%;
    content: "";
    border-top: 2px dotted var(--color-text);
  }
`;

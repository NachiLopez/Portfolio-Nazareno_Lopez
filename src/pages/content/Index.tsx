import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Home from "../home/Home";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import AboutMe from "../aboutMe/AboutMe";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <Content>
      <Header>
        <Logo src="/src/assets/NL - Diseño Logo.png" alt="logo" />
        <List>
          <ItemList onClick={() => handleNavigate('/home')}>Inicio</ItemList>
          <ItemList onClick={() => handleNavigate('/projects')}>Proyectos</ItemList>
          <ItemList onClick={() => handleNavigate('/skills')}>Habilidades</ItemList>
          <ItemList onClick={() => handleNavigate('/aboutMe')}>Sobre mí</ItemList>
        </List>
      </Header>
      <MainContent>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </MainContent>
    </Content>
  );
};

export default Index;

const Content = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  transition: grid-template-columns 0.3s ease-in-out;
`;

const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  display: inline-flex;
  justify-content: space-evenly;
  background-color: var(--color-primary);
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
    font-size:1.2rem
  }
`;

const MainContent = styled.main`
  background-color: var(--color-secondary);
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Icon = styled.i`
  color: var(--color-primary);
  margin: 1rem 1.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-text-secondary);
  }
  &:focus {
    outline: none;
  }
`;

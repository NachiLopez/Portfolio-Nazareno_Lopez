import styled from "styled-components";
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaJava } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiTypescript, SiNestjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";



const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <h1 className="title">Habilidades</h1>
      <IconsContainer>
        <Skill>
          <FaReact />
          <span>React</span>
        </Skill>
        <Skill>
          <FaNodeJs />
          <span>Node.js</span>
        </Skill>
        <Skill>
          <SiNestjs />
          <span>Nest js</span>
        </Skill>
        <Skill>
          <SiExpress />
          <span>Express.js</span>
        </Skill>
        <Skill>
          <FaDatabase />
          <span>SQL Server</span>
        </Skill>
        <Skill>
          <SiFirebase />
          <span>Firebase</span>
        </Skill>
        <Skill>
          <SiMongodb />
          <span>MongoDB</span>
        </Skill>
        <Skill>
          <SiTypescript />
          <span>TypeScript</span>
        </Skill>
        <Skill>
          <FaDocker />
          <span>Docker</span>
        </Skill>
        <Skill>
          <GrMysql />
          <span>MySQL</span>
        </Skill>
        <Skill>
          <FaJava />
          <span>Java</span>
        </Skill>
      </IconsContainer>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  text-align: center;
  padding: 50px 0;
  .title {
    color: var(--color-text);
    margin: 3rem 0;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  color: var(--color-text);

  span {
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
    color: var(--color-text-light);
  }
`;

import styled from "styled-components";

const Home = () => {
  return (
    <MainContainer>
        <FirstSection>
            <MeImage src="/src/assets/nl-pic.jpg" />
            <div>
                <h1>Nazareno Lopez</h1>
                <h2 style={{color: "var(--color-text)"}}>Desarrollador Full Stack</h2>
                <p style={{width:"700px"}}>
                    Desarrollador full stack con experiencia en el desarrollo
                    de aplicaciones web utilizando tecnologías como React,
                    Node.js, y Docker. Orientado a superar desafíos y a
                    adquirir nuevas experiencias que fortalezcan mis
                    capacidades técnicas y profesionales. Comprometido
                    con el cumplimiento de objetivos, contribuyendo al
                    desarrollo, análisis y ejecución de ideas junto al equipo.
                </p>
                <div style={{ display: "flex", gap: "1rem" }} className="contenedor-de-links">
                    <p>DescargarCVBOTON</p>
                    <p>linkedinIcon</p>
                    <p>githubIcon</p>
                </div>
            </div>
        </FirstSection>
    </MainContainer>
  )
}

export default Home;

const MainContainer = styled.div`
    width: 80vw;
    height: 100vh;
`;

const FirstSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
    align-items: center;
    padding: 2rem;
`;

const MeImage = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
    object-position: center;
    transition: 0.2s ease-in-out;
    border-radius: 100%;
`;
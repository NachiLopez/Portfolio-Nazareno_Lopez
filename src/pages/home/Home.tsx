import styled from "styled-components";

const Home = () => {
  return (
    <MainContainer id="home">
        <FirstSection>
            <MeImage src="https://i.ibb.co/chX4QZqR/nl-pic.jpg" />
            <PresentationContainer>
                <h1>Nazareno Lopez</h1>
                <h2>Desarrollador Full Stack</h2>
                <div className="limit"></div>
                <p className="desc_text">
                    Me dedico al desarrollo de software, enfocándome en React con TypeScript, Node.js y SQL Server, aunque me mantengo abierto a aprender nuevas tecnologías, disfrutando el aprendizaje constante y la adaptación a nuevos desafíos cuando así se requiere. Me gusta construir aplicaciones que realmente faciliten las tareas de quienes las usan. Valoro la capacidad para detectar problemas de forma ágil y encontrar soluciones fundamentadas, priorizando el entendimiento claro del porqué de cada decisión, algo que enfrento a diario en mi trabajo.
                </p>
                <p className="desc_text">
                    Bienvenido a mi espacio, donde podes conocer más sobre mí y lo que hago.
                </p>
                <div className="limit"></div>
                <div className="links_container desc_text">
                    <button onClick={() => window.open('/CV_Nazareno_Lopez_Full_Stack_Developer.pdf', '_blank')} className="text_format boton"><i className="pi pi-file-pdf"></i>Descargar CV</button>
                    <p className="text_format"><i className="pi pi-envelope"></i>nazarenolopez35@gmail.com</p>
                    <a href="https://www.linkedin.com/in/nazareno-lopez-903a48211/" target="_blank" className="text_format pi pi-linkedin"></a>
                    <a href="https://github.com/NachiLopez" target="_blank" className="text_format pi pi-github"></a>
                </div>
            </PresentationContainer>
        </FirstSection>
        <SecondSection>
            <i className="pi pi-arrow-circle-down" onClick={() => document.getElementById('jobexperience')?.scrollIntoView({ behavior: "smooth" })}></i>
        </SecondSection>
    </MainContainer>
  )
}

export default Home;

const MainContainer = styled.div`
    width: 80vw;
    height: 100vh;
`;

const FirstSection = styled.section`
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 3rem;
    margin: 2rem 0;
    padding: 2rem;
    align-items: center;
`;

const MeImage = styled.img`
    height: 350px;
    width: 350px;
    object-fit: cover;
    object-position: center;
    transition: 0.2s ease-in-out;
    border-radius: 100%;
`;

const PresentationContainer = styled.div`
    h1{
            color: var(--color-text);
            margin: 0;
    }
    h2{
        color: var(--color-text);
        font-weight: 900;
    }
    .desc_text{
        width: 700px;
        font-weight: 900;
        color: var(--color-dark);
        a{
            padding: 10px;
            font-size: 1.5rem;
        }
    }
    .limit{
        content: '';
        border-top: 2px dotted var(--color-text);
    }
    .links_container{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .text_format{
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 2rem;
        background-color: var(--color-primary);
        color: var(--color-background);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        font-weight: 900;
        i {
            font-size: 1rem;
            font-weight: bold;
            padding: 3px;
        }
        &:hover{
            border-color: transparent;
            box-shadow: 0 4px 6px #efebe963, 0 1px 3px #efebe99e;
        }
    }
    .boton{
        &:hover{
            border-color: transparent;
            box-shadow: 0 4px 6px #efebe963, 0 1px 3px #efebe99e;
        }
        &:focus{
            outline: none;
        }
    }
`;

const SecondSection = styled.section`
    text-align: center;
    font-size: 5rem;
    border-radius: 2rem;
    color: var(--color-background);
    i{
        cursor: pointer;
        background-color: var(--color-primary);
        padding: 15px;
        border-radius: 50%;
        &:hover{
            border-color: transparent;
            box-shadow: 0 4px 6px #efebe963, 0 1px 3px #efebe99e;
        }
    }
`;
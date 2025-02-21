import styled from "styled-components";

const AboutMe = () => {
  return (
    <MainContainer id="aboutMe">
      <FirstSection>
        <h1 className="title">Sobre Mí</h1>
        <h2 className="sub_title">
          Desarrollo, aprendizaje y evolución constante
          <i className="pi pi-bolt"></i>
        </h2>
        <h3 className="desc_text">
          Mi enfoque personal es enfrentar los desafíos, mejorar procesos y seguir creciendo en cada proyecto. Valoro las 
          experiencias que me hacen crecer profesional y personalmente. Gran parte de mi evolución se la debo a los conocimientos 
          compartidos por mis compañeros programadores del trabajo, que poseen más experiencia y están en una posicion que aspiro 
          alcanzar. Aprender de ellos me ha permitido acelerar mi crecimiento y adoptar mejores prácticas desde el principio.
        </h3>
        <h2 className="sub_title">
          Filosofía de trabajo
          <i className="pi pi-book"></i>
        </h2>
        <h3 className="desc_text">
          Dentro de lo que es mi filosofía de trabajo, no me detengo a clasificar los problemas como simples o complejos, prefiero 
          abordarlos y descubrir su verdadera dificultad en el proceso teniendo una idea. Siempre analizo posibles soluciones para 
          planear como voy a desarrollar el código, creando un plan el cual me permite ir aprendiendo a través de la prueba y error 
          para detectar y corregir puntos débiles, lo que me ha permitido encontrar muchas respuestas por mi cuenta. Este enfoque 
          proactivo me dió buenos resultados y me ayuda a detectar puntos de mejora mientras desarrollo.
        </h3>
        <h2 className="sub_title">
          Stack y enfoque técnico
          <i className="pi pi-star"></i>
        </h2>
        <h3 className="desc_text">
          Disfruto trabajar con React y Node.js, desarrollando aplicaciones escalables con un enfoque en buenas prácticas y rendimiento.
          Me gusta estructurar el código de manera clara y mantenible, optimizar procesos y encontrar soluciones eficientes. Además, 
          valoro la autonomía en el desarrollo, investigando y probando distintas aproximaciones hasta llegar a la mejor solución posible.
        </h3>
        <h2 className="sub_title">
          Un toque personal
          <i className="pi pi-user"></i>
        </h2>
        <h3 style={{ padding: "0", margin: "0", color: "var(--color-text)", fontWeight:"800" }}>¿Como nació mi interés por la programación?</h3>
        <h3 className="desc_text">
        Mi interés por la programación nació a los 8 años gracias a los videojuegos. Mi hermano y yo jugábamos a "Argentum Online" y sus distintas
        versiones conocidas como "AO" (Mercury AO, Furius AO, etc.). 
        un MMORPG argentino. Me encantaba la idea de crear mi propia versión, ser el GM (Game Master), así poder crear eventos donde
        pudieran competir y ganar créditos para mejorar su equipo. Así que, sin entender mucho pero con pura determinación, logré 
        levantar mi propio servidor. No llegué a lanzarlo públicamente porque desconocía la necesidad de un hosting, pero esa 
        experiencia despertó en mí la necesidad de crear mis propias versiones de los juegos.
        </h3>
        <h3 style={{ padding: "0", margin: "0", color: "var(--color-text)", fontWeight: "800" }}>
          ¿Cómo continuó mi camino en la programación?
        </h3>
        <h3 className="desc_text">
        A los 12 años, mi pasión por la programación creció más. Me sumergí en Unity, siguiendo tutoriales de YouTube y experimentando 
        con mis propias ideas. Ahorraba para comprar cursos en Domestika y pasaba horas creando juegos tipo first-person shooter, 
        diseñando escenarios en 3D e intentando desarrollar juegos de terror inspirados en Slenderman. Más que solo jugar, me fascinaba 
        la posibilidad de construir mis propios mundos y darles vida a través del código.
        </h3>

        <h3 style={{ padding: "0", margin: "0", color: "var(--color-text)", fontWeight: "800" }}>
          ¿Dónde estoy hoy?
        </h3>
        <h3 className="desc_text">
          Con esa misma mentalidad, decidí estudiar programación de manera formal, profundizando aún más en el desarrollo. Finalmente, 
          conseguí mi primer trabajo como programador, desde aquel servidor de "AO", hasta escribir código en un entorno 
          profesional, mi camino ha sido una constante exploración y aprendizaje, siempre guiado por la curiosidad y el deseo de mejorar,
          lo que terminó forjando la metodología que hoy aplico y explico en mi filosofía de trabajo.
        </h3>
      </FirstSection>
    </MainContainer>
  );
};

export default AboutMe;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 900px;
  flex-wrap: wrap;
  .title,
  .sub_title {
    color: var(--color-text);
    margin: 0;
    margin-top: 1rem;
  }
  .title {
    align-self: center;
    font-weight: 800;
  }
  .sub_title {
    align-self: start;
    font-weight: 800;
    span{
      font-weight: 600;
      color: var(--color-primary);
    }
    .pi{
      padding: 0 15px;
    }
  }
  .desc_text{
    color: var(--color-text);
    margin: 0;
    padding: 0; 
    font-weight: 600;
  }
`;

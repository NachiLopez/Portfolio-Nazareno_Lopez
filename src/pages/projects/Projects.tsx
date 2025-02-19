import { useState } from "react";
import styled from "styled-components";

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hideText, setHideText] = useState<boolean>(false);

  const toggleCard = (index: number) => {
    if (index === expandedCard) {
      setExpandedCard(null);
      setTimeout(() => {
        setHideText(false);
      }, 300);
    } else {
      setExpandedCard(index);
      setTimeout(() => {
        setHideText(true);
      }, 300);
    }
  };

  return (
    <MainContainer id="projects">
      <h1 className="title">Proyectos</h1>
      <h2 className="sub_title">Experiencia laboral <span>(Abril 2024 - Actualidad)</span></h2>
      <h3 className="text_format">
        Por motivos de confidencialidad, no es posible mostrar el proyecto en
        detalle. Sin embargo, se describen las tareas realizadas y las
        responsabilidades asumidas dentro del desarrollo
      </h3>
      <FirstSection>
        <JobContainer>
          <div className="multi_text">
            <h3>Empresa: </h3>
            <a
              href="https://www.linkedin.com/company/tecnologia-bi/"
              target="_blank"
            >
              Tecnologia BI <span>(Startup)</span>
            </a>
          </div>
          <div className="multi_text">
            <h3>Rol: </h3>
            <a>Full Stack Developer</a>
          </div>
          <div className="multi_text">
            <h3>Tecnologías: </h3>
            <a>React con TypeScript, Node.js, SQL Server</a>
          </div>
        </JobContainer>
        <CardContainer
          expanded={expandedCard === 0}
          hideText={hideText}
          onClick={() => toggleCard(0)}
        >
          <img
            className="client_pic"
            src="https://www.close-upinternational.com/img/logo-footer.png"
            alt="clientPic"
          />
          {expandedCard === 0 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Desarrollo de ABMs: </span>Creación de formularios y
                vistas con React y TypeScript, implementación de rutas y controladores en el
                backend con Node.js, y desarrollo de Stored Procedures en SQL
                Server para manejar la lógica de negocio y optimizar consultas.
              </p>
              <p>
                <span>Manejo de prescripciones y liquidaciones: </span>
                Implementación de un sistema para gestionar prescripciones
                médicas, incluyendo su historial, liquidación y validaciones.
                Esta tarea representó un desafío significativo debido a la
                complejidad de las reglas de negocio y el procesamiento de
                datos.
              </p>
              <p>
                <span>Optimización y estructuración de la base de datos: </span>
                Creación de tablas y definición de relaciones en SQL Server,
                asegurando la integridad de los datos y optimizando la
                eficiencia en las consultas. Desarrollo de Stored Procedures
                personalizados para mejorar el rendimiento en la gestión de
                farmacias, cadenas, prescripciones, etc.
              </p>
              <p>
                <span>Integración y mantenimiento del servidor: </span>
                Traducción de las necesidades discutidas en reuniones a
                soluciones concretas en código. Configuración y despliegue de
                servicios en el servidor, asegurando su correcto funcionamiento
                y rendimiento.
              </p>
            </div>
          ) : null}
          <ProjectDataContainer
            expanded={expandedCard === 0}
            hideText={hideText}
          >
            <div className="client">
              <h4>Cliente: </h4>
              <p>Closeup</p>
            </div>
            <div className="desc_work">
              <ul>
                <li>Desarrollo de ABMs</li>
                <li>Manejo de prescripciones y liquidaciones</li>
                <li>Optimización y estructuración de la base de datos</li>
                <li>Integración y mantenimiento del servidor</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
        <CardContainer
          expanded={expandedCard === 1}
          hideText={hideText}
          onClick={() => toggleCard(1)}
        >
          <img
            className="client_pic"
            src="https://reclamodeterceros.com/wp-content/uploads/2023/05/Meridional-Reclamo-de-Terceros-.webp"
            alt="clientPic"
          />
          {expandedCard === 1 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Desarrollo de módulos de conciliación bancaria: </span>
                Implementación de interfaces con React y TypeScript para la gestión de
                conciliaciones bancarias, permitiendo la revisión y validación
                de transacciones. Desarrollo de lógica en el backend con Node.js
                para el procesamiento de datos y la generación de reportes.
              </p>
              <p>
                <span>Optimización y estructuración de la base de datos: </span>
                Diseño y creación de tablas en SQL Server para almacenar
                transacciones, referencias de conciliación, registros
                históricos, etc. Definición de relaciones entre entidades y
                desarrollo de Stored Procedures optimizados para mejorar el
                rendimiento de la aplicación.
              </p>
              <p>
                <span>
                  Implementación de reglas de negocio en la conciliación:{" "}
                </span>
                Desarrollo de algoritmos para la identificación y emparejamiento
                de transacciones bancarias con registros internos. Configuración
                de validaciones y criterios de conciliación para asegurar la
                precisión en la correspondencia de datos.
              </p>
              <p>
                <span>
                  Desarrollo de funcionalidades avanzadas en la interfaz:{" "}
                </span>
                Creación de componentes interactivos como tablas dinámicas,
                filtros personalizados y animaciones para mejorar la experiencia
                del usuario.
              </p>
              <p>
                <span>Integración y mantenimiento del servidor: </span>De igual
                forma que con close up, se realizaron las mismas tareas.
              </p>
            </div>
          ) : null}
          <ProjectDataContainer
            expanded={expandedCard === 1}
            hideText={hideText}
          >
            <div className="client">
              <h4>Cliente: </h4>
              <p>Meridional</p>
            </div>
            <div className="desc_work">
              <ul>
                <li>Desarrollo de módulos de conciliación bancaria</li>
                <li>Optimización y estructuración de la base de datos</li>
                <li>Implementación de reglas de negocio en la conciliación</li>
                <li>Desarrollo de funcionalidades avanzadas en la interfaz</li>
                <li>Integración y mantenimiento del servidor</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
        <CardContainer
          expanded={expandedCard === 2}
          hideText={hideText}
          onClick={() => toggleCard(2)}
        >
          <img
            className="client_pic"
            src="https://certificaciones.greatplacetowork.com.ar/hubfs/Qualia.png"
            alt="clientPic"
          />
          {expandedCard === 2 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Desarrollo de módulos de gestión financiera: </span>
                Implementación de interfaces en React con TypeScript para la gestión de
                transacciones financieras, facilitando el control y
                visualización de registros contables. Desarrollo de lógica en el
                backend con Node.js y SQL Server para la validación y
                procesamiento de datos.
              </p>
              <p>
                <span>Gestión de breadcrumbs y navegación: </span>Configuración
                de breadcrumbs en la aplicación para mejorar la navegación del
                usuario dentro del módulo de conciliación financiera, asegurando
                una jerarquía clara y accesible.
              </p>
              <p>
                <span>Formato y procesamiento de datos: </span>Ajuste de
                formatos de fechas y valores numéricos con miles y decimales
                para garantizar la correcta visualización e interpretación de la
                información. Implementación de funciones para transformar y
                normalizar datos provenientes de distintas fuentes.
              </p>
              <p>
                <span>
                  Desarrollo de funcionalidades avanzadas en la interfaz:{" "}
                </span>
                De igual forma que con Meridional, se realizaron las mismas
                tareas.
              </p>
              <p>
                <span>Optimización y estructuración de la base de datos </span>
                De igual forma que con Meridional, se realizaron las mismas
                tareas.
              </p>
              <p>
                <span>Integración y mantenimiento del servidor: </span>De igual
                forma que con Meridional, se realizaron las mismas tareas.
              </p>
            </div>
          ) : null}
          <ProjectDataContainer
            expanded={expandedCard === 2}
            hideText={hideText}
          >
            <div className="client">
              <h4>Cliente: </h4>
              <p>Qualia</p>
            </div>
            <div className="desc_work">
              <ul>
                <li>Desarrollo de módulos de gestión financiera</li>
                <li>Gestión de breadcrumbs y navegación</li>
                <li>Formato y procesamiento de datos</li>
                <li>Desarrollo de funcionalidades avanzadas en la interfaz</li>
                <li>Integración y mantenimiento del servidor</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
        <h2 className="sub_title">Proyectos propios</h2>
        <CardContainer
          expanded={expandedCard === 3}
          hideText={hideText}
          onClick={() => toggleCard(3)}
        >
          <img
            className="client_pic"
            src="/src/assets/ElogioStaff.png"
            alt="clientPic"
          />
          {expandedCard === 3 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Generación de flyers personalizados: </span>Desarrollo de
                un sistema en React con TypeScript que permite al personal de RRHH diseñar y
                generar flyers para celebraciones como cumpleaños y
                aniversarios, con opciones de personalización en diseño y
                contenido.
              </p>
              <p>
                <span>Gestión de compañías y roles de usuario: </span>
                Implementación de un sistema multiempresa en el que cada usuario
                solo puede visualizar los datos de su compañía. Además, se
                desarrollo un rol de admin que permite acceder a toda la
                información de todas las compañías en la plataforma.
              </p>
              <p>
                <span>Automatización y gestión de datos: </span>Implementación
                de funcionalidades para registrar empleados y asociarles
                eventos (cumpleaños, empleado del mes, etc), permitiendo la generación automatizada de flyers con la
                información correspondiente.
              </p>
              <p>
                <span>Optimización y estructuración de la base de datos: </span>
                Diseño y creación de tablas en SQL Server para almacenar
                empleados, eventos y diseños de flyers, asegurando relaciones
                eficientes para mejorar la consulta de datos.
              </p>
              <p>
                <span>Migración de la base de datos: </span>
                Debido a la pérdida de la base de datos en SQL, se realizó una migración completa a Firebase, lo que implicó 
                una reestructuración total del backend para adaptarlo a la nueva tecnología. Este proceso permitió adquirir 
                conocimientos sobre migración de datos, diferencias en arquitecturas de bases de datos y adaptación de sistemas 
                a nuevas arquitecturas.
              </p>
              <p>
                <span>Procesamiento y almacenamiento de imágenes: </span>
                Implementación de un sistema para la carga y manipulación de
                imágenes dentro de los flyers, garantizando un correcto
                almacenamiento y visualización en la aplicación.
              </p>
              <p>
                <span>Integración y mantenimiento del servidor: </span>
                Despliegue y optimización del backend en Node.js, permitiendo la
                gestión eficiente de los datos y la integración con el frontend.
                Implementación de endpoints para la generación y almacenamiento
                de flyers personalizados.
              </p>
              <p>
                <span>Formato y procesamiento de datos: </span>Normalización y
                optimización de la información ingresada, asegurando la correcta
                visualización de nombres, fechas y otros datos relevantes en los
                flyers generados.
              </p>
            </div>
          ) : null}
          <ProjectDataContainer
            expanded={expandedCard === 3}
            hideText={hideText}
          >
            <div className="client" style={{ justifyContent: "space-between" }}>
              <div style={{ display: "flex"}}>
                <h4>Proyecto: </h4>
                <p>Elogio Staff</p>
              </div>
              <button className="deploy_button" onClick={() => window.open('https://github.com/NachiLopez')}>
                {/* Cambiar el href a la pagina del deploy */}
                <a href="https://github.com/NachiLopez/ElogioStaff_Frontend" target="_blank" className="pi pi-globe"></a>
                <p>Ver en vivo</p>
              </button>
            </div>
            <div className="desc_work">
              <p>
                Las tecnologías utilizadas para desarrollar este proyecto fueron
                las siguientes:
              </p>
              <ul>
                <li>React Js con TypeScript</li>
                <li>Node.js</li>
                <li>SQL Migrado a Firebase</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
      </FirstSection>
    </MainContainer>
  );
};

export default Projects;

interface CardProps {
  expanded: boolean;
  hideText: boolean;
}

const MainContainer = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  .title,
  .sub_title {
    color: var(--color-text);
    margin: 0;
    margin-top: 1rem;
  }
  .sub_title {
    align-self: start;
    font-weight: 800;
    span{
      font-weight: 600;
      color: var(--color-primary);
    }
  }
  .text_format {
    font-weight: 700;
    color: var(--color-dark);
    a {
      padding: 10px;
      font-size: 1.5rem;
    }
  }
`;

const FirstSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  color: var(--color-text);
`;

const JobContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .multi_text {
    display: flex;
    h3,
    a {
      margin: 0;
      padding: 0;
      color: var(--color-dark);
      span{
        font-weight: 600;
        color: var(--color-primary);
      }
      color: var(--color-text);
      font-size: 1.17em;
      font-weight: 700;
      padding-left: 5px;
    }
  }
`;

const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hideText" && prop != "expanded"
})<CardProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.expanded && props.hideText ? "column" : "row"};
  width: 100%;
  transition: all 0.3s ease-in-out;
  height: ${(props) => (props.expanded ? "550px" : "200px")};
  padding: 10px;
  border-radius: 15px;
  color: var(--color-background);
  background-color: var(--color-primary);
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 0;
  &:hover {
    transform: scale(1.01);
    background-color: var(--color-dark);
  }
  .client_pic {
    background-color: var(--color-secondary);
    transition: all 1s ease-in;
    min-width: 350px;
    width: ${(props) => (props.expanded ? "100%" : "350px")};
    height: 150px;
    padding: 25px 0;
    margin-bottom: 10px;
    object-fit: contain;
    object-position: center;
    border-radius: 15px;
  }
  .desc_work_detailed {
    text-align: start;
    transition: all 1s ease-in-out;
    overflow-y: scroll;
    overflow-x: hidden;
    opacity: ${(props) => (props.expanded && props.hideText ? "1" : "0")};
    height: ${(props) => (props.expanded ? "500px" : "0px")};
    p {
      font-size: 1rem;
      padding: 0;
    }
    span {
      font-weight: 800;
      color: white;
    }
  }
`;

const ProjectDataContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hideText" && prop != "expanded"
})<CardProps>`
  padding: ${(props) => (props.expanded && props.hideText ? "0" : "0 1rem")};
  overflow: hidden;
  .client {
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 2rem;
    h4 {
      margin: 0;
    }
    p {
      margin: 0;
      padding: 0 5px;
    }
    a{
      color: var(--color-background);
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      padding: 5px 0;
    }
      @keyframes colorChange {
        0% { color: var(--color-text); }  
        50% { color: var(--color-accent); } 
        100% { color: var(--color-text); }  
      }
      .deploy_button{
        display: flex;
        align-items: center;
        background-color: var(--color-background);
        font-size: 16px;
        padding: 0 5px;
        margin: 0;
        transition: all 0.3s ease-in-out;
        opacity: ${(props) => (props.expanded ? "0" : "1")};
        p, a{
          animation: colorChange 3s infinite alternate;
          &:focus{
            outline: none;
          }
        }
        &:hover{
          border-color: var(--color-accent);
          box-shadow: 0 4px 6px #efebe963, 1px 1px 3px #efebe99e;
        }
        &:focus{
          outline: none;
        }
      }
  }
  .desc_work {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 10px 0;
    ul {
      margin: 0;
    }
    p {
      list-style: circle;
      margin: 0;
      padding-bottom: 15px;
    }
  }
  .client,
  .desc_work {
    transition: opacity 0.3s ease-in-out;
    display: ${(props) => (props.expanded && props.hideText ? "none" : "flex")};
    opacity: ${(props) => (props.expanded ? "0" : "1")};
    width: ${(props) => (props.expanded && props.hideText ? "0px" : "1000px")};
  }
`;

import { useState } from "react";
import styled from "styled-components";

const WorkExperience = () => {
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
    <MainContainer id="jobexperience">
      <h1 className="title">Experiencia laboral</h1>
      {/* <h2 className="sub_title">Experiencia laboral <span>(Abril 2024 - Actualidad)</span></h2> */}
      <h3 className="text_format">
        Por motivos de confidencialidad, no es posible mostrar los proyectos en
        detalle. Sin embargo, se describen las tareas realizadas y las
        responsabilidades asumidas dentro del desarrollo.
      </h3>
      <FirstSection>
        <JobContainer>
          <div className="multi_text">
            <h3>Período: </h3>
            <a>Abril 2024 - Actualidad</a>
          </div>
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
            <a>React con TypeScript, Styled Components, Node.JS, NestJS y SQL Server</a>
          </div>
        </JobContainer>
        <CardContainer
          expanded={expandedCard === 0}
          hideText={hideText}
          onClick={() => toggleCard(0)}
        >
          <img
            className="client_pic"
            src="https://close-upinternational.com/wp-content/uploads/2024/02/Close-Up-Logo-1.png"
            alt="clientPic"
          />
          {expandedCard === 0 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Desarrollo de ABMs: </span>Creación de formularios y
                vistas con React, TypeScript y Styled Components, implementación de rutas y controladores en el
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
            src="https://www.lnmutual.com.ar/image/meridional.png"
            alt="clientPic"
          />
          {expandedCard === 1 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Desarrollo de módulos de conciliación bancaria: </span>
                Implementación de interfaces con React, TypeScript y Styled Components para la gestión de
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
                Implementación de interfaces en React con TypeScript y Styled Components para la gestión de
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
                <span>Migración backend de NodeJS a NestJS: </span> Se realizó la migración con el objetivo de limpiar código innecesario y mejorar la legibilidad. Al tratarse de un producto tercerizado, el proyecto acumuló implementaciones de distintos desarrolladores, lo que derivó en una base de código confusa y poco optimizada. Se utilizó NestJS porque ofrece una estructura más clara y escalable.
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
                <li>Migración backend de NodeJS a NestJS</li>
                <li>Desarrollo de funcionalidades avanzadas en la interfaz</li>
                <li>Integración y mantenimiento del servidor</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
        <CardContainer
          expanded={expandedCard === 5}
          hideText={hideText}
          onClick={() => toggleCard(5)}
        >
          {/* <img
            className="client_pic"
            src="/src/assets/forecastIa_captura.png"
            alt="clientPic"
          /> */}
          <h2 className="client_pic no_pic">Forecast IA</h2>
          {expandedCard === 5 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Desarrollo de la interfaz para visualizar predicciones: </span> 
                Creación de una interfaz de usuario interactiva y responsiva, permitiendo a los usuarios visualizar y analizar 
                predicciones generadas por IA de manera intuitiva. En la sección de predicción tenías la posibilidad de elegir
                el tipo de predicción (Unidades, tickets o importe bruto), elegir una o varias tiendas, uno o varios productos y 
                un rango de fechas de inicio a fin pudiendo elegir rango de fechas especiales (Fin de semana largo, vacaciones, 
                evento o evento comercial, etc.) para que no sean tomadas en cuenta.
              </p>
              <p>
                <span>Conexión con el backend y consumo de API: </span> Implementación de llamadas a una API REST para enviar datos al 
                backend, desarrollado en Python por el cliente, donde se procesaban utilizando modelos de IA. El sistema devolvía 
                múltiples objetos de respuesta con un análisis en tiempo real, los cuales fueron moldeados en el frontend para su 
                correcta visualización en una tabla interactiva, con funciones de búsqueda y ordenamiento de registros.
              </p>
              <p>
                <span>Visualización de datos mediante gráficos: </span> Uso de librerías como Recharts y Chart.js para representar 
                tendencias y proyecciones de la IA en gráficos interactivos, permitiendo a los usuarios filtrar y analizar datos 
                de manera efectiva.
              </p>
              <p>
                <span>Optimización del rendimiento y carga eficiente: </span> Aplicación de técnicas como lazy loading 
                para mejorar la velocidad de carga y evitar renderizados innecesarios, optimizando la experiencia del usuario.
              </p>
              <p>
                <span>Gestión y estructuración de datos: </span> Diseño eficiente del manejo de datos en el frontend para garantizar la correcta interpretación y estructuración de la información proveniente del backend, facilitando la manipulación de predicciones.
              </p>
              <p>
                <span>Implementación de feedback en tiempo real: </span> Integración de notificaciones y mensajes de estado para informar a los usuarios sobre el progreso de sus solicitudes, mejorando la interacción con la plataforma.
              </p>
              <p>
                <span>Pruebas y mantenimiento del sistema: </span> Realización de pruebas funcionales y de rendimiento para garantizar la estabilidad del sistema, además de brindar soporte y optimización constante según las necesidades del cliente.
              </p>
            </div>
          ) : null}
          <ProjectDataContainer
            expanded={expandedCard === 5}
            hideText={hideText}
          >
            <div className="client">
              <h4>Cliente: </h4>
              <p>Forecast IA</p>
            </div>
            <div className="desc_work">
              <ul>
                <li>Desarrollo de interfaz de usuario en React para visualizar predicciones generadas por IA</li>
                <li>Conexión con backend en python para enviar datos y recibir análisis en tiempo real</li>
                <li>Implementación de gráficos interactivos para mostrar tendencias y proyecciones</li>
                <li>Optimización del rendimiento para mejorar la experiencia del usuario</li>
                <li>Gestión y estructuración de datos</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
        <div className="separator"></div>
        <JobContainer>
          <div className="multi_text">
            <h3>Período: </h3>
            <a>Mayo 2023 - Abril 2024</a>
          </div>
          <div className="multi_text">
            <h3>Empresa: </h3>
            <a
              href="https://www.fiverr.com/"
              target="_blank"
            >
              Fiverr Freelance
            </a>
          </div>
          <div className="multi_text">
            <h3>Rol: </h3>
            <a>Full Stack Developer</a>
          </div>
          <div className="multi_text">
            <h3>Tecnologías: </h3>
            <a>React con TypeScript, Styled Components, Node.JS, Firebase y MongoDB</a>
          </div>
        </JobContainer>
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
                un sistema en React con TypeScript y Styled Components que permite al personal de RRHH diseñar y
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
            <div className="client">
              <div>
                <h4>Elogio Staff</h4>
              </div>
            </div>
            <div className="desc_work">
              <p>
                Las tecnologías utilizadas para desarrollar este proyecto fueron
                las siguientes:
              </p>
              <ul>
                <li>React Js con TypeScript y Styled components</li>
                <li>Node.js</li>
                <li>SQL Migrado a Firebase</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
        <CardContainer
          expanded={expandedCard === 4}
          hideText={hideText}
          onClick={() => toggleCard(4)}
        >
          <img
            className="client_pic"
            src="/src/assets/crysisLogo.png"
            alt="clientPic"
          />
          {expandedCard === 4 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Gestión de Productos: </span>Implementación de un catálogo de productos con React, TypeScript y Styled Components. Los datos se almacenan y traen con Firebase, con la posibilidad de filtrar por color, marca, categoría y precio, mejorando la experiencia de búsqueda.
              </p>
              <p>
                <span>Carrito de Compras Interactivo: </span>Creación de un sistema de carrito de compras con manejo de estados en React, permitiendo al usuario agregar, eliminar y modificar la cantidad de productos seleccionados. Los datos del carrito se sincronizan con el almacenamiento local para persistencia en recargas de página.
              </p>
              <p>
                <span>Procesamiento de Pedidos: </span>Desarrollo de un flujo de a través de formularios donde se registra, del usuario, sus datos de facturación, se selecciona el método de pago y confirma su compra, generando un registro en Firebase con todos estos datos.
              </p>
              <p>
                <span>Procesamiento de Pedidos: </span>Desarrollo de un flujo de compra a través de formularios donde se registra, del usuario, sus datos de facturación, se selecciona el método de pago y confirma su compra, generando un registro en Firebase con todos estos datos.
              </p>
              <p>
                <span>Integración de PrimeReact: </span>Se integraron componentes de PrimeReact como el DataTable para mostrar el inventario y el Paginator para una navegación fluida en el catálogo de productos.
              </p>
              <p>
                <span>Sistema de Autenticación: </span>Desarrollo de un sistema de autenticación para los usuarios, pudiendose registrar como vendedor o comprador. Los usuarios pueden registrarse con su correo y contraseña, teniendo que cumplir con la verificación por código. Los usuarios deben iniciar sesión para realizar compras o gestionar productos.
              </p>
              <p>
                <span>Gestión de Roles: </span>Implementación de un sistema de roles para separar la experiencia de usuario entre vendedores y compradores, separando los permisos para cada usuario dependiendo su rol.
              </p>
              <p>
                <span>Gestión de Roles: </span>Implementación de un sistema de roles para separar la experiencia de usuario entre vendedores y compradores. Los vendedores tienen acceso a un panel de administración donde pueden gestionar su inventario, agregar productos, actualizar precios y monitorear ventas. Los compradores pueden explorar el catálogo, añadir productos al carrito y realizar compras.
              </p>
            </div>
          ) : null}
          <ProjectDataContainer
            expanded={expandedCard === 4}
            hideText={hideText}
          >
            <div className="client">
              <div>
                <h4>Crysis</h4>
              </div>
            </div>
            <div className="desc_work">
              <p>
                Las tecnologías utilizadas para desarrollar este proyecto fueron
                las siguientes:
              </p>
              <ul>
                <li>React Js con TypeScript y Styled components</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
        <CardContainer
          expanded={expandedCard === 5}
          hideText={hideText}
          onClick={() => toggleCard(5)}
        >
          <img
            className="client_pic"
            src="/src/assets/NewsHubLogo.png"
            alt="clientPic"
          />
          {expandedCard === 5 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Sistema de administración para redactores: </span>Creación de un panel donde los redactores pueden agregar, modificar y eliminar noticias. Las noticias se guardan en MongoDB, pasando por el back hecho en Node.js, y se visualizan en tiempo real.
              </p>
              <p>
                <span>Listados de noticias por categorías: </span>Las noticias se muestran agrupadas por categorías como "Política", "Deportes", "Cultura", y un filtro permite visualizar solo las noticias seleccionadas.
              </p>
              <p>
                <span>Historial y actualizaciones de versiones: </span>Implementación de versiones para cada noticia, permitiendo ver ediciones anteriores de la misma noticia, que cambia de versión y queda en el historial al ser actualizada.
              </p>
              <p>
                <span>Utilización de librería: </span>Implementación de paginación en el frontend usando el componente Paginator (mejorando la navegación y carga de noticias al dividir el contenido en páginas más pequeñas y manejables.) y se integró el componente Editor de PrimeReact para tener muchas más herramientas de personalización con la noticia.
              </p>
            </div>
          ) : null}
          <ProjectDataContainer
            expanded={expandedCard === 5}
            hideText={hideText}
          >
            <div className="client">
              <div>
                <h4>NewsHub</h4>
              </div>
            </div>
            <div className="desc_work">
              <p>
                Las tecnologías utilizadas para desarrollar este proyecto fueron
                las siguientes:
              </p>
              <ul>
                <li>React Js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
        <CardContainer
          expanded={expandedCard === 6}
          hideText={hideText}
          onClick={() => toggleCard(6)}
        >
          <img
            className="client_pic"
            src="/src/assets/BlogPersonalLOGO.png"
            alt="clientPic"
          />
          {expandedCard === 6 && hideText ? (
            <div className="desc_work_detailed">
              <p>
                <span>Autenticación de usuarios: </span>Desarrollo de un sistema de autenticación en Firebase Authentication para permitir que el administrador pueda iniciar sesión de forma segura y acceder al panel de control del blog.
              </p>
              <p>
                <span>Gestión de artículos: </span>Implementación de un CRUD para crear, editar y eliminar artículos directamente desde el frontend, almacenando la información en Firebase Firestore.
              </p>
              <p>
                <span>Diseño responsivo: </span>Se desarrollo con CSS un diseño moderno y adaptable a distintos dispositivos, asegurando una buena experiencia de usuario.
              </p>
              <p>
                <span>Categorización de artículos: </span>Los artículos se organizan en categorías (tecnología, negocios, emprendimiento, etc.), permitiendo un filtrado sencillo para el usuario.
              </p>
            </div>
          ) : null}
          <ProjectDataContainer
            expanded={expandedCard === 6}
            hideText={hideText}
          >
            <div className="client">
              <div>
                <h4>Blog Personal</h4>
              </div>
            </div>
            <div className="desc_work">
              <p>
                Las tecnologías utilizadas para desarrollar este proyecto fueron
                las siguientes:
              </p>
              <ul>
                <li>React Js</li>
                <li>Firebase</li>
              </ul>
            </div>
          </ProjectDataContainer>
        </CardContainer>
      </FirstSection>
    </MainContainer>
  );
};

export default WorkExperience;

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
  padding: 1.5rem 0;
  text-align: center;
  color: var(--color-text);
  .separator {
    width: 100%;
    content: "";
    border-top: 2px dotted var(--color-accent);
  }
`;

const JobContainer = styled.div`
  /* display: flex; */
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
      font-size: 1.3rem;
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
  height: ${(props) => (props.expanded ? "550px" : "220px")};
  align-items: center;
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
  .client_pic.no_pic{
    margin: 0;
    text-align: center;
    align-content: center;
    font-size: 3rem;
    color: var(--color-dark);
  }
  .desc_work_detailed {
    text-align: start;
    transition: all 1s ease-in-out;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-primary);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-primary);
    }
    opacity: ${(props) => (props.expanded && props.hideText ? "1" : "0")};
    height: ${(props) => (props.expanded ? "500px" : "0px")};
    p {
      font-size: 1.2rem;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

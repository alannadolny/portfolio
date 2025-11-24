import codely from "../../../assets/codely.png";
import foodbay from "../../../assets/foodbay.png";
import gamblingRoulette from "../../../assets/gamling-roulette.png";
import walkieTalkie from "../../../assets/walkie-talkie.png";
import SectionLabel from "../../utils/SectionLabel.tsx";

const projects = [
  {
    image: foodbay,
    title: "Foodbay",
    description:
      "The project aims to create a system that simplifies order handling for restaurants and streamlines the process of placing and delivering food orders. It provides a web application accessible on various devices and supports three user types: customers, delivery drivers, and restaurants. The system is built using React for the frontend, Spring Boot for the backend, PostgreSQL for the database, and Keycloak for authentication, all containerized with Docker. Users can browse restaurants, order dishes, manage deliveries, and track order statuses through dedicated interfaces tailored to each role. The platform ensures smooth communication between all user types and offers features such as notifications, maps, and order management tools.",
  },
  {
    image: codely,
    title: "Codely",
    description:
      "The goal of the project is to allow users to run code directly in the browser without configuring a local development environment, enabling effective practice of programming skills. The application was built using React on the frontend and Express with Node.js on the backend, supported by WebSocket communication through Socket.IO. MongoDB serves as the main database, complemented by Redis for caching, ensuring fast data access and scalable storage. The system is fully containerized using Docker and orchestrated with Docker Compose for development and Kubernetes for production deployment, allowing efficient scaling, resource management, and secure configuration. Frontend functionalities were tested with WebDriverIO and Selenium to ensure correctness and stability of the user interface.",
  },
  {
    image: walkieTalkie,
    title: "Walkie Talkie",
    description:
      "The project consists of a React-based frontend and a Node.js/Express backend connected to a MongoDB database. It uses a wide range of libraries such as Axios, Formik, MUI, Socket.io, PeerJS, Mongoose, and Nodemailer to enable real-time communication, form validation, profile management, and messaging. The application supports user registration and login, email contact with support, responsive design, and access restrictions for non-authenticated users. Its main functionality includes real-time channel management, messaging, media uploads, and video calls with unlimited participants. Additional features include channel filtering, dynamic updates for all connected clients, and customizable user profiles.",
  },
  {
    image: gamblingRoulette,
    title: "Gambling Roulette",
    description:
      "The project is built with a React-based frontend and a Node.js backend, using Neo4j as the main database. It incorporates numerous libraries such as axios, formik, Material UI, MQTT, lodash, and uuid to provide a smooth and interactive user experience. The application includes user authentication, role-based access with an administrator panel, and secure password handling. Its core functionality revolves around a roulette game system with live updates, betting, account balance management, statistics, and real-time communication through MQTT and SSE. Users also have access to a chat with multiple rooms, message moderation features, and full account management options.",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`project-wrapper project-wrapper-${index} ${index == 0 ? "first-project-wrapper" : ""}`}
        >
          {index == 0 && (
            <SectionLabel label="Projects" color="rgb(28, 90, 103)" />
          )}
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-description">
            <span>{project.title}</span>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

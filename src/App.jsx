import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Ec2 Test server </h1>
        <p>AWS is a leading cloud service provider</p>
        <p>React is a JavaScript library for building user interfaces</p>
        <p>
          Vite is a build tool that aims to provide a faster and leaner
          development experience for modern web projects
        </p>
        <p>
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
        </p>
        <p>Express.js is a web application framework for Node.js</p>
        <p>
          MongoDB is a NoSQL database that uses a document-oriented data model
        </p>
        <p>
          Docker is a platform for developing, shipping, and running
          applications in containers
        </p>
        <p>
          Git is a distributed version control system for tracking changes in
          source code during software development
        </p>
        <p>
          GitHub is a web-based platform for version control and collaboration
        </p>
      </div>
    </>
  );
}

export default App;

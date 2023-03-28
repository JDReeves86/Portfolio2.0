import whatsForDinner from "../images/WhatsForDinner.jpg";
import nerdQuiz from "../images/NerdQuiz.jpg";
import taskImg from "../images/tasktracker.jpg";
import weatherImg from "../images/weather.jpg";
import goblinImg from "../images/GoMode.jpg"

const projects = {
  WhatsForDinner: {
    id: 1,
    title: "WhatsForDinner",
    tagline:
      "Can't decide what to eat?",
    description:
      "WhatsForDinner is a web app that uses the MealDB and CocktailDB to help you come up with ideas for meals to make and drinks to go along with it.  Created as a group project, contributions included making API fetch calls and deconstructing data.",
    GHlink: "https://github.com/JDReeves86/WhatsForDinner",
    liveApp: "https://jdreeves86.github.io/WhatsForDinner/",
    backgroundImg: "foodBackground",
    image: whatsForDinner,
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-square-js",
    ],
    technologies: "HTML, CSS, Bulma, JavaScript"
  },
  NerdQuiz: {
    id: 2,
    title: "NerdQuiz",
    tagline:
      "Put your nerd knowledge to the test.",
    description:
      " Take and create quizzes to build up your Nerd Level and compete with other nerds to be crowned the Uber Nerd. Created as a group project. Contributions included database schema design and data fetching/destructuring.",
    GHlink: "https://github.com/JDReeves86/Nerd-Quiz",
    liveApp: "https://nerd-quiz.onrender.com/",
    backgroundImg: "nerdBackground",
    image: nerdQuiz,
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-square-js",
      "fa-brands fa-node",
      "fa-solid fa-database",
    ],
    technologies: "HTML, CSS, Bootstrap, JavaScript, Express, Node.js, Handlebars.js, SQL, Sequelize, Chart.js"

  },
  GoMode: {
    id: 6,
    title: "GoMode",
    tagline: "Help your neighbors, build up your community.",
    description: "An invite only social networking app designed for communities. Members of a neighborhood may be invited by the admin of their neighborhood to participate. Neighbors can post their needs, and their neighbors can choose to accept jobs and help support their community. Created as a group project. Contributions included React state management, building GraphQL queries, mutations, and data destructuring / rendering. For demonstration of full site functionality, please use my contact form to request a demo.",
    GHlink: "https://github.com/JDReeves86/GoMode",
    liveApp: "https://goblinmode.onrender.com/",
    backgroundImg: "goblinBackground",
    image: goblinImg,
    icons: [
      "fa-brands fa-react",
      "fa-brands fa-css3-alt",
      "fa-brands fa-square-js",
      "fa-brands fa-node-js",
      "fa-solid fa-database"
    ],
    technologies: "React.js, CSS, Bulma, Express, Node.js, MongoDB/Mongoose, GraphQL, Apollo Server"
  },
  TaskTracker: {
    id: 3,
    title: "Not Your Fathers Planner",
    tagline:
      "Definitely NOT your Fathers planner.",
    description: "Make an account to take notes, and save tasks. Currently a work in progress.",
    GHlink: "https://github.com/JDReeves86/my-organizer-app",
    liveApp: "https://notyourfathersplanner.onrender.com/",
    backgroundImg: "taskBackground",
    image: taskImg,
    icons: [
      "fa-brands fa-react",
      "fa-brands fa-css3-alt",
      "fa-brands fa-square-js",
      "fa-brands fa-node-js",
      "fa-solid fa-database"
    ],
    technologies: "HTML, CSS, Bulma, JavaScript, mongoDB/mongoose, React, graphQL, Apollo Server"
  },
  // JATE: {
  //     id: 4,
  //     title: 'J.A.T.E',
  //     tagline: 'Just Another Text Editor PWA',
  //     description: "",
  //     GHlink: 'https://github.com/JDReeves86/ideal-potato-JATE',
  //     liveApp: 'https://polar-wave-88099.herokuapp.com/',
  //     backgroundImg: 'jateBackground',
  //     icons: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-square-js', 'fa-brands fa-node', 'fa-solid fa-database']
  // },
  Weather: {
    id: 5,
    title: "Weather API",
    tagline: "You want weather? We got weather!",
    description:
      "Want to know the 5 day forecast? Enter a city and state and get the weather for that location. Uses the OpenWeather API to fetch weather data and returns in a simple to read format. Sole developer for project",
    GHlink: "https://github.com/JDReeves86/06ChallengeTurnIn",
    liveApp: "https://jdreeves86.github.io/06ChallengeTurnIn/",
    backgroundImg: "weatherBackground",
    image: weatherImg,
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-square-js",
    ],
    technologies: "HTML, CSS, Bulma, JavaScript"
  },
  // API: {
  //     id: 6,
  //     title: 'Social Media API',
  //     tagline: 'NoSQL social media API - No front-end.',
  //     description: '',
  //     GHlink: 'https://github.com/JDReeves86/fantastic-pancake',
  //     backgroundImg: 'APIbackground',
  //     icons: ['fa-brands fa-square-js', 'fa-brands fa-node', 'fa-solid fa-database']
  // }
};

export default projects;

import DigitalProject  from '/Digital watch and stop timmer.jpg'
import eventProject from '/event planner.jpg'
import geminiProject from '/Gemini app.jpg'
import movieProject from '/movify project.jpg'
export const projectsData = [
    {
        technologies: ["I built a movie search application using React.js, a REST API, Hooks, and a third-party library (Material-UI)"],
        title: "MOVIFY PROJECT",
        image: `${movieProject}`,
        description: "I built a movie search application using React.js, a REST API, Hooks, and a third-party library (Material-UI). Users can search for movies based on input and switch teams.",
        link: "https://movify-project-bmmk.vercel.app/"
    },
    {
        technologies: ["Built a React UI for submitting 5 questions, with answers emailed via the Gemini API."],
        title: "GEMINI ASSISTANCE",
        image: `${geminiProject}`,
        description: "Built a React UI for submitting 5 questions, with answers emailed via the Gemini API. Used Google Apps Script for storage and JavaScript for functionality, improving efficiency by 30%.",
        link: "https://gemini-api-with-google-sheet.vercel.app/"
    },
    {
        technologies: ["Developed a responsive Card Creation Application using Node.js, EJS and Express."],
        title: "CARD CREATOR APP",
        image: `${movieProject}`,
        description: "Developed a responsive Card Creation Application using Node.js, EJS and Express. Users can add, edit, and delete cards, with data stored in files. Displays content dynamically from stored files for seamless user interaction",
        link: "https://github.com/PinkiKumari16/Create-Card-App"
    },
    {
        technologies: ["Used React, routing, and Material UI"],
        title: "EVENT's PLANNER",
        image: `${eventProject}`,
        description: "Developed an Event Planner app with Signup, Login, marking events as done, deletion, and print features. Used React, routing, and Material UI, resulting in a 25% improvement in event management efficiency.",
        link: "https://events-planner-chi.vercel.app/"
    },
    {
        technologies: ["Used React(Hooks) and HTML5, improving time management"],
        title: "DIGITAL WATCH & TIMMER",
        image: `${DigitalProject}`,
        description: "Developed a Digital Watch and Timer with features of current time display, start/stop/restart timer, recording, and deleting timings. Used React(Hooks) and HTML5, improving time management efficiency by 40%.",
        link: "https://digital-watch-and-timmer.vercel.app/"
    }

    
]
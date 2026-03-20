import IMG1 from '../assets/Space.png';
import IMG2 from '../assets/staysphare.png';
import IMG3 from '../assets/recipe.png';
import IMG4 from '../assets/leaderboard.png';
import IMG5 from '../assets/bookstore.png';
import IMG6 from '../assets/mathmagician.png';
import IMG7 from '../assets/chatalpha.png';
import IMG8 from '../assets/wikipedia.png';
import IMG9 from '../assets/aliens.png';

const data = [
  {
    id: crypto.randomUUID(),
    image: IMG2,
    title: 'StaySphere',
    github: 'https://github.com/tsheporamantso/final-capstone-react-front-end',
    demo: 'https://github.com/tsheporamantso/final-capstone-react-front-end',
    description:
      'Hotel booking CRUD application built with React and Redux for state management, and Ruby on Rails for the backend.',
    stack: [
      'React',
      'Redux',
      'CSS3',
      'Ruby on Rails',
      'RSpec',
      'PostgreSQL',
      'Postman',
    ],
  },
  {
    id: crypto.randomUUID(),
    image: IMG1,
    title: 'Space Travellers Hub',
    github: 'https://github.com/tsheporamantso/Space-Travelers',
    demo: 'https://space-travellers-6soy.onrender.com/',
    description:
      'Space Travellers Hub is a web application that allows users to book rockets and join selected missions to Mars. The app is built with React and Redux for state management. It also uses the SpaceX API to fetch data.',
    stack: ['React', 'Redux', 'CSS3', 'Jest', 'Postman'],
  },

  {
    id: crypto.randomUUID(),
    image: IMG7,
    title: 'Chat Alpha',
    github: 'https://github.com/tsheporamantso/Chat-Alpha',
    demo: 'https://github.com/tsheporamantso/Chat-Alpha',
    description:
      'Ruby on Rails(MVC) Application that allows user to Create, Read, Update and Delete messages, styled wit bootstrap.',
    stack: ['Ruby on Rails', 'Bootstrap', 'RSpec', 'PostgreSQL', 'ERB'],
  },

  {
    id: crypto.randomUUID(),
    image: IMG8,
    title: 'Wikipedia',
    github: 'https://github.com/tsheporamantso/wikipedia',
    demo: 'https://wikipedia-ten-indol.vercel.app/',
    description:
      "Wikipedia Search It's a clone search engine application built with vanilla JavaScript,TypeScript.Integrated Wikipedia and Web Speech Recognition API's.",
    stack: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Postman'],
  },

  {
    id: crypto.randomUUID(),
    image: IMG9,
    title: 'Aliens Management',
    github: 'https://github.com/tsheporamantso/aliens',
    demo: 'https://github.com/tsheporamantso/aliens',
    description:
      'Restful API that collects Web Engineers name, favorite tech stack and employment status, built with NodeJS, ExpressJS , Non Relational Database MongoDB and Mongoose Modelling library.',
    stack: ['NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose'],
  },

  {
    id: crypto.randomUUID(),
    image: IMG3,
    title: 'Recipe App',
    github: 'https://github.com/tsheporamantso/Recipe-App',
    demo: 'https://recipeapp-sxaw.onrender.com',
    description:
      "Recipe App it's a Ruby on Rails application that keeps track of all your recipes, ingredients, and inventory. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.",
    stack: ['Ruby on Rails', 'PostgreSQL', 'RSpec', 'ERB'],
  },
  {
    id: crypto.randomUUID(),
    image: IMG4,
    title: 'Leader Board',
    github: 'https://github.com/tsheporamantso/budget-app',
    demo: 'https://tsheporamantso.github.io/Leaderboard/dist',
    description:
      'Leader Board is a web application that allows users to add, delete, and update scores. The app is built with HTML, CSS, JavaScript and Webpack.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Webpack'],
  },
  {
    id: crypto.randomUUID(),
    image: IMG5,
    title: 'Book Store',
    github: 'https://github.com/tsheporamantso/bookstore',
    demo: 'https://bookstore-hzhe.onrender.com/',
    description:
      "Book Store it's a Single Page Application(SPA) that allows users to display, add, delete, and update books. The app is built with React and Redux for state management.",
    stack: ['React', 'Redux', 'CSS3'],
  },
  {
    id: crypto.randomUUID(),
    image: IMG6,
    title: 'Math Magician',
    github: 'https://github.com/tsheporamantso/bookstore',
    demo: 'https://math-magicians-app-eljm.onrender.com',
    description:
      "Math Magician it's a Single Page Web Application for math enthusiasts that allows users to perform simple calculations. The app is built with React.",
    stack: ['React', 'CSS3'],
  },
];

export default data;

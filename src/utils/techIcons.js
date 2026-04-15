import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiRubyonrails,
  SiJest,
  SiRubygems,
  SiRuby,
  SiJavascript,
  SiWebpack,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiSwagger,
} from 'react-icons/si';

const RoR = 'Ruby on Rails';

const techIcons = {
  React: <FaReact />,
  Redux: <SiRedux />,
  TypeScript: <SiTypescript />,
  Tailwind: <SiTailwindcss />,
  NodeJS: <FaNodeJs />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3 />,
  [RoR]: <SiRubyonrails />,
  PostgreSQL: <BiLogoPostgresql />,
  Jest: <SiJest />,
  RSpec: <SiRubygems />,
  ERB: <SiRuby />,
  Bootstrap: <FaBootstrap />,
  JavaScript: <SiJavascript />,
  Webpack: <SiWebpack />,
  Postman: <SiPostman />,
  ExpressJS: <SiExpress />,
  MongoDB: <SiMongodb />,
  Mongoose: <SiMongoose />,
  Swagger: <SiSwagger />,
};

export default techIcons;

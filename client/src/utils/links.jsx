import { FaUserAlt, FaChartBar, FaCube, FaFan, FaExternalLinkSquareAlt} from "react-icons/fa";

const links = [
  { id: 1, text: 'Stats', path: '/', icon: <FaChartBar /> },
  { id: 2, text: 'My Skills', path: 'my-skills', icon: <FaCube /> },
  { id: 3, text: 'Add Skill', path: 'add-skill', icon: <FaFan /> },
  { id: 4, text: 'Profile', path: 'profile', icon: <FaUserAlt /> },
  { id: 5, text: 'Resources', path: 'Resources', icon: <FaExternalLinkSquareAlt /> },
];

export default links;

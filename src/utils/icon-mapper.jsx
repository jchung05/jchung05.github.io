import { BsCalendar3, BsCloud } from 'react-icons/bs';
import { FaBriefcase, FaUniversity, FaTrophy,
  FaGithub, FaLinkedin, FaMedium, FaTwitter,
  FaUserAlt, FaBtc, FaArrowsAlt } from 'react-icons/fa';
import { RiMapPin2Line, RiMapPin2Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { GrTasks } from 'react-icons/gr';
import { ImFileText, ImFileText2 } from 'react-icons/im';

export function iconMapper(iconName, size=18) {
  const iconMap = {
    "calendar"  : <BsCalendar3 size={size} />,

    "work"      : <FaBriefcase size={size} />,
    "edu"       : <FaUniversity size={size} />,
    "cert"      : <FaTrophy size={size} />,

    "github"    : <FaGithub size={size} />,
    "linkedin"  : <FaLinkedin size={size} />,
    "medium"    : <FaMedium size={size} />,
    "twitter"   : <FaTwitter size={size} />,

    "email"     : <MdEmail size={size} />,
    "location"  : <RiMapPin2Fill size={size} />,
    "map"       : <RiMapPin2Line size={size} />,
    "user"      : <FaUserAlt size={size} />,

    "tasks"     : <GrTasks size={size} />,
    "resume"    : <ImFileText size={size} />,

    "hamburger" : <GiHamburgerMenu size={size} />,

    "btc"       : <FaBtc size={size} />,
    "cloud"     : <BsCloud size={size} />,
    "fullstack" : <FaArrowsAlt size={size} />,
    "writing"   : <ImFileText2 size={size} />,
  }

  return iconMap[iconName];
}
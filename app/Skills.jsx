import Divider from "./Divider";
import SkillsItem from "./SkillsItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faCss3Alt, faJava } from '@fortawesome/free-brands-svg-icons';
import JavascriptIcon from "./Icons/JavascriptIcon";

const Skills = () => (
    <div className="card-right-section3-skills">
        <h1 className="uppercase font-bold text-xl mb-1">Skills</h1>
        <Divider />
        <SkillsItem
            title="JavaScript (jQuery, React, Next)"
            icon={<JavascriptIcon width="20" />}
        />
        <SkillsItem
            title="CSS (TailwindCSS)"
            icon={<FontAwesomeIcon width="16" icon={faCss3Alt} />}
        />
        <SkillsItem
            title="Java"
            icon={<FontAwesomeIcon width="16" icon={faJava} />}
        />
    </div>
);

export default Skills; 
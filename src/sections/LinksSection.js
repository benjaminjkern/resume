import { primaryColor } from "../colors";
import List from "../components/List";
import Section from "../components/Section";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const LinksSection = () => {
    return (
        <Section title="Find Me Online">
            <List>
                <IconLink
                    href="https://linkedin.com/in/benjamin-j-kern"
                    icon={<FaLinkedinIn />}
                >
                    /benjamin-j-kern
                </IconLink>
                <IconLink
                    href="https://github.com/benjaminjkern"
                    icon={<BsGithub />}
                >
                    /benjaminjkern
                </IconLink>
            </List>
        </Section>
    );
};

const IconLink = ({ href, icon, children }) => {
    return (
        <a style={{ flexDirection: "row", alignItems: "center" }} href={href}>
            <span
                style={{ color: primaryColor, marginRight: 10, fontSize: 20 }}
            >
                {icon}
            </span>
            {children}
        </a>
    );
};

export default LinksSection;

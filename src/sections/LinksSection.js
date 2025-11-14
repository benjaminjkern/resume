import { primaryColor } from "../colors";
import List from "../components/List";
import Section from "../components/Section";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

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
                <IconLink
                    href="https://benjaminjkern.github.io/"
                    icon={<FiLink />}
                >
                    benjaminjkern.com
                </IconLink>
            </List>
        </Section>
    );
};

const IconLink = ({ href, icon, children }) => {
    return (
        <a
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
            href={href}
        >
            <span
                style={{
                    color: primaryColor,
                    marginRight: 10,
                    marginLeft: 5,
                    fontSize: 20,
                    display: "flex",
                }}
            >
                {icon}
            </span>
            {children}
        </a>
    );
};

export default LinksSection;

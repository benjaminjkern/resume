import { primaryColor } from "../colors";
import List from "../components/List";
import Section from "../components/Section";

const LinksSection = () => {
    return (
        <Section title="Find Me Online">
            <List>
                <IconLink
                    href="https://linkedin.com/in/benjamin-j-kern"
                    icon="linkedin"
                >
                    /benjamin-j-kern
                </IconLink>
                <IconLink href="https://github.com/benjaminjkern" icon="github">
                    /benjaminjkern
                </IconLink>
            </List>
        </Section>
    );
};

const IconLink = ({ href, icon, children }) => {
    return (
        <a style={{ flexDirection: "row" }} href={href}>
            <span style={{ color: primaryColor }}>{icon}</span>
            {children}
        </a>
    );
};

export default LinksSection;

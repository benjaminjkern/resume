import { primaryColor } from "../colors";
import List from "../components/List";
import Section from "../components/Section";

const SkillsRatingSection = () => {
    return (
        <Section title="Programming">
            <List separation={5}>
                <SkillRating rating={5}>JavaScript</SkillRating>
                <SkillRating rating={5}>HTML/CSS</SkillRating>
                <SkillRating rating={5}>Python</SkillRating>
                <SkillRating rating={5}>Java</SkillRating>
                <SkillRating rating={4}>C/C++</SkillRating>
                <SkillRating rating={4}>Cuda</SkillRating>
                <SkillRating rating={4}>Swift</SkillRating>
                {/* <SkillRating rating={4}>SQL</SkillRating> */}
                {/* <SkillRating rating={4}>Matlab</SkillRating> */}
                {/* <SkillRating rating={4}>Fortran</SkillRating> */}
                <SkillRating rating={3}>Go</SkillRating>
                <SkillRating rating={3}>Scala</SkillRating>
                <SkillRating rating={3}>Rust</SkillRating>
                {/* <SkillRating rating={3}>Haskell</SkillRating> */}
                {/* <SkillRating rating={3}>R</SkillRating> */}
                <SkillRating rating={3}>Julia</SkillRating>
            </List>
        </Section>
    );
};
const MAX_RATING = 5;

const SkillRating = ({ rating, children }) => {
    return (
        <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 700 }}>{children}</span>
            <div style={{ flexDirection: "row" }}>
                {Array(MAX_RATING)
                    .fill()
                    .map((_, i) => (
                        <span
                            style={{
                                backgroundColor:
                                    rating > i ? primaryColor : "lightgray",
                                width: 15,
                                height: 15,
                                borderRadius: 10,
                                marginLeft: 2,
                            }}
                        />
                    ))}
            </div>
        </div>
    );
};

export default SkillsRatingSection;

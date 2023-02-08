import { secondaryColor } from "../colors";
import Section from "../components/Section";

const skills = `Programming
AWS
UI/UX Design
ReactJS
Apollo GraphQL
OpenGL
TensorFlow & PyTorch
NodeJS
Maven / Gradle
Deep Learning
Artificial Intelligence
Github Workflows`.split("\n");

const SkillsListSection = () => {
    return (
        <Section title="Skills">
            <div style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {skills.map((skill, i) => (
                    <span
                        style={{
                            color: secondaryColor,
                            padding: 5,
                            borderBottomWidth: 1,
                            borderBottomStyle: "solid",
                            borderBottomColor: secondaryColor,
                            marginRight: 5,
                        }}
                        key={i}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </Section>
    );
};

export default SkillsListSection;

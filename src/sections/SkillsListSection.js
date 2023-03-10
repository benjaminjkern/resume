import { secondaryColor } from "../colors";
import Section from "../components/Section";

const skills = `AWS
# Docker
UI/UX Design
ReactJS
NextJS
Serverless Infrastructures
GraphQL
Django REST Interface
Flask
OpenGL
Cmake
TensorFlow
PyTorch
NodeJS
Maven / Gradle
Deep Learning
Artificial Intelligence
Github Workflows`
    .split("\n")
    .filter((line) => !line.startsWith("#"));

const SkillsListSection = () => {
    return (
        <Section title="Skills & Technologies">
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

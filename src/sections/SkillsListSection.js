import { secondaryColor } from "../colors";
import Section from "../components/Section";

const skills = `AWS
# Docker
REST APIs
React / React Native
NextJS
AWS DynamoDB
AWS RDS
Serverless Infrastructures
AWS Lambda
GraphQL
Django
Flask
OpenGL
Cmake
Pandas
TensorFlow / PyTorch
NodeJS
Maven / Gradle
Deep Learning
Artificial Intelligence
Github Workflows
Team Building
Product Management
UI/UX Design`
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

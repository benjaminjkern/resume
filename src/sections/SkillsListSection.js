import { secondaryColor } from "../colors";
import Section from "../components/Section";

const skills = `
React / React Native
NextJS
NodeJS
# Express

REST APIs
GraphQL
Django
Flask
MongoDB

AWS Elastic Beanstalk
AWS EC2
AWS DynamoDB
AWS RDS
AWS Lambda
# Docker / Kubernetes
# Apache / Nginx

Pandas
Deep Learning
Artificial Intelligence
TensorFlow / PyTorch
# OpenGL
Cmake
# Maven / Gradle
Elasticsearch

Github Workflows
CI/CD

Git
Asana
Team Building
Product Management
UI/UX Design`
    .split("\n")
    .filter((line) => !line.startsWith("#") && !line.match(/^\s*$/));

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

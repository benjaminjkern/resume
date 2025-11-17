import { primaryColor, secondaryColor } from "../colors";
import Section from "../components/Section";

const oldSkills = `
React / React Native
NextJS
NodeJS
# Express

# REST APIs
GraphQL
Django
Flask
MongoDB

AWS Elastic Beanstalk
AWS EC2
# AWS DynamoDB
AWS RDS
AWS Lambda
# Docker / Kubernetes
# Apache / Nginx

# Pandas
Deep Learning
Artificial Intelligence
TensorFlow / PyTorch
# OpenGL
Cmake
# Maven / Gradle
Elasticsearch

# Github Workflows
CI/CD

Git
Asana
Team Building
Product Management
UI/UX Design`;

const SkillsListSection = () => {
    return (
        <Section title="Skills & Technologies">
            <b style={{ marginBottom: 5 }}>Leadership & Management</b>
            <ul>
                <li>
                    Hiring, mentoring, and leading engineering teams in 0-1
                    environments as well as 1-100 environments
                </li>
                <li>
                    Cross-functional collaboration with product, research, and
                    leadership stakeholders
                </li>
                <li>
                    Facilitating technical decision-making and building
                    psychological safety
                </li>
            </ul>
            <b style={{ marginBlock: 5 }}>Technical Expertise</b>
            <ul>
                <li>
                    Full-stack platforms: <b>React</b>, <b>Next.js</b>,{" "}
                    <b>React Native</b>, <b>Django</b>, <b>Node.js</b>
                </li>
                <li>
                    Distributed systems, microservices architecture, background
                    processing
                </li>
                <li>
                    Cloud infrastructure: AWS (EC2, RDS, Lambda, S3), databases
                    (PostgreSQL, MySQL, Vector DBs)
                </li>
                <li>Languages: TypeScript/JavaScript, Python, C/C++, Java</li>
            </ul>
        </Section>
    );
};

export default SkillsListSection;

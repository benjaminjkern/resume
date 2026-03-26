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
            <b style={{ marginBlock: 5 }}>Languages & Frameworks</b>
            <ul>
                <li>C/C++, CUDA, Python, SQL, TensorFlow</li>
                <li>TypeScript/JavaScript, Java</li>
                <li>React, Next.js, React Native, Django, Node.js</li>
            </ul>
            <b style={{ marginBlock: 5 }}>Platform & Infrastructure</b>
            <ul>
                <li>
                    Simulation infrastructure, data processing pipelines,
                    distributed systems, microservices
                </li>
                <li>
                    AWS (EC2, RDS, Lambda, S3, EBS, ECS), PostgreSQL, DynamoDB,
                    Vector DBs
                </li>
            </ul>
            <b style={{ marginBottom: 5 }}>Leadership & Management</b>
            <ul>
                <li>
                    Team building (0-1 and scale), cross-functional
                    collaboration
                </li>
                <li>
                    Navigating ambiguity in rapidly evolving early-stage
                    environments
                </li>
            </ul>
        </Section>
    );
};

export default SkillsListSection;

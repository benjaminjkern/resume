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
                    Team building (0-1 and scale), cross-functional
                    collaboration, psychological safety
                </li>
                <li>
                    Navigating ambiguity in rapidly evolving early-stage
                    environments
                </li>
            </ul>
            <b style={{ marginBlock: 5 }}>Platform & Enterprise Systems</b>
            <ul>
                <li>
                    Billing systems, OAuth/SSO/RBAC, distributed systems,
                    microservices, REST APIs
                </li>
                <li>Developer tooling and internal platforms</li>
            </ul>
            <b style={{ marginBlock: 5 }}>Technical Expertise</b>
            <ul>
                <li>
                    Frontend & Backend: React, Next.js, React Native, Django,
                    Node.js, Express
                </li>
                <li>
                    Cloud & Data: AWS (EC2, RDS, Lambda, S3, EBS, ECS),
                    PostgreSQL, MySQL, NoSQL, DynamoDB, Vector DBs
                </li>
                <li>Languages: TypeScript/JavaScript, Python, C/C++, Java</li>
            </ul>
        </Section>
    );
};

export default SkillsListSection;

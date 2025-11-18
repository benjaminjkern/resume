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
                    Hiring, mentoring, and leading teams through 0-1 as well as
                    1-100 environments
                </li>
                <li>
                    Cross-functional collaboration with product, research, and
                    leadership
                </li>
                <li>
                    Building team psychological safety, ownership and culture
                </li>
                <li>
                    Navigating ambiguity in rapidly evolving early-stage
                    environments
                </li>
            </ul>
            <b style={{ marginBlock: 5 }}>Technical Expertise</b>
            <ul>
                <li>
                    Full-stack: React, Next.js, React Native, Django, Node.js,
                    Express
                </li>
                <li>Distributed systems, microservices, REST APIs, OAuth</li>
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

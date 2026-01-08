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
            <b style={{ marginBlock: 5 }}>Search & Ranking Systems</b>
            <ul>
                <li>
                    Search algorithms, relevance scoring, query understanding,
                    personalized ranking
                </li>
                <li>
                    Semantic search with LLMs, recommendation systems, A/B
                    testing
                </li>
            </ul>
            <b style={{ marginBlock: 5 }}>Platform & Infrastructure</b>
            <ul>
                <li>
                    Distributed systems, microservices, REST APIs, Billing
                    services (Stripe + Plaid), developer tooling
                </li>
            </ul>
            <b style={{ marginBlock: 5 }}>Technical Stack</b>
            <ul>
                <li>React, Next.js, React Native, Django, Node.js, Express</li>
                <li>
                    AWS (EC2, RDS, Lambda, S3, EBS, ECS), PostgreSQL, MySQL,
                    NoSQL, DynamoDB, Vector DBs
                </li>
                <li>TypeScript/JavaScript, Python, C/C++, Java</li>
            </ul>
        </Section>
    );
};

export default SkillsListSection;

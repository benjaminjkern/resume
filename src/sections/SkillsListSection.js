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

const HIDDEN = {
    opacity: 0,
    position: "fixed",
    top: "-100%",
};

const SkillsListSection = () => {
    return (
        <Section title="Skills & Technologies">
            <ul>
                <li>
                    Proficient in multiple programming languages, including but
                    not limited to: <b>JavaScript</b>, <b>Python</b>,{" "}
                    <b>C/C++</b>, and <b>Java</b>.
                </li>
                <li>
                    Extensive experience with web development frameworks such as{" "}
                    <b>React</b>, <b>Svelte</b>, <b>Angular</b>, or{" "}
                    <b>Vue.js</b>.
                </li>
                <li style={HIDDEN}>
                    Experience and strong understanding of Mobile App
                    Development.
                </li>
                <li>
                    Proficient in creating and consuming <b>RESTful APIs</b>
                </li>
                <li>
                    Skilled in database deployment and tradeoffs (
                    <b>PostgreSQL</b>, <b>DynamoDB</b>, <b>MongoDB</b>).
                </li>
                <li>
                    Familiar with cloud computing platforms (e.g., <b>AWS</b>,{" "}
                    <b>Azure</b>, <b>Google Cloud</b>) and their services.
                </li>
                <li style={HIDDEN}>
                    Solid knowledge of version control systems such as{" "}
                    <b>Git</b>, including branching and merging strategies.
                </li>
                <li style={HIDDEN}>
                    Experience in agile development methodologies, including
                    Scrum or Kanban.
                </li>
                <li style={HIDDEN}>
                    Knowledge of software testing principles and frameworks
                    (e.g., JUnit, Selenium, Jest).
                </li>
                <li style={HIDDEN}>
                    Familiar with containerization technologies like Docker and
                    container orchestration platforms like Kubernetes.
                </li>
                <li style={HIDDEN}>
                    Strong problem-solving skills and ability to troubleshoot
                    complex software issues.
                </li>
                <li style={HIDDEN}>
                    Understanding of software security best practices and
                    experience in implementing security measures.
                </li>
                <li style={HIDDEN}>
                    Excellent collaboration and communication skills, both
                    within cross-functional teams and with stakeholders.
                </li>
                <li>
                    Strong understanding of software architecture principles and
                    design patterns.
                </li>
                <li style={HIDDEN}>
                    Continuous learning mindset and ability to quickly adapt to
                    new technologies and frameworks.
                </li>
            </ul>
        </Section>
    );
};

export default SkillsListSection;

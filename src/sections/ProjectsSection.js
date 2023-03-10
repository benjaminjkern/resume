import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ProjectsSection = () => {
    return (
        <Section title="Projects">
            <List>
                <Project
                    title="AI and Machine Learning Explorations"
                    dates="04/2016 - Ongoing"
                    summary="Exploring my passion for something I think is very cool, and testing new ideas I come up with relating to the subject."
                    achievements={[
                        "Implemented a fully functional neural network library from scratch that includes convolutional capabilities, backpropagation, and more",
                        "Programmed games for exploring model optimization within systems that have no direct reward function, most notably in continuous games",
                    ]}
                    href="https://github.com/benjaminjkern/"
                    linkText="On github"
                />
                <Project
                    title="Bazar"
                    dates="11/2020 - Ongoing"
                    summary="Bazar is an all-in-one local-business-centric digital marketplace."
                    achievements={[
                        "Co-Engineered a mobile application-based SaaS business with professional-level implementation and integration with large APIs",
                        "Led a small team of engineers across the stack in order to produce a functional and aesthetically pleasing customer-facing product",
                        "Programmed frontend using React Native and backend with Django REST framework on a AWS Elastic Beanstalk environment talking to a Postgres instance running on AWS RDS",
                    ]}
                    href="https://bazar.earth/about"
                    linkText="bazar.earth"
                />
                <Project
                    title="Crowdventure"
                    dates="12/2019 - Ongoing"
                    summary="Crowdventure is a crowd-sourced web application game."
                    achievements={[
                        "Developed a full stack web application, utilizing ReactJS and Github Pages for frontend deployment",
                        "Utilized a GraphQL backend deployed to a serverless instance using AWS Lambda for backend and an AWS DynamoDB database",
                    ]}
                    href="https://crowdventure.me/"
                    linkText="crowdventure.me"
                />
                <Project
                    title="Cuttlefish"
                    dates="01/2020 - Ongoing"
                    summary="Cuttlefish is a versatile functional programming language."
                    achievements={[
                        "Engineered a language designed to fuse multi-faceted functional programming with object-oriented programming",
                        "Wrote a fully functional novel dynamic parser for the programming language",
                    ]}
                    href="https://benjaminjkern.github.io/cuttlefishlang"
                    linkText="benjaminjkern.github.io/cuttlefishlang"
                />
            </List>
        </Section>
    );
};

const Project = ({ title, dates, summary, achievements, href, linkText }) => {
    return (
        <div>
            <div style={{ flexDirection: "row", alignItems: "center" }}>
                <h3>{title}</h3>
                {href && (
                    <>
                        <span style={{ paddingLeft: 10, paddingRight: 10 }}>
                            -
                        </span>
                        <a href={href} style={{ color: primaryColor }}>
                            {linkText || href}
                        </a>
                    </>
                )}
            </div>
            <DateLocationInfo dates={dates} />
            <span>{summary}</span>
            <ul>
                {achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsSection;

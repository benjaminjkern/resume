import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ProjectsSection = () => {
    return (
        <Section title="Projects">
            <List>
                {/* <Project
                    title="Bazar - The Marketplace that Moves With You."
                    dates="11/2020 - Ongoing"
                    summary="Bazar is an all-in-one local-business-centric digital marketplace."
                    achievements={[
                        "Co-Engineered a mobile application-based SaaS business with professional-level implementation and integration with large APIs. App available in the App Store and Google Play Stores",
                        "Designed and implemented a complex E-commerce API with Sorting, Searching, Filtering, Pagination, and Advanced Recommendations across 10s of thousands of products",
                        "Hired, managed, and trained a small team of engineers across the stack in order to produce a functional and aesthetically pleasing customer-facing product",
                        "Programmed frontend using React Native and backend with Django REST framework on a AWS Elastic Beanstalk environment talking to a Postgres instance running on AWS RDS",
                    ]}
                    href="https://bazar.earth/about"
                    linkText="bazar.earth"
                /> */}
                <Project
                    title="The Cuttlefish Programming Language"
                    dates="01/2020 - Ongoing"
                    summary="Cuttlefish is an incredibly versatile & easy-to-learn programming language."
                    achievements={[
                        "Engineered a language, compiler, and interpreter designed to fuse multi-faceted functional programming with object-oriented programming",
                        "Wrote a fully functional novel dynamic parser for the programming language",
                    ]}
                    href="https://benjaminjkern.github.io/cuttlefishlang"
                    linkText="benjaminjkern.github.io/cuttlefishlang"
                />
                <Project
                    title="Crowdventure"
                    dates="12/2019 - Ongoing"
                    summary="Crowdventure is a crowd-sourced web application game."
                    achievements={[
                        "Full stack web application game, utilizing ReactJS and Github Pages for frontend deployment",
                        "Utilized a GraphQL backend deployed to a serverless instance using AWS Lambda for backend and an AWS DynamoDB database",
                    ]}
                    href="https://crowdventure.me/"
                    linkText="crowdventure.me"
                />
                {/* <Project
                    title="AI and Machine Learning Explorations"
                    dates="04/2016 - Ongoing"
                    summary="Exploring my passion for something I think is very cool, and testing new ideas I come up with relating to the subject."
                    achievements={[
                        "Implemented a fully functional neural network library from scratch that includes convolutional capabilities, backpropagation, and more",
                        "Programmed games for exploring model optimization within systems that have no direct reward function, most notably in continuous games",
                    ]}
                    href="https://github.com/benjaminjkern/"
                    linkText="On github"
                /> */}
            </List>
        </Section>
    );
};

const Project = ({ title, dates, summary, achievements, href, linkText }) => {
    return (
        <div>
            <a
                style={{ flexDirection: "row", alignItems: "center" }}
                href={href}
            >
                <h3>{title}</h3>
                {href && (
                    <>
                        <span style={{ paddingLeft: 10, paddingRight: 10 }}>
                            -
                        </span>
                        <span style={{ color: primaryColor }}>
                            {linkText || href}
                        </span>
                    </>
                )}
            </a>
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

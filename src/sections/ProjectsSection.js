import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ProjectsSection = () => {
    return (
        <Section title="Projects">
            <List>
                <Project
                    title="Cuttlefish Programming Language"
                    dates="01/2020 - Ongoing"
                    summary="Cuttlefish is an incredibly versatile & easy-to-learn programming language."
                    achievements={[
                        "Engineered a language, compiler, and interpreter designed to fuse multi-faceted functional programming with object-oriented programming",
                        "Wrote a fully functional novel dynamic parser for the programming language",
                    ]}
                    href="https://github.com/benjaminjkern/cuttlefishlang"
                    linkText="Check out on Github"
                />
                <Project
                    title="Crowdventure"
                    // dates="12/2019 - Present"
                    summary="Crowdventure is a crowd-sourced web application game."
                    href="https://crowdventure.me/"
                    linkText="crowdventure.me"
                >
                    <li>
                        Crowdventure is a crowd-sourced web application game.
                        Utilized ReactJS and Github Pages for frontend
                        deployment.
                    </li>
                    <li>
                        Utilized a GraphQL backend deployed to a serverless
                        instance using AWS Lambda for backend and an AWS
                        DynamoDB database.
                    </li>
                </Project>
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
            </List>
        </Section>
    );
};

const Project = ({ title, dates, children, href, linkText }) => {
    return (
        <div>
            <a
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
                href={href}
            >
                <h3 style={{ display: "inline" }}>{title}</h3>
                {href && (
                    <>
                        <span style={{ paddingLeft: 10, paddingRight: 10 }}>
                            -
                        </span>
                        <h4 style={{ color: primaryColor, display: "inline" }}>
                            <span
                                style={{ color: "lightgray", fontWeight: 100 }}
                            >
                                https://
                            </span>
                            {linkText || href}
                            <span
                                style={{ color: "lightgray", fontWeight: 100 }}
                            >
                                /
                            </span>
                        </h4>
                    </>
                )}
            </a>
            {dates ? <DateLocationInfo dates={dates} /> : null}

            <ul>{children}</ul>
        </div>
    );
};

export default ProjectsSection;

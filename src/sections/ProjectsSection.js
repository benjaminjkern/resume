import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ProjectsSection = () => {
    return (
        <Section title="Projects" style={{ marginTop: -20 }}>
            <List>
                <Project
                    title="Bazar - The Marketplace that Moves With You."
                    dates="11/2020 - Present"
                    summary="Bazar is an all-in-one local-business-centric digital marketplace."
                    href="https://bazar.earth/download"
                    linkText="bazar.earth"
                >
                    <li>
                        Co-Engineered a mobile application-based SaaS business
                        with professional-level implementation and integration
                        with large APIs. App available in the App Store and
                        Google Play Stores.
                    </li>
                    <li>
                        Designed and implemented a complex E-commerce API with
                        Sorting, Searching, Filtering, Pagination, and Advanced
                        Recommendations across 10s of thousands of products.
                    </li>
                    <li>
                        Hired, managed, and trained a small team of engineers
                        across the stack in order to produce a functional and
                        aesthetically pleasing customer-facing product.
                    </li>
                    <li>
                        Programmed frontend using React Native and backend with
                        Django REST framework on a AWS Elastic Beanstalk
                        environment talking to a Postgres instance running on
                        AWS RDS.
                    </li>
                </Project>
                {/* <Project
                    title="Cuttlefish Programming Language"
                    dates="01/2020 - Ongoing"
                    summary="Cuttlefish is an incredibly versatile & easy-to-learn programming language."
                    achievements={[
                        "Engineered a language, compiler, and interpreter designed to fuse multi-faceted functional programming with object-oriented programming",
                        "Wrote a fully functional novel dynamic parser for the programming language",
                    ]}
                    href="https://github.com/benjaminjkern/cuttlefishlang"
                    linkText="Check out on Github"
                /> */}
                <Project
                    title="Crowdventure"
                    dates="12/2019 - Present"
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
            <DateLocationInfo dates={dates} />

            <ul>{children}</ul>
        </div>
    );
};

export default ProjectsSection;

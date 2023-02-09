import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ProjectsSection = () => {
    return (
        <Section title="Projects">
            <List>
                <Project
                    title="Bazar"
                    dates="11/2020 - Ongoing"
                    summary="Bazar is an all-in-one local-business-centric digital marketplace."
                    achievements={[
                        "Co-Engineered a mobile application-based business for professional implementation",
                        "Authored both frontend and backend code and actively added improvements to ensure a more robust and aesthetically pleasing user experience",
                        "Programmed Frontend using SwiftUI for iPhone, React Native for android, built is Django REST framework on a AWS Elastic Beanstalk environment talking to a AWS Postgres RDS instance",
                    ]}
                />
                <Project
                    title="Crowdventure"
                    dates="12/2019 - Ongoing"
                    summary="Crowdventure is a Crowd-Sourced Web Application Game."
                    achievements={[
                        "Developed a full stack web application, utilizing ReactJS and Github Pages for frontend deployment, and AWS Lambda instance with AWS Cognito for backend and database deployment",
                        "Incorporated Google Ads so that the project is self-sustaining",
                    ]}
                />
                <Project
                    title="Cuttlefish"
                    dates="01/2020 - Ongoing"
                    summary="Cuttlefish is a Versatile Functional Programming Language."
                    achievements={[
                        "Engineered a Functional Language designed to fuse Multi-faceted Programming as well as Object-Oriented Programming",
                        "Developed professional-level production & deployment environments",
                    ]}
                />
            </List>
        </Section>
    );
};

const Project = ({ title, dates, summary, achievements }) => {
    return (
        <div>
            <h3>{title}</h3>
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

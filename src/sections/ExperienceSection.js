import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ExperienceSection = () => {
    return (
        <Section title="Experience">
            <List>
                <Job
                    title="Scientist - Software Development"
                    company="Arete"
                    dates="08/2021 - Present"
                    location="Northridge, CA"
                    achievements={["gabagool"]}
                />
                <Job
                    title="Software Engineer - Software Verification"
                    company="Abbott Laboratories"
                    dates="01/2021 - 08/2021"
                    location="Sylmar, CA"
                    achievements={[
                        "Actively contributed to improving the efficiency and efficacy of software in healthcare machinery",
                        "Performed testing and debugging on patient-facing mobile applications",
                        "Programmed and developed software within large streamlined code repositories and databases",
                    ]}
                />
                <Job
                    title="Physics Tutor"
                    company="Loyola Marymount University"
                    dates="08/2017 - 12/2019"
                    location="Los Angeles, CA"
                    achievements={["Gabagool"]}
                />
            </List>
        </Section>
    );
};

export const Job = ({ title, company, dates, location, achievements = [] }) => {
    return (
        <div>
            <h3>{title}</h3>
            <h4 style={{ color: primaryColor }}>{company}</h4>
            <DateLocationInfo dates={dates} location={location} />
            <ul>
                {achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceSection;

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
                    company="Areté"
                    dates="08/2021 - Present"
                    location="Northridge, CA"
                    achievements={[
                        "Developed software for several projects and products within",
                        "Led",
                        "BoogaBogga",
                        "Shmooga",
                    ]}
                />
                <Job
                    title="Software Engineer - Software Verification"
                    company="Abbott Laboratories"
                    dates="01/2021 - 08/2021"
                    location="Sylmar, CA"
                    achievements={[
                        "Developed software for improving the efficiency and efficacy of healthcare machinery and patient-facing mobile applications",
                        "Collaborated with developers in large streamlined code repositories and databases",
                    ]}
                />
                <Job
                    title="Software Engineer Intern"
                    company="Automated Living"
                    dates="05/2020 - 08/2020"
                    location="Los Angeles, CA"
                    achievements={[
                        "Developed and manufactured streamlined IOT products using Raspberry Pi's, utilizing LoRaWAN as well as 4G Modem technologies",
                        "Spearheaded backend and database implementation for displaying MQTT information",
                    ]}
                />
                <Job
                    title="Physics & Mathematics Tutor"
                    company="LMU College of Science & Engineering"
                    dates="08/2017 - 12/2019"
                    location="Los Angeles, CA"
                    achievements={[
                        "Provided weekly tutoring for upper and lower-division students enrolled in a variety of different Mathematics & Physics courses",
                    ]}
                />
                {/* <Job
                    title="Technical Assistant"
                    company="Pixelgate Networks"
                    dates="05/2015 - 08/2016"
                    location="Los Angeles, CA"
                    achievements={[
                        "Organized company's server facility to optimize process improvement and minimize supply costs",
                        "Built and performed maintenance on servers to establish internet security systems and optimize power supplies",
                        "Worked on technical projects to improve computing performance"
                    ]}
                /> */}
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

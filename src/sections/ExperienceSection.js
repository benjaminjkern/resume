import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ExperienceSection = () => {
    return (
        <Section title="Experience">
            <List>
                <Job
                    title="Software Development Engineer II"
                    company="Areté Associates"
                    dates="08/2021 - Present"
                    location="Northridge, CA"
                    href="https://www.arete.com/"
                >
                    <li>
                        Assumed leadership roles on multiple projects, acting as
                        the primary integrator and the main point of contact,
                        ensuring seamless coordination and efficient project
                        execution.
                    </li>
                    <li>
                        Led a team of 4 professionals in a complete overhaul of
                        an existing product, transitioning from Fortran to
                        C++/Cuda and optimizing for running on GPUs.
                    </li>
                    <li>
                        Successfully presented and pitched projects to clients,
                        securing high-visibility defense contracts and
                        establishing long-term partnerships.
                    </li>
                    <li>
                        Recognized for exceptional initiative and to take charge
                        of a project, consistently delivering high-quality
                        outcomes with minimal supervision.
                    </li>
                </Job>
                <Job
                    title="Software Engineer II - Software Verification"
                    company="Abbott Laboratories"
                    dates="01/2021 - 08/2021"
                    location="Sylmar, CA"
                    href="https://www.abbott.com/"
                >
                    <li>
                        Developed software for improving the efficiency and
                        efficacy of healthcare machinery and patient-facing
                        mobile applications.
                    </li>
                    <li>
                        Collaborated with a distributed team of developers on
                        extremely large streamlined code repositories and
                        databases.
                    </li>
                </Job>
                {/* <Job
                    title="Software Engineer Intern"
                    company="Automated Living"
                    dates="05/2020 - 08/2020"
                    location="Los Angeles, CA"
                    achievements={[
                        "Prototyped IOT products using Raspberry Pi's, utilizing LoRaWAN as well as 4G Modem technologies",
                        "Spearheaded backend and database messaging using MQTT",
                    ]}
                /> */}
                <Job
                    title="Physics & Mathematics Tutor"
                    company="LMU College of Science & Engineering"
                    dates="08/2017 - 12/2019"
                    location="Los Angeles, CA"
                    href="https://cse.lmu.edu/"
                >
                    <li>
                        Provided weekly tutoring for upper and lower-division
                        students enrolled in a variety of different Mathematics
                        & Physics courses.
                    </li>
                    <li>
                        Improved grades of students as well as deepened their
                        understanding of the topics at hand, with several
                        positive testimonies from professors.
                    </li>
                </Job>
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

export const Job = ({ title, company, dates, location, href, children }) => {
    return (
        <div>
            <a href={href}>
                <h3>{title}</h3>
                <h4 style={{ color: primaryColor }}>{company}</h4>
            </a>
            <DateLocationInfo dates={dates} location={location} />
            <ul>{children}</ul>
        </div>
    );
};

export default ExperienceSection;

import { Job } from "./ExperienceSection";
import Section from "../components/Section";

const EducationSection = () => {
    return (
        <Section title="Education">
            <Job
                title="Bachelor of Science - Physics & Computer Science (Dual Degree)"
                company="Loyola Marymount University"
                dates="2016 - 2020"
                location="Los Angeles, CA"
            />
        </Section>
    );
};

export default EducationSection;

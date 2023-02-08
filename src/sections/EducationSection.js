import { Job } from "./ExperienceSection";
import Section from "../components/Section";

const EducationSection = () => {
    return (
        <Section title="Education">
            <Job
                title="Computer Science & Physics"
                company="Loyola Marymount"
                dates="2016 - 2020"
                location="Los Angeles, CA"
            />
        </Section>
    );
};

export default EducationSection;

import Section from "../components/Section";
import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";

const EducationSection = () => {
    return (
        <Section title="Education">
            <Education
                school="Loyola Marymount University"
                degrees={["B.S. Computer Science", "B.S. Physics"]}
                location="Los Angeles, CA"
            />
        </Section>
    );
};

const Education = ({ school, dates, location, degrees, href }) => {
    return (
        <div>
            <a href={href}>
                <h3>{school}</h3>
                {degrees.map((degree, i) => (
                    <h4 key={i} style={{ color: primaryColor }}>
                        {degree}
                    </h4>
                ))}
            </a>
            <DateLocationInfo dates={dates} location={location} />
        </div>
    );
};

export default EducationSection;

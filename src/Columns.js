import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import SkillsListSection from "./sections/SkillsListSection";
import SkillsRatingSection from "./sections/SkillsRatingSection";
import ProjectsSection from "./sections/ProjectsSection";

const Columns = () => {
    return (
        <div style={{ flexDirection: "row" }}>
            <div style={{ flex: 3 }}>
                <ExperienceSection />
                <ProjectsSection />
            </div>
            <div style={{ flex: 2 }}>
                <EducationSection />
                <SkillsRatingSection />
                <SkillsListSection />
                <LinksSection />
            </div>
        </div>
    );
};

export default Columns;

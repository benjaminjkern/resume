import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import SkillsListSection from "./sections/SkillsListSection";
import SkillsRankSection from "./sections/SkillsRankSection";
import ProjectsSection from "./sections/ProjectsSection";

const Columns = () => {
    return (
        <div style={{ flexDirection: "row" }}>
            <div style={{ flex: 2 }}>
                <ExperienceSection />
                <ProjectsSection />
            </div>
            <div style={{ flex: 1 }}>
                <EducationSection />
                <SkillsRankSection />
                <SkillsListSection />
                <LinksSection />
            </div>
        </div>
    );
};

export default Columns;

import TopSection from "./TopSection";

import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import SkillsListSection from "./sections/SkillsListSection";
import ProjectsSection from "./sections/ProjectsSection";

const Resume = () => {
    return (
        <>
            <TopSection />
            <div style={{ margin: 20 }}>
                <div style={{ flexDirection: "row" }}>
                    <div style={{ flex: 3 }}>
                        <ExperienceSection />
                    </div>
                    <div style={{ flex: 2 }}>
                        <EducationSection />
                        {/* <SkillsRatingSection /> */}
                        <SkillsListSection />
                        <LinksSection />
                    </div>
                </div>
                <ProjectsSection />
            </div>
        </>
    );
};

export default Resume;

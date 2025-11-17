import TopSection from "./TopSection";

import EducationSection from "./sections/EducationSection";
import ExperienceSection, {
    ExperienceContinuedSection,
} from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import SkillsListSection from "./sections/SkillsListSection";
import ProjectsSection from "./sections/ProjectsSection";
import SummarySection from "./sections/SummarySection";
import { SECTION_PADDING } from "./constants";
import HiddenSection from "./sections/HiddenSection";

const Resume = () => {
    return (
        <>
            <TopSection />
            <div
                style={{
                    margin: SECTION_PADDING,
                    overflow: "hidden",
                    gap: SECTION_PADDING,
                    height: 1100 - 172.05 - 2 * SECTION_PADDING, // 172.05 = calculated height of top section
                }}
            >
                <div style={{ flexDirection: "row", gap: SECTION_PADDING }}>
                    <div style={{ flex: 3 }}>
                        <ExperienceSection />
                    </div>
                    <div style={{ flex: 2, gap: 10 }}>
                        <SummarySection />
                        <EducationSection />
                        <SkillsListSection />
                        <LinksSection />
                    </div>
                </div>
            </div>

            <div
                style={{
                    margin: SECTION_PADDING,
                    overflow: "hidden",
                    height: 1100 - 2 * SECTION_PADDING,
                }}
            >
                <ExperienceContinuedSection />
                {/* <ProjectsSection /> */}
                <HiddenSection />
            </div>
        </>
    );
};

export default Resume;

import Columns from "./Columns";
import TopSection from "./TopSection";

const Resume = () => {
    return (
        <div
            style={{
                width: 850,
                height: 1100,
                padding: 40,
                outlineStyle: "solid",
                outlineWidth: 1,
                outlineColor: "black",
            }}
        >
            <TopSection />
            <Columns />
        </div>
    );
};

export default Resume;

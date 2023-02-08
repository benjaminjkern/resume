import { primaryColor } from "./colors";

const TopSection = () => {
    return (
        <div
            style={{
                margin: 20,
                marginBottom: 0,
            }}
        >
            <h1>Benjamin Kern</h1>
            <h3 style={{ color: primaryColor }}>Software Engineer</h3>
            <div
                style={{
                    flexDirection: "row",
                    justifyVontent: "space-between",
                    marginBottom: 10,
                }}
            >
                <InfoSection icon="(Phone)">(805) 657-5922</InfoSection>
                <InfoSection icon="@">benkern@pixelgate.net</InfoSection>
                <InfoSection icon="(Pin)">Los Angeles, CA</InfoSection>
            </div>
        </div>
    );
};

const InfoSection = ({ icon, children }) => {
    return (
        <div style={{ flex: 1, flexDirection: "row" }}>
            <span style={{ color: primaryColor, marginRight: 5 }}>{icon}</span>
            <span>{children}</span>
        </div>
    );
};

export default TopSection;

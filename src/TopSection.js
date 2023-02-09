import { primaryColor, secondaryColor } from "./colors";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const TopSection = () => {
    return (
        <div
            style={{
                margin: 20,
                marginBottom: 0,
            }}
        >
            <h1 style={{ fontSize: 45 }}>Benjamin Kern</h1>
            <h3 style={{ color: primaryColor }}>Software Engineer</h3>
            <div
                style={{
                    flexDirection: "row",
                    justifyVontent: "space-between",
                    marginBottom: 10,
                }}
            >
                <InfoSection
                    icon={<BsFillTelephoneFill />}
                    href="tel:(805) 657-5922"
                >
                    (805) 657-5922
                </InfoSection>
                <InfoSection
                    icon={<MdAlternateEmail />}
                    href="mailto:benkern@pixelgate.net?subject=You seem like the perfect fit!"
                >
                    benkern@pixelgate.net
                </InfoSection>
                <InfoSection icon={<IoLocationSharp />}>
                    Los Angeles, CA
                </InfoSection>
            </div>
        </div>
    );
};

const InfoSection = ({ icon, children, href }) => {
    return (
        <a
            href={href}
            style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                color: secondaryColor,
            }}
        >
            <span style={{ color: primaryColor, marginRight: 5 }}>{icon}</span>
            <span>{children}</span>
        </a>
    );
};

export default TopSection;

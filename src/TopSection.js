import { lightColor, primaryColor } from "./colors";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const TopSection = () => {
    return (
        <div
            style={{
                padding: 40,
                backgroundColor: primaryColor,
            }}
        >
            <h1 style={{ fontSize: 45, marginBottom: 10, color: "white" }}>
                Benjamin Kern
            </h1>
            {/* <h4 style={{ color: primaryColor, marginBottom: 5 }}>
                Well-Rounded Full Stack Software Engineer
            </h4> */}
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
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                color: "lightgray",
                marginTop: 2,
            }}
        >
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: lightColor,
                    marginRight: 5,
                }}
            >
                {icon}
            </span>
            <span>{children}</span>
        </a>
    );
};

export default TopSection;

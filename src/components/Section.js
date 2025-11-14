import { textColor } from "../colors";

const Section = ({ title, children }) => {
    return (
        <div>
            <h2
                style={{
                    borderBottomStyle: "solid",
                    borderBottomWidth: 3,
                    borderBottomColor: textColor,
                    marginBottom: 10,
                }}
            >
                {title}
            </h2>
            {children}
        </div>
    );
};

export default Section;

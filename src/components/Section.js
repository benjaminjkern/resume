import { textColor } from "../colors";

const Section = ({ title, children }) => {
    return (
        <div style={{ margin: 20 }}>
            <h1
                style={{
                    borderBottomStyle: "solid",
                    borderBottomWidth: 3,
                    borderBottomColor: textColor,
                    marginBottom: 10,
                }}
            >
                {title}
            </h1>
            {children}
        </div>
    );
};

export default Section;

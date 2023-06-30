import { textColor } from "../colors";

const Section = ({ title, children, style }) => {
    return (
        <div style={{ margin: 7, ...style }}>
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

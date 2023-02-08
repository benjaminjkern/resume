const DateLocationInfo = ({ dates, location }) => {
    return (
        <div style={{ flexDirection: "row" }}>
            <span>{dates}</span>
            <span>{location}</span>
        </div>
    );
};

export default DateLocationInfo;

import { BsFillCalendarWeekFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { secondaryColor } from "../colors";

const DateLocationInfo = ({ dates, location }) => {
    return (
        <div
            style={{
                flexDirection: "row",
                color: secondaryColor,
                marginTop: 2,
                marginBottom: 2,
            }}
        >
            <span
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: 15,
                }}
            >
                <BsFillCalendarWeekFill style={{ marginRight: 5 }} />
                {dates}
            </span>
            {location && (
                <span style={{ display: "flex", flexDirection: "row" }}>
                    <IoLocationSharp style={{ marginRight: 3 }} />
                    {location}
                </span>
            )}
        </div>
    );
};

export default DateLocationInfo;

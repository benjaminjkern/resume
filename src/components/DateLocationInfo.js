import { BsFillCalendarWeekFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { secondaryColor } from "../colors";

const DateLocationInfo = ({ dates, location }) => {
    return (
        <div style={{ flexDirection: "row", color: secondaryColor }}>
            <span style={{ flexDirection: "row", marginRight: 15 }}>
                <BsFillCalendarWeekFill style={{ marginRight: 5 }} />
                {dates}
            </span>
            {location && (
                <span style={{ flexDirection: "row" }}>
                    <IoLocationSharp />
                    {location}
                </span>
            )}
        </div>
    );
};

export default DateLocationInfo;

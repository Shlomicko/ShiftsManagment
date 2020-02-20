import React from "react";
import TimePeriodButtonsWrapper from "../buttons/time-period-buttons";
import "./header.scss";

class Header extends React.Component {

    render() {
        return (
            <div className="header" >
                <TimePeriodButtonsWrapper></TimePeriodButtonsWrapper>
            </div>
        );
    }
}

export default Header;
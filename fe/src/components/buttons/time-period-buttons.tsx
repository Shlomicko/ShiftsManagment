import React from "react";
import Button from "../buttons/Button";
import IPeriod from "../interfaces/IPeriod";
import './button-wrapper.scss'
import Periods from "../../dal/Periods";



export const TimePeriodButtonsWrapper: React.FC = () => {

    return (
        <div className="time-period-buttons-wrapper">
            {
                Periods.map((element: IPeriod) => {
                        const enabled = element.id !== 2;
                        return (
                            <Button label={element.value} enabled={enabled} key={element.id}>

                            </Button>
                        )
                    }
                )

            }
        </div>
    )
}
export default TimePeriodButtonsWrapper;
import React from 'react'
import { ScheduleCellMenu } from './ScheduleCellMenu'

export const ScheduleCell: React.FC = (props: any) => {
    return(
        <div>
            <div className="tootip"></div>
            <ScheduleCellMenu></ScheduleCellMenu>
        </div>
    )
}
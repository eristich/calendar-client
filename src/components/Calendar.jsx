import { useEffect, useState } from 'react';
import calendar from 'calendar-pkg';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [calendarList, setCalendarList] = useState([]);
    const handlePrevMonth = () => {
        setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    useEffect(() => {
        setCalendarList(calendar(date.getFullYear(), date.getMonth() + 1));
    }, [date]);

    return (
        <div className="calendar" style={{width: '300px'}}>
            <div className="header" style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <button onClick={handlePrevMonth}>Prev</button>
                <h4>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h4>
                <button onClick={handleNextMonth}>Next</button>
            </div>
            <div className="days" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className="day">Sun</div>
                <div className="day">Mon</div>
                <div className="day">Tue</div>
                <div className="day">Wed</div>
                <div className="day">Thu</div>
                <div className="day">Fri</div>
                <div className="day">Sat</div>
            </div>
            {calendarList.map((e, _idx) => {
                return (
                    <div key={_idx} className="week" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    { e.map((day, _dayIdx) => {
                        return <div key={_dayIdx} className="day" style={{ color: day.target ? 'white' : 'grey' }} >{day.dayNum}</div>
                    }) }
                    </div>
                )
            })}
        </div>
    );
};

export default Calendar;
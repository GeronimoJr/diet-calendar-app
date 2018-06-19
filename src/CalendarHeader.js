import React from 'react';
import './css/CalendarHeader.css';

const CalendarHeader = ({ weekId, nextWeek, prevWeek, nextDay, prevDay, progressControl }) => (
    <div className="calendarHeader">
        <div className="calendarHeader__progressPanel"> {/* A panel of progress bar. */}
            <p className="calendarHeader__progressTitle">Your 12 week progress</p>
            <ul className="calendarHeader__weekList">
                <li className={`calendarHeader__weekList-${progressControl.weeks[0].status}`}>1</li>
                <li className={`calendarHeader__weekList-${progressControl.weeks[1].status}`}>2</li>
                <li className={`calendarHeader__weekList-${progressControl.weeks[2].status}`}>3</li>
                <li className={`calendarHeader__weekList-${progressControl.weeks[3].status}`}>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
            </ul>
        </div>
        <div className="calendarHeader__Slider"> {/* A slider to switch the weeks. */}
            <button onClick={prevWeek} className="calendarHeader__button calendarHeader__button--prev"></button>
                <p className="calendarHeader__Title">Week {weekId}</p>
            <button onClick={nextWeek} className="calendarHeader__button calendarHeader__button--next"></button>
        </div>
        <div className="calendarHeader__proteinOptions"> {/* A panel of protein options. */}
            <p>Select your protein options</p>
        </div>
        <div className="calendarHeader__Slider calendar__Slider--display"> {/* A slider to switch the visible days - mobile. */}
            <button onClick={prevDay} className="calendarHeader__button calendarHeader__button--prev"></button>
                <p className="calendarHeader__Title">Day</p>
            <button onClick={nextDay} className="calendarHeader__button calendarHeader__button--next"></button>
        </div>
    </div>
)

export default CalendarHeader;
import React from 'react';
import CalendarHeader from './CalendarHeader';
import Day from './Day';
import './css/MealPlan.css';

const MealPlan = ({ plan, nextWeek, prevWeek, nextDay, prevDay, progressControl }) => (
    <section className="mealPlan">
        <div className="container mealPlan__container">
            <CalendarHeader progressControl={progressControl} nextWeek={nextWeek} prevWeek={prevWeek} nextDay={nextDay} prevDay={prevDay} weekId={plan.id} /> {/* A header of the calendar. */}
            <div className="calendar"> {/* A static part of the calendar. */}
                <div className="calendar__leftPanel">
                    <div className="calendar__hour calendar__hour--marginTop">
                        <p>6:00 <span>am</span></p>
                    </div>
                    <div className="calendar__hour">
                        <p>9:00 <span>am</span></p>
                    </div>
                    <div className="calendar__hour">
                        <p>12:00 <span>am</span></p>
                    </div>
                    <div className="calendar__hour">
                        <p>3:00 <span>pm</span></p>
                    </div>
                    <div className="calendar__hour calendar__hour--marginBottom">
                        <p>6:00 <span>pm</span></p>
                    </div>
                    <div className="calendar__activity">
                        <p>Workout</p>
                    </div>
                </div>
                <div className="calendar__content"> {/* A days of the week. */}
                    {plan.days.map(day => <Day key={day.id} currentDay={day.current} dayActive={day.active} carb={day.carb} dayId={day.id} workDay={day.workDay} freeDayInfo={day.freeDayInfo} meals={day.meals} />)}
                </div>
            </div>
        </div>
    </section>
)

export default MealPlan;
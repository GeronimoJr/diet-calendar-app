import React from 'react';
import './css/Day.css';

const Day = ({ dayId, dayActive, meals, carb, workDay, freeDayInfo, currentDay }) => {

    if (workDay) { /* Render every active day. */
        return (
            <div className={`day day--current-${currentDay} dayActive-${dayActive}`}> {/* A class to switch the visible day - mobile. */}
                <div className="day__header"> {/* A header of the day. */}
                    <p className="day__title">Day {dayId}</p>
                </div>
                {meals.map(meal => { 
                    if (meal.active) { /* Render every active meal of the day. */
                        return (
                            <div className="day__meal" key={meal.id}> 
                                <p className="day__mealName">{meal.name}</p>
                                <img alt="a meal" src={meal.pictureSrc} className={`day__mealPicture-${meal.picture}`} />
                            </div>      
                        )
                    } else { /* Render every inactive meal of the day. */
                        return ( 
                            <div className="day__meal day__meal--off" key={meal.id}>
                            </div>
                        )
                    }
                })}
                <div className="day__footer"> {/* A footer with information on carbohydrates and activity. */}
                    <div className="day__carb">
                        <p className="day__carbName">{carb}</p>
                    </div>
                    <div className="day__gym">
                        <p>gym</p>
                    </div>
                </div>
            </div>
        )
    } else { /* Render every inactive day. */
        return (
            <div className={`day dayActive-${dayActive}`}> {/* A class to switch the visible day - mobile. */}
                <div className="day__header"> {/* A header of the day. */}
                    <p className="day__title">Day {dayId}</p>
                </div>
                <div className="day__freeDayInfo"> {/* A information about a free day. */}
                    <div className="day__freeDayInfo--transform">
                        <p className="day__freeDayText">{freeDayInfo}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Day;
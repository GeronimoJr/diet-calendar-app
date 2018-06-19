import React, { Component } from 'react';
import './css/App.css';
import UsersData from './UsersData';
import MealPlansData from './MealPlansData';
import Header from './Header';
import MealPlan from './MealPlan';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      UsersData,
      MealPlansData,
      currentUser: 0,
      currentMealPlan: 0,
      currentWeek: 3
    }
  }
  nextWeek = () => {
    let copyState = Object.assign({}, this.state.MealPlansData);
    let weekList = copyState.mealPlans[this.state.currentMealPlan].weeks;
    const activeWeek = weekList.map(week => { return week.status }).indexOf("active");
    console.log(activeWeek);
    if (activeWeek !== 3) {
      weekList[activeWeek].status = "done";
      weekList[activeWeek +1].status = "active";
      this.setState({
        MealPlansData: copyState,
        currentWeek: activeWeek +1
      });
    }
  }
  prevWeek = () => {
    let copyState = Object.assign({}, this.state.MealPlansData);
    let weekList = copyState.mealPlans[this.state.currentMealPlan].weeks;
    const activeWeek = weekList.map(week => { return week.status }).indexOf("active");
    if (activeWeek !== 0) {
      weekList[activeWeek].status = "future";
      weekList[activeWeek -1].status = "active";
      this.setState({
        MealPlansData: copyState,
        currentWeek: activeWeek -1
      });
    }
  }
  nextDay = () => {
    let copyState = Object.assign({}, this.state.MealPlansData);
    let dayList = copyState.mealPlans[this.state.currentMealPlan].weeks[this.state.currentWeek].days;
    const activeDay = dayList.map(day => { return day.active }).indexOf(true);
    if (dayList.length > 0) {
      if (activeDay !== 6) {
        dayList[activeDay].active = false;
        dayList[activeDay +1].active = true;
        this.setState({
          MealPlansData: copyState
        });
      } else {
        dayList[activeDay].active = false;
        dayList[0].active = true;
        this.setState({
          MealPlansData: copyState
        });
      }
    }
  }
  prevDay = () => {
    let copyState = Object.assign({}, this.state.MealPlansData);
    let dayList = copyState.mealPlans[this.state.currentMealPlan].weeks[this.state.currentWeek].days;
    const activeDay = dayList.map(day => { return day.active }).indexOf(true);
    if (dayList.length > 0) {
      if (activeDay !== 0) {
        dayList[activeDay].active = false;
        dayList[activeDay -1].active = true;
        this.setState({
          MealPlansData: copyState
        });
      } else {
        dayList[activeDay].active = false;
        dayList[6].active = true;
        this.setState({
          MealPlansData: copyState
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.UsersData.users[this.state.currentUser]} />
        <MealPlan progressControl={this.state.MealPlansData.mealPlans[this.state.currentMealPlan]} nextWeek={this.nextWeek} prevWeek={this.prevWeek} nextDay={this.nextDay} prevDay={this.prevDay} plan={this.state.MealPlansData.mealPlans[this.state.currentMealPlan].weeks[this.state.currentWeek]} />
        <Footer />
      </div>
    );
  }
}

export default App;
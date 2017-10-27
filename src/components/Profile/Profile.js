import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import homeLogo from './../../img/home.png';
import searchLogo from './../../img/search.png';
//import axios from 'axios';


class Profile extends Component {
    constructor(){
        super();

        this.jsxDaysCreator = this.jsxDaysCreator.bind(this);
        this.jsxYearsCreator = this.jsxYearsCreator.bind(this);
        this.sendUpdate = this.sendUpdate.bind(this);
    }


    jsxDaysCreator(){
        let arr = [];
        for(let i=1; i<32; i++){
            arr.push(<option>{i}</option>)
        }
        return arr;
    }

    jsxYearsCreator(){
        let arr = [];
        for(let i=2017; i>1916; i--){
            arr.push(<option>{i}</option>)
        }
        return arr;
    }

    sendUpdate(){
        let tempUser = {
            first_name: this.refs.firstName.value,
            last_name: this.refs.lastName.value,
            gender: this.refs.gender.value,
            hair_color: this.refs.hairColor.value,
            eye_color: this.refs.eyeColor.value,
            hobbies: this.refs.hobby.value,
            birthday_day: this.refs.birthdayDay.value,
            birthday_month: this.refs.birthdayMonth.value,
            birthday_year: this.refs.birthdayYear.value
        }
        console.log(tempUser)
    }

    render(){
        const user = this.props.user;
        let jsxDays = this.jsxDaysCreator();
        let jsxYears = this.jsxYearsCreator();
        return (
            <div className='profile'>
                <nav className='profile-navbar'>
                    <div className='profile-nav-logos'>
                        <h1>Helo</h1>
                        <img src={homeLogo} alt="Home"/>
                        <img src={searchLogo} alt="Search"/>
                    </div>
                    <h2>Profile</h2>
                    <h2>Logout</h2>   
                </nav>
                <div className='profile-container'>
                    <div className='profile-name'>
                        <div className='profile-name-left'>
                            <img src={`https://robohash.org/${user.firstName}`} alt="profile" className='profile-img'/>
                            <div>
                                <h1>{user.firstName}</h1>
                                <h1>{user.lastName}</h1>
                            </div>
                        </div>
                        <div className='profile-name-right'>
                            <button className='update-button' onClick={this.sendUpdate}>Update</button>
                            <button className='cancel-button'>Cancel</button>
                        </div>
                    </div>
                    <div className='profile-data'>
                        <div className='profile-data-left'>
                            <p className='profile-p'>First Name</p>
                            <input ref='firstName'/>
                            <p>Last Name</p>
                            <input ref='lastName'/>
                            <p>Gender</p>
                            <select ref='gender'>
                                <option disabled selected>-- Select --</option>
                                <option >Male</option>
                                <option >Female</option>
                            </select>
                            <p>Hair Color</p>
                            <select ref='hairColor'>
                                <option disabled selected>-- Select --</option>
                                <option>Brown</option>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Red</option>
                                <option>Blonde</option>
                                <option>White</option>
                            </select>
                            <p>Eye Color</p>
                            <select ref='eyeColor'>
                                <option disabled selected>-- Select --</option>
                                <option>Brown</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                        </div>
                        <div className='profile-data-right'>
                            <p>Hobby</p>
                            <select ref='hobby'>
                                <option disabled selected>-- Select --</option>
                                <option>Video Games</option>
                                <option>Hiking</option>
                                <option>Fishing</option>
                                <option>Rafting</option>
                            </select>
                            <p>Birthday Day</p>
                            <select ref='birthdayDay'>
                                <option disabled selected>-- Select --</option>
                                {jsxDays}
                            </select>
                            <p>Birthday Month</p>
                            <select ref='birthdayMonth'>
                                <option disabled selected>-- Select --</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            <p>Birthday Year</p>
                            <select  ref='birthdayYear'>
                                <option disabled selected>-- Select --</option>
                                {jsxYears}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(Profile);
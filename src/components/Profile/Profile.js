import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import homeLogo from './../../img/home.png';
import searchLogo from './../../img/search.png';



class Profile extends Component {
    constructor(){
        super();

        this.jsxDaysCreator = this.jsxDaysCreator.bind(this);
        this.jsxYearsCreator = this.jsxYearsCreator.bind(this);
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
                            <img src={`https://robohash.org/${user.firstName}`} alt="profile picture" className='profile-img'/>
                            <div>
                                <h1>{user.firstName}</h1>
                                <h1>{user.lastName}</h1>
                            </div>
                        </div>
                        <div className='profile-name-right'>
                            <button className='update-button'>Update</button>
                            <button className='cancel-button'>Cancel</button>
                        </div>
                    </div>
                    <div className='profile-data'>
                        <div className='profile-data-left'>
                            <p className='profile-p'>First Name</p>
                            <input type="text"/>
                            <p>Last Name</p>
                            <input type="text"/>
                            <p>Gender</p>
                            <select>
                                <option disabled selected>-- Select --</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                            <p>Hair Color</p>
                            <select>
                                <option disabled selected>-- Select --</option>
                                <option value="">Brown</option>
                                <option value="">Blue</option>
                                <option value="">Green</option>
                                <option value="">Red</option>
                                <option value="">Blonde</option>
                                <option value="">White</option>
                            </select>
                            <p>Eye Color</p>
                            <select>
                                <option disabled selected>-- Select --</option>
                                <option value="">Brown</option>
                                <option value="">Blue</option>
                                <option value="">Green</option>
                            </select>
                        </div>
                        <div className='profile-data-right'>
                            <p>Hobby</p>
                            <select>
                                <option disabled selected>-- Select --</option>
                                <option value="">Video Games</option>
                                <option value="">Hiking</option>
                                <option value="">Fishing</option>
                                <option value="">Rafting</option>
                            </select>
                            <p>Birthday Day</p>
                            <select>
                                <option disabled selected>-- Select --</option>
                                {jsxDays}
                            </select>
                            <p>Birthday Month</p>
                            <select>
                                <option disabled selected>-- Select --</option>
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">July</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="">December</option>
                            </select>
                            <p>Birthday Year</p>
                            <select>
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
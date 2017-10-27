import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import homeLogo from './../../img/home.png';
import searchLogo from './../../img/search.png';

class Dashboard extends Component {
    render(){
        const user = this.props.user;
        return (
            <div className='dashboard'> 
                <nav className='dashboard-navbar'>
                    <div className='dashboard-nav-logos'>
                        <h1>Helo</h1>
                        <img src={homeLogo} alt="Home"/>
                        <img src={searchLogo} alt="Search"/>
                    </div>
                    <h2>Dashboard</h2>
                    <h2>Logout</h2>   
                </nav>

                <div className='dashboard-container'>
                    <div className='dashboard-name'>
                        <div className='dashboard-name-left'>
                            <img src={`https://robohash.org/${user.firstName}`} alt="profile" className='profile-img'/>
                            <div>
                                <h1>{user.firstName}</h1>
                                <h1>{user.lastName}</h1>
                                <button>Edit Profile</button>
                            </div>
                        </div>
                        <div className='dashboard-name-right'>
                            <p>
                            Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!
                            </p>
                        </div>
                    </div>
                    <div className='rec-friends-container'>
                        <div className='rec-friends-head'>
                            <h2>Recommended friends</h2>
                            <div>
                                <p>Sorted by: </p>
                            </div>
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

export default connect(mapStateToProps, {})(Dashboard);
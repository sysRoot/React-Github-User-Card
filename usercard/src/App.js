import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';
import {Route} from 'react-router-dom'
import FollowerApp from './FollowerApp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            followers: null
        };
    }

  

    componentDidMount() {
        Axios.get('https://api.github.com/users/sysRoot')
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(err => console.log(err));
        Axios.get('https://api.github.com/users/sysRoot/followers')
            .then(res => {
                this.setState({ followers: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='App'>
                <Route exact path='/' render={() => <UserCard user={this.state.user} /> } />
                <Route exact path='/' render={() => <FollowerList followers={this.state.followers} /> } />
                <Route exact path='/follower/:id' component={FollowerApp} />
            </div>
        );
    }
}

export default App;

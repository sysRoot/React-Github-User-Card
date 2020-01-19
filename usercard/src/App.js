import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';

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
                <UserCard user={this.state.user} />
                <FollowerList followers={this.state.followers} />
            </div>
        );
    }
}

export default App;

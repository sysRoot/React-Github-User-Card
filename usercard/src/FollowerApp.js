import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import SubUserCard from './components/SubUserCard';
import SubFollowerList from './components/SubFollowerList';
import { withRouter } from 'react-router-dom';

class FollowerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            followers: null
        };
        this.id = this.props.match.params.id
    }

    componentDidMount() {
        console.log('jc: FollowerApp.js: Follower App:', this.props)
        Axios.get(`https://api.github.com/users/${this.id}`)
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(err => console.log(err));
        Axios.get(`https://api.github.com/users/${this.id}/followers`)
            .then(res => {
                this.setState({ followers: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='App'>
                <SubUserCard user={this.state.user} />
                <SubFollowerList followers={this.state.followers} />
            </div>
        );
    }
}

export default withRouter(FollowerApp);
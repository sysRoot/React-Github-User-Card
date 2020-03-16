import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import SubUserCard from './components/SubUserCard';
import SubFollowerList from './components/SubFollowerList';
import { withRouter, matchPath } from 'react-router-dom';

class FollowerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            followers: null
        };
        this.id = this.props.match.params.id;
    }

    getParams = pathname => {
        const matchUsercard = matchPath(pathname, {
            path: `/follower/:id`,
        });
        return (matchUsercard && matchUsercard.params) || {};
    };
    componentDidMount() {
        console.log('jc: FollowerApp.js: Follower App:', this.props);
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

    componentDidUpdate(prevProps, prevState) {
        const { pathname } = this.props.location;
        const { pathname: prevPathname } = prevProps.location;

        const currentParams = this.getParams(pathname);
        const prevParams = this.getParams(prevPathname);
        console.log("CUR", currentParams, 'PREV', prevParams );
        if (currentParams.id && currentParams.id !== prevParams.id) {
            console.log('jc: FollowerApp.js: Follower App: ReRender:', this.props);

            Axios.get(`https://api.github.com/users/${currentParams.id}`)
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(err => console.log(err));
        Axios.get(`https://api.github.com/users/${currentParams.id}/followers`)
            .then(res => {
                this.setState({ followers: res.data });
            })
            .catch(err => console.log(err));
        }
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

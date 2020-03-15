import React from 'react';
import Follower from './Follower';
import { FollowersLoader } from './Loaders';
import { Card } from 'semantic-ui-react';

const FollowerList = ({ followers }) => {
    return (
        <>
            <Card.Group className='followers-center'>
                {followers === null ? (
                    <Card color='teal'>
                        <FollowersLoader />
                    </Card>
                ) : (
                    followers.map(follower => <Follower follower={follower} key={follower.node_id}/>)
                )}
            </Card.Group>
        </>
    );
};

export default FollowerList;

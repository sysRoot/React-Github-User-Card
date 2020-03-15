import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Follower = ({ follower }) => {
    return (
        <>
            <Card color='teal'>
                <Card.Content>
                    <Image
                        floated='left'
                        size='mini'
                        src={follower.avatar_url}
                    />
                    <Link to={`/follower/${follower.login}`}><Card.Header>{follower.login}</Card.Header></Link>
                    <Card.Description>
                        <a href={follower.html_url}>{follower.html_url}</a>
                    </Card.Description>
                </Card.Content>
            </Card>
        </>
    );
};

export default Follower;

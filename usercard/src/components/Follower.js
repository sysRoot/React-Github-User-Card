import React from 'react';
import { Card, Image } from 'semantic-ui-react'

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
                    <Card.Header>{follower.login}</Card.Header>
                    <Card.Description>
                        <a href={follower.html_url}>{follower.html_url}</a>
                    </Card.Description>
                </Card.Content>
            </Card>
        </>
    );
};

export default Follower;

import React from 'react';
import Moment from 'react-moment';
import { Card, Icon, Image, Divider } from 'semantic-ui-react';
import { UserCardLoader } from './Loaders';

const UserCard = ({ user }) => {
    return (
        <>
            {/* {user === null ? (
                <p>loading</p>
            ) : ( */}
            <Card fluid color='teal' className='pull-left'>
                {user === null ? (
                    <UserCardLoader/>
                ) : (
                    <>
                        <Card.Content>
                            <Card.Header>{user.name}</Card.Header>
                            <Divider />
                            <Image
                                floated='right'
                                size='mini'
                                src={user.avatar_url}
                            />
                            <Card.Meta>
                                <span className='date'>
                                    GitHub Handle: {user.login}
                                    <br />
                                    Created:{' '}
                                    <Moment format='LL'>
                                        {user.created_at}
                                    </Moment>
                                    <br />
                                    Repository count:{' '}
                                    <a href='https://api.github.com/users/sysRoot/repos'>
                                        {user.public_repos}
                                    </a>
                                    <br />
                                    Github:{' '}
                                    <a href={user.html_url}>{user.html_url}</a>
                                    <br />
                                    Portfolio:{' '}
                                    <a href={user.blog}>{user.blog}</a>
                                </span>
                            </Card.Meta>
                            <Card.Description floated='left'>
                                {user.bio}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='user' />
                            {user.followers} Followers <Icon name='heart' />
                            {user.following} Following
                        </Card.Content>
                    </>
                )}
            </Card>
            {/* )} */}
        </>
    );
};

export default UserCard;

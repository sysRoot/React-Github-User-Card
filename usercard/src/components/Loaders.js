import React from 'react';
import ContentLoader from 'react-content-loader';

export const UserCardLoader = () => (
    <ContentLoader
        height={160}
        width={640}
        speed={3}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
    >
        <rect x='0' y='10' rx='4' ry='4' width='220' height='6' />
        <rect x='0' y='30' rx='3' ry='3' width='185' height='6' />
        <rect x='0' y='80' rx='3' ry='3' width='350' height='6' />
        <rect x='0' y='100' rx='3' ry='3' width='480' height='6' />
        <rect x='0' y='120' rx='3' ry='3' width='350' height='6' />
        <rect x='0' y='140' rx='3' ry='3' width='350' height='6' />
        <rect x='0' y='160' rx='3' ry='3' width='480' height='6' />
        <rect x='0' y='180' rx='3' ry='3' width='350' height='6' />
        <rect x='580' y='20' rx='0' ry='0' width='35' height='35' />
    </ContentLoader>
);

export const FollowersLoader = () => (
    <ContentLoader
        height={65}
        width={235}
        speed={3}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
    >
        <rect x='100' y='15' rx='3' ry='3' width='125' height='6' />
        <rect x='100' y='35' rx='3' ry='3' width='125' height='6' />
        <rect x='0' y='55' rx='3' ry='3' width='225' height='6' />
        <rect x='25' y='10' rx='0' ry='0' width='35' height='35' />
    </ContentLoader>
);

import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;

export const Shell = () => (
    <>
        <Container>
            <Skeleton variant="text" width={350} height={65} style={{marginRight: '10px'}}/>
            <Skeleton variant="circle" width={50} height={50}/>
        </Container>
            <Skeleton variant="text" width={500} height={65}/>
            <Skeleton variant="text" width={500} height={65}/>
            <Skeleton variant="text" width={500} height={65}/>
            <Skeleton variant="rect" width={500} height={350} style={{marginTop: '10px'}}/>
    </>
);
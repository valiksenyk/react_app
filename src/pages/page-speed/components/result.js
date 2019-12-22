import React from 'react';
import styled from "styled-components";

import {Typography} from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const Container = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
`;

const Img = styled.img`
    width: 500px;
    height: auto;
`;

const ResultBlock = styled.div`
    display: flex;
    align-items: center;
`;

const StyledText = styled(Typography)`
    margin: 7px 0 !important;
    background: #e8e8e878;
    padding: 10px;
`;

const getResultIcon = result => {
    switch (result) {
        case 'AVERAGE':
            return <CheckCircleIcon fontSize='large' style={{color: '#ccc'}}/>;
        case 'FAST':
            return <CheckCircleIcon fontSize='large' style={{color: '#3ca23b'}}/>;
        case 'SLOW':
            return <CancelIcon fontSize='large' style={{color: '#b53f3f'}}/>;
        case 'NONE':
            return <CancelIcon fontSize='large' style={{color: '#ccc'}}/>;
        default:
            return <CancelIcon fontSize='large' style={{color: '#ccc'}}/>
    }
};

export const Result = props => {
    const {origin, generalResult, domSize, timeToFirstPaint, screenShot} = props;

    return (
        <Container>
            <ResultBlock>
                <StyledText>Result: {generalResult}</StyledText>
                {
                    getResultIcon(generalResult)
                }
            </ResultBlock>
            <StyledText>{origin}</StyledText>
            <StyledText>{timeToFirstPaint.title}: {timeToFirstPaint.value}</StyledText>
            <StyledText>{domSize.title}: {domSize.value}</StyledText>
            <Img src={screenShot}/>
        </Container>
    )
};
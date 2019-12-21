import React from 'react';
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'
import {Typography} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: 300px;
    height: auto;
`;

const Result = styled.div`
    display: flex;
`;

export const Performance = props => {
    const {origin, generalResult, domSize, timeToFirstPaint, screenShot} = props;

    return (
        <Container>
            <Typography>{origin}</Typography>
            <Typography>{timeToFirstPaint.title}: {timeToFirstPaint.value}</Typography>
            <Typography>{domSize.title}: {domSize.value}</Typography>
            <Img src={screenShot}/>
            <Result><Typography>Result: {generalResult}</Typography></Result>
        </Container>

    )
};
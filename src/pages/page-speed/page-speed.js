import React from 'react';
import {connect} from 'react-redux';
import {pageSpeed} from '../../actions';
import styled from "styled-components";
import validator from 'validator'

//Material
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import {Typography} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
import {PageSpeedSkeleton} from "../../components";
import {Performance} from './components/performance';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormContainer = styled.div`
    max-width: 650px;
    position: relative;
`;

const StyledButton = styled(Button)`
    position: absolute !important;
    right: 20px;
    bottom: 38px;
`;

class PageSpeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            valid: false,
            submitted: false
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            valid: this.validate(value)
        });
        this.setState({[name]: value});
    };

    handleSubmit = () => {
        const {url, valid} = this.state;
        this.setState({
            submitted: true
        });
        if (valid) {
            this.props.getPageSpeed(url);
        }
    };

    validate = (value) => {
        return validator.isURL(value);
    };

    render() {
        const {url, submitted, valid} = this.state;
        const {loading} = this.props.pageSpeed;
        console.log(this.props);
        return (
            <StyledContainer>
                <FormContainer>
                    <Typography align="center" variant="body1" gutterBottom>
                        Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list
                        of
                        suggestions to make that page faster, and other information.
                    </Typography>

                    <TextField type="text"
                               name="url"
                               label="Site URL"
                               fullWidth
                               margin="normal"
                               variant="outlined"
                               value={url}
                               inputProps={{
                                   style: {paddingRight: '130px'}
                               }}
                               onChange={this.handleChange}
                               error={submitted && !valid}
                               helperText={submitted && !valid ? 'Please, input valid URL' : ' '}/>
                    <StyledButton color="primary" variant="contained" onClick={this.handleSubmit}>Test Site</StyledButton>
                </FormContainer>
                {
                    loading ?
                        <PageSpeedSkeleton/>
                        : submitted && <Performance {...this.props.pageSpeed}/>
                }
            </StyledContainer>
        )
    }
}

function mapState(state) {
    const {pageSpeed} = state;
    return {pageSpeed};
}

const actionCreators = {
    getPageSpeed: pageSpeed.getPageSpeed,
};

const connectedPageSpeed = connect(mapState, actionCreators)(PageSpeed);
export {connectedPageSpeed as PageSpeed};
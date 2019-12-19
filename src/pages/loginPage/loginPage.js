import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import styled from "styled-components";

//Material
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import {Typography} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledContainer = styled(Container)`
    position: relative;
    margin-top: 200px;
    background: #cccccc36;
    padding: 40px;
    border-radius: 10px;
`;

const StyledLink = styled(Link)`
    position: absolute;
    bottom: 15px;
    right: 25px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    RegisterLink = React.forwardRef(((props, ref) => (
        <RouterLink innerRef={ref} to="/register" {...props} />
    )));

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    };

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <StyledContainer maxWidth="xs">
                <CssBaseline/>
                <FormContainer>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form name="form" onSubmit={this.handleSubmit} style={{width: '100%'}}>
                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <TextField type="text"
                                       name="username"
                                       label="Login"
                                       fullWidth
                                       margin="normal"
                                       variant="outlined"
                                       value={username}
                                       onChange={this.handleChange}
                                       error={submitted && !username}
                                       helperText={submitted && !username ? 'Username is required!' : ' '}/>
                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <TextField value={password}
                                       onChange={this.handleChange}
                                       name="password"
                                       type="password"
                                       id="outlined-basic"
                                       label="Password"
                                       margin="normal"
                                       fullWidth
                                       variant="outlined"
                                       error={submitted && !password}
                                       helperText={submitted && !password ? 'Password is required!' : ' '}/>
                        </div>
                        <div className="form-group btn-container">
                            <Button color="primary" variant="contained" onClick={this.handleSubmit}>Login</Button>
                            {loggingIn &&
                                <CircularProgress size="20px" style={{marginLeft: '20px'}} />
                            }
                        </div>
                        <StyledLink className="link"
                              component={this.RegisterLink}>Register</StyledLink>
                    </form>
                </FormContainer>
            </StyledContainer>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };

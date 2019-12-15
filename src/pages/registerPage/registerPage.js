import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import styled, { css } from 'styled-components'

//Material
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledContainer = styled(Container)`
    position: relative;
    margin-top: 100px;
    background: #cccccc36;
    padding: 40px;
    border-radius: 10px;
`;

const StyledLink = styled(Link)`
    position: absolute;
    bottom: 15px;
    right: 25px;
`;

const FormHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const Progress = styled(CircularProgress)`
    margin-left: 20px;
`;

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };
    }

    LoginLink = React.forwardRef(((props, ref) => (
        <RouterLink innerRef={ref} to="/login" {...props} />
    )));

    handleChange = event => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    };

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        const classes = {};
        return (
            <StyledContainer component="main" maxWidth="xs">
                <CssBaseline/>
                <div>
                    <FormHead>
                        <Avatar>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                    </FormHead>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={user.firstName}
                                    onChange={this.handleChange}
                                    error={submitted && !user.firstName}
                                    helperText={submitted && !user.firstName ? 'First name is required!' : ' '}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    value={user.lastName}
                                    onChange={this.handleChange}
                                    error={submitted && !user.lastName}
                                    helperText={submitted && !user.lastName ? 'Last name is required!' : ' '}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    value={user.username}
                                    onChange={this.handleChange}
                                    error={submitted && !user.username}
                                    helperText={submitted && !user.username ? 'Username is required!' : ' '}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={user.password}
                                    onChange={this.handleChange}
                                    error={submitted && !user.password}
                                    helperText={submitted && !user.password ? 'Password is required!' : ' '}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            Sign Up
                        </Button>
                        {registering &&
                        <Progress size="20px" />
                        }
                        <Grid container justify="flex-end">
                            <Grid item>
                                <StyledLink component={this.LoginLink}>Already have Account</StyledLink>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </StyledContainer>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };

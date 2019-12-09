import React from "react";

//Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from "@material-ui/core/Avatar";

import {Menu} from '@material-ui/icons';
import {connect} from "react-redux";
import {userActions} from "../actions";
import {Link} from "react-router-dom";
import styled, { css } from 'styled-components'

const User = styled.div`
    display: flex;
    align-items: center;
    & > .MuiAvatar-root {
        margin-left: 20px;
    }
`;

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const FlexGroup = styled.div`
    display: flex;
    align-items: center;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        const classes = {};
        const user = this.props.user;
        return (
            <div>
                <AppBar position="static">
                    <StyledToolbar>
                        <FlexGroup>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <Menu/>
                            </IconButton>
                            <Typography variant="h6">
                                News
                            </Typography>
                        </FlexGroup>
                        {/*<Link to="/login">Logout</Link>*/}
                        <div>
                            {user &&
                            <User>
                                <Typography>{user.firstName} {user.lastName}</Typography>
                                <Avatar variant="circle" className={classes.square}>
                                    {user.firstName.slice(0, 1)}
                                </Avatar>
                            </User>
                            }
                        </div>
                    </StyledToolbar>
                </AppBar>
            </div>
        );
    }
}

function mapState(state) {
    const { user } = state;
    return user;
}

const actionCreator = {
    logout: userActions.logout,
    getUser: userActions.getCurrent
};

const connectedHeader = connect(mapState, actionCreator)(Header);
export {connectedHeader as Header}


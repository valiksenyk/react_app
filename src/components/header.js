import React, {useEffect} from 'react'
import clsx from 'clsx';
import { history } from '../helpers/history'

//Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import {Menu as MenuIcon} from '@material-ui/icons';
import {connect} from "react-redux";
import {userActions} from "../actions";
import styled, {css} from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

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

const Header = (props) => {
    useEffect(() => {
        props.getUser();
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = () => {
      props.handleOpen();
    };

    const openMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        setAnchorEl(null);
        history.push('/login');
    };

    const classes = useStyles();
    const user = props.user;
    return (
        <div>
            <AppBar position="fixed" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
                <StyledToolbar>
                    <FlexGroup>
                        <IconButton edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleClick}
                                    className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            News
                        </Typography>
                    </FlexGroup>
                    <div>
                        {user &&
                        <User aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
                            <Typography>{user.firstName} {user.lastName}</Typography>
                            <Avatar variant="circle" className={classes.square}>
                                {user.firstName.slice(0, 1)}
                            </Avatar>
                        </User>
                        }
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </StyledToolbar>
            </AppBar>
        </div>
    );
};

function mapState(state) {
    const {user} = state;
    return user;
}

const actionCreator = {
    logout: userActions.logout,
    getUser: userActions.getCurrent
};

const connectedHeader = connect(mapState, actionCreator)(Header);
export {connectedHeader as Header}


import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {sitesListActions} from '../../actions'
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const SitesList = (props) => {
    useEffect(() => {
        props.getSites();
    }, []);
    const classes = useStyles();
    const {loading} = props;
    return (
        <div className="container">
            {
                loading ? <CircularProgress /> :
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Site URL</TableCell>
                                <TableCell align="right">General result</TableCell>
                                <TableCell align="right">
                                    Time to first paint&nbsp;(s)</TableCell>
                                <TableCell align="right">DOM nodes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.sites && props.sites.map(site => (
                                <TableRow key={site.origin}>
                                    <TableCell component="th" scope="row">
                                        {site.origin}
                                    </TableCell>
                                    <TableCell align="right">{site.generalResult}</TableCell>
                                    <TableCell align="right">{site.timeToFirstPaint.value}</TableCell>
                                    <TableCell align="right">{site.domSize.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    );
};

function mapState(state) {
    const {sitesList} = state;
    return sitesList;
}

const actionCreator = {
    getSites: sitesListActions.getSites
};

const connectedSitesList = connect(mapState, actionCreator)(SitesList);
export {connectedSitesList as SitesList}
import {PageSpeed} from "../pages/page-speed/page-speed";
import InsertChart from '@material-ui/icons/InsertChart';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted'
import Speed from '@material-ui/icons/Speed'
import {TablePage} from "../pages/tablePage/table-page";
import {HomePage} from "../pages/homePage/homePage";

export const routes = [
    {
        name: 'PageSpeed',
        to: '/page-speed',
        component: PageSpeed,
        icon: Speed
    },
    {
        name: 'Tables',
        to: '/tables',
        component: TablePage,
        icon: FormatListBulleted
    },
    {
        name: 'Home',
        to: '/home',
        component: HomePage,
        icon: InsertChart
    },
];
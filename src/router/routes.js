import {PageSpeed} from "../pages/page-speed/page-speed";
import InsertChart from '@material-ui/icons/InsertChart';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted'
import Speed from '@material-ui/icons/Speed'
import {SitesList} from "../pages/sitesList/sites-list";
import {HomePage} from "../pages/homePage/homePage";
import config from "../config";

const baseRoute = config.baseRoute;

export const routes = [
    {
        name: 'PageSpeed',
        to: `/${baseRoute}/page-speed`,
        component: PageSpeed,
        icon: Speed
    },
    {
        name: 'Sites List',
        to: `/${baseRoute}/sites-list`,
        component: SitesList,
        icon: FormatListBulleted
    },
    {
        name: 'Home',
        to: `/${baseRoute}/home`,
        component: HomePage,
        icon: InsertChart
    },
];
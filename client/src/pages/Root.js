import {Outlet} from "react-router";
import MainNavigation from "../pages-components/MainNavigation";
import classes from './Root.module.css';

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
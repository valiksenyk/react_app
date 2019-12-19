import React from "react";
import {Header} from "./header";
import {Sidebar} from "./sidebar";

export const NavigationComponent = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open)
    };

    return (
        <>
            <Header open={open} handleOpen={handleOpen}/>
            <Sidebar open={open} handleOpen={handleOpen}/>
        </>
    )

};
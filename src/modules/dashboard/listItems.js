import React from 'react';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

function MainListItems() {
    let history = useHistory();
    return (

        <div>
            <ListItem button onClick = {() => history.push('/dashboard')}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick = {() => history.push('/add-new-connect')}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
            </ListItem>
            <ListItem button onClick = {() => history.push('/view-network')}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Network"  />
            </ListItem>
            <ListItem button onClick = {() => history.push('/add-product')}> 
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="E-commerce Store" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="E-Wallet" />
            </ListItem>
        </div>
    );
}

export default MainListItems;


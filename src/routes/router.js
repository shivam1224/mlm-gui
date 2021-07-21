import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Login = lazy(() => import('./../modules/login'));
const Register = lazy(() => import('./../modules/register'));
const Dashboard = lazy(() => import('./../modules/dashboard'));
const AddConnect = lazy(() => import('./../modules/addConnect'));
const Network = lazy(() => import('./../modules/network'));
const AddProduct = lazy(() => import('./../modules/Products/AddProduct'));



const Routes = (props) => {

    return (
        <>
            <Suspense fallback={(<div>Page is loading ...</div>)}>
                <BrowserRouter >
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register/" component={Register} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/add-new-connect" component={AddConnect} />
                        <Route exact path="/view-network" component={Network} />
                        <Route exact path="/add-product" component={AddProduct} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Routes;
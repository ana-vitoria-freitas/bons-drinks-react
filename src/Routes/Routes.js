import React from 'react'

import { Router, Switch, Route } from 'react-router'

import NotFound from './../NotFound'
import PaginaInicial from '../Componentes/PaginaInicial/PaginaInicial'
import TalkWithUs from '../Componentes/TalkWithUs/TalkWithUs'
import AboutUs from '../Componentes/AboutUs/AboutUs'
import HomeDrinks from '../Componentes/HomeDrinks/HomeDrinks'
import Favoritos from '../Componentes/Favoritos/Favoritos'
import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={PaginaInicial} exact path="/"/>
            <Route component={TalkWithUs} exact path="/talkWithUs"/>
            <Route component={AboutUs} exact path="/aboutUs"/>
            <Route component={HomeDrinks} exact path="/home"/>
            {/* <Route component={Favoritos} exact path="/favoritos"/> */}
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes
/**
 *
 * Created by devin on 2/27/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import Dashboard from './components/Dashboard';
import BabyDashboard from './components/BabyDashboard';
import {BabyCollection} from './stores/baby.js';
import babyFixture from './fixtures/babyStats'
const babycollection = new BabyCollection();
babycollection.add(babyFixture.babyOneWt)
export default (
    <Route path={"/"} component={App} >
     <IndexRoute component={Dashboard} babycollection={babycollection} />
      <Route path={"/babies/:babyID"} babycollection={babycollection} component={BabyDashboard} />
    </Route>
)

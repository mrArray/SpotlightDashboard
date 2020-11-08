import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Charts from './Charts';
import ChartsSecond from './ChartsSecond'
import ChartsThird from './ChartsThird'
import ChartsLast from './ChartsLast'





const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Charts} />
            <Route path="/charts" component={Charts} />

            <Route exact path="/" component={ChartsSecond} />
            <Route path="/chartssecond" component={ChartsSecond} />

            <Route exact path="/" component={ChartsThird} />
            <Route path="/chartsthird" component={ChartsThird} />

            <Route exact path="/" component={ChartsLast} />
            <Route path="/chartslast" component={ChartsLast} />

            


            



        </Switch>


    )
}


export default Content;
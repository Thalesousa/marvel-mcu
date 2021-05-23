import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Personagens from './pages/Personagens';
import HQs from './pages/HQs';
import Filmes from './pages/Filmes';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/personagens" component={Personagens} />
        <Route path="/hqs" component={HQs} />
        <Route path="/filmes" component={Filmes} />
      </Switch>
    </BrowserRouter>
  )
}
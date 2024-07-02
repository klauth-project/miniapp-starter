import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, SecondScreen } from "./components";

export default ({ history }) => {
  return (
    <IonApp>
      <IonReactRouter history={history}>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/__MODULE__/second" component={SecondScreen} />
            <Route path="/" component={Home} />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

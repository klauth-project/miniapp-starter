import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { IonRouterOutlet, IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { PageOne } from "./pages";

export default ({ history }) => {
  return (
    <IonApp>
      <IonReactRouter history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <IonRouterOutlet>
            <Switch>
              <Route exact path="/__MODULE__/" component={PageOne} />
            </Switch>
          </IonRouterOutlet>
        </Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

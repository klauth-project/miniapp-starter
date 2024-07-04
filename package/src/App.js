import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { IonRouterOutlet, IonApp, IonNav } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { PageOne, Home } from "./pages";

export default ({ history }) => {
  return (
    <IonApp>
      <IonReactRouter history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <IonRouterOutlet>
            <Switch>
              <Route
                path="/__MODULE__/pages"
                render={() => (
                  <IonNav root={() => <PageOne history={history} />}></IonNav>
                )}
              />
              <Route exact path="/__MODULE__" component={Home} />
            </Switch>
          </IonRouterOutlet>
        </Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

import PageTwo from "./page-two";

function PageOne() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page One</h1>
        <IonNavLink routerDirection="forward" component={() => <PageTwo />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default PageOne;

import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonNavLink,
} from "@ionic/react";

const PageThree = ({ history }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page Three</h1>
        <IonNavLink onClick={() => history.push("/")}>
          <IonButton color={"secondary"}>Start Over</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
};

export default PageThree;

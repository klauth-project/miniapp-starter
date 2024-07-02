import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
} from "@ionic/react";

const Home = ({ history }) => {
  const letsStart = () => {
    history.push("/__MODULE__/page-one");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mini-App Starter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText color="primary">
          <h1>Welcome to Mini-App</h1>
        </IonText>
        <IonButton expand="full" onClick={() => letsStart()}>
          Let's view all pages
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

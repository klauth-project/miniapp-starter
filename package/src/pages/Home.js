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
  const navigateToSecondScreen = () => {
    history.push("/ggproject5/second");
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
          <h1>Welcome to first screen</h1>
        </IonText>
        <IonButton expand="full" onClick={() => navigateToSecondScreen()}>
          Go to second screen
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

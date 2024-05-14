/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { PushNotifications } from "@capacitor/push-notifications";
import { MoECapacitorCore } from "capacitor-moengage-core";

import { EventPathMapping } from "../eventPathMapping";

//To use this file you need to initialize firebase and create fcm token
const useNotifications = () => {
  const [fcmToken, setFcmToken] = useState({});
  const addListeners = async () => {
    await PushNotifications.addListener("registration", async (token) => {
      setFcmToken(token);
      console.info("Registration token: ", token.value);
    });

    await PushNotifications.addListener("registrationError", (err) => {
      console.error("Registration error: ", err.error);
    });

    await PushNotifications.addListener(
      "pushNotificationReceived",
      (notification) => {
        console.log("Push notification received: ", notification);
      }
    );

    await PushNotifications.addListener(
      "pushNotificationActionPerformed",
      ({ notification }) => {
        window.open(
          EventPathMapping(notification.data.event, notification.data)
        );
      }
    );
  };

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      const permStatus = PushNotifications.checkPermissions();

      MoECapacitorCore.pushPermissionResponseAndroid({
        isGranted: permStatus.receive === "granted",
      });
      if (permStatus.receive === "granted") {
        MoECapacitorCore.passFcmPushToken({
          token: fcmToken, //fcm token should be added here
          appId: "Q5YBYJOT6NU535WZD1JVOIDV",
        });
        MoECapacitorCore.setupNotificationChannelsAndroid();
        MoECapacitorCore.requestPushPermissionAndroid();
      } else {
        MoECapacitorCore.navigateToSettingsAndroid();
      }
    }
  }, [fcmToken]);

  const registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== "granted") {
      throw new Error("User denied permissions!");
    }

    await PushNotifications.register();
  };

  const getDeliveredNotifications = async () => {
    const notificationList =
      await PushNotifications.getDeliveredNotifications();
    console.log("delivered notifications", notificationList);
  };

  const enablePushNotifications = () => {
    if (Capacitor.isNativePlatform()) {
      addListeners();
      registerNotifications();
      getDeliveredNotifications();
    }
  };

  return enablePushNotifications;
};

export default useNotifications;

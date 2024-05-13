import { useEffect } from "react";
import { MoECapacitorCore } from "capacitor-moengage-core";

const useMoEngage = () => {
  const app_id = "Q5YBYJOT6NU535WZD1JVOIDV";

  useEffect(() => {
    MoECapacitorCore.initialize({
      appId: app_id,
    });
    MoECapacitorCore.setUniqueId({ uniqueId: 'ruchi123', appId: app_id });
  }, []);

  const tracker = (event, params = {}) => {
    MoECapacitorCore.trackEvent({
      eventName: event,
      eventAttributes: params,
      appId: app_id,
    });
  };

  return tracker;
};

export default useMoEngage;
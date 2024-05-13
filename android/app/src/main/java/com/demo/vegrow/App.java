
package com.demo.vegrow;

import android.app.Application;

import androidx.core.app.NotificationCompat;

import com.moengage.capacitor.MoEInitializer;
import com.moengage.core.DataCenter;
import com.moengage.core.LogLevel;
import com.moengage.core.MoEngage;
import com.moengage.core.config.LogConfig;
import com.moengage.core.model.SdkState;
import com.moengage.core.config.*;


public class App extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MoEngage.Builder moEngage = new MoEngage.Builder(this, "Q5YBYJOT6NU535WZD1JVOIDV");

        moEngage.configureLogs(new LogConfig(LogLevel.VERBOSE, true));
        moEngage.configureNotificationMetaData(new NotificationConfig(R.mipmap.ic_launcher, -1))
        .configureFcm(new FcmConfig(false))
        .build();
        MoEInitializer.initialiseDefaultInstance(this, moEngage);
    }
}

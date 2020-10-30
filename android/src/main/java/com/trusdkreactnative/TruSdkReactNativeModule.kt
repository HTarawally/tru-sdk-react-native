package com.trusdkreactnative

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class TruSdkReactNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "TruSdkReactNative"
    }

    @ReactMethod
    fun openCheckUrl(url: String, promise: Promise) {
      promise.resolve(url)
    }
}

package com.trusdkreactnative

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import id.tru.sdk.TruSDK

class TruSdkReactNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    init {
      TruSDK.initializeSdk(reactContext)
    }

    override fun getName(): String {
        return "TruSdkReactNative"
    }

    @ReactMethod
    fun openCheckUrl(url: String, promise: Promise) {
      val truSdk = TruSDK.getInstance()
      val response = truSdk.openCheckUrl(url)
      promise.resolve(url)
    }
}

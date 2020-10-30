#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TruSdkReactNative, NSObject)

RCT_EXTERN_METHOD(openCheckUrl:(NSString)url
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end

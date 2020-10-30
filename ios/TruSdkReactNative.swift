

@objc(TruSdkReactNative)
class TruSdkReactNative: NSObject {

    @objc(openCheckUrl:withB:withResolver:withRejecter:)
    func openCheckUrl(url: string, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(url)
    }
}

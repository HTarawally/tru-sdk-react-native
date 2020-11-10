

@objc(TruSdkReactNative)
class TruSdkReactNative: NSObject {

    @objc(openCheckUrl:withB:withResolver:withRejecter:)
    public func openCheckUrl(url: string, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let trusdk: TruSDK = TruSDK()
        let response = trusdk.openCheckUrl(url, () => {
            resolve()
        })
    }
}

import { NativeModules } from 'react-native';

type TruSdkReactNativeType = {
  openCheckUrl(url: string): Promise<string>;
};

const { TruSdkReactNative } = NativeModules;

export default TruSdkReactNative as TruSdkReactNativeType;

# tru-sdk-react-native

[![License][license-image]][license-url]

React Native package for tru.ID


## Installation

```sh
npm install tru-sdk-react-native
```

## Usage

```js
import TruSdkReactNative from "tru-sdk-react-native";

// ...

const result = await TruSdkReactNative.openCheckUrl(checkUrl);
```

## Run example

- For iOS: Require XCode >12
- For android: Require JDK 14 (Java version 14.02 / Gradle v6.3)
- For metro bundler, require node version > 10
- `cd example` && `yarn install` then `yarn ios` or `yarn android`

Note: For Android, make sure to have `ANDROID_HOME` env var set (ie `export ANDROID_HOME=~/Library/Android/sdk`)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Meta

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/tru-ID](https://github.com/tru-ID)

[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
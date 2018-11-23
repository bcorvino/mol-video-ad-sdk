# Video Ad SDK

To run video ads in the browser there are many alternatives. The most famous one is probably Google's [IMA SDK](https://developers.google.com/interactive-media-ads/docs/sdks/html5/) for HTML5. There are two main cons with that SDK. It only works through DoubleClick and it is a black box very hard to debug and to maintain. This SDK tries to offer an alternative to play video ads that can work with any player in the world and any ad server that supports the VAST specification. And since it is open source you can read the code and debug if you need to.

## DEMO
Demo [here!](https://mailonline.github.io/mol-video-ad-sdk/demo/index.html).

## Documentation
Currently we only have the API which you can check [here](https://mailonline.github.io/mol-video-ad-sdk/docs/index.html).

## Compiling and Testing
We use [nvm](https://github.com/creationix/nvm) to decide which of node to use.

So after you clone the repo you just need to run
```
$ nvm use
```
to install the supported node version, then run [`yarn`](https://yarnpkg.com/lang/en/docs/cli/#toc-default-command)'s default command
```
$ yarn
```
to install and build the packages and finally you can run
```
$ yarn test
```
to run the tests.

## Discussion

Please open an issue if you have any questions or concerns.


## License

This project is licensed under the MIT license, Copyright (c) 2018 MailOnline. For more information see [LICENSE](./LICENSE)
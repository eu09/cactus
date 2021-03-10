# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/hyperledger/cactus/compare/v0.3.0...v0.4.0) (2021-03-10)


### Bug Fixes

* **connector-besu:** added test for call with parameters ([1fa24be](https://github.com/hyperledger/cactus/commit/1fa24bed8f42d39dd7b9ce989b8192774a9c7257))
* **connector-besu:** avoid req.params repetition ([64d6cf1](https://github.com/hyperledger/cactus/commit/64d6cf1f56375c9dd97c7cdf0d11c573fdf26b5a))
* **connector-besu:** fixed transaction value assignment and added test ([48bb129](https://github.com/hyperledger/cactus/commit/48bb1294f03f8b488c6f570b1e248f26aef2ccd1))
* **connector-besu:** revert change in generated code ([075ad90](https://github.com/hyperledger/cactus/commit/075ad90000507b95774065b7fad280b09a49c5f7))
* reverting accidental manual change in generated code ([e67369f](https://github.com/hyperledger/cactus/commit/e67369f6b9bded6f54231cbcb34de534b6a80f5b)), closes [#453](https://github.com/hyperledger/cactus/issues/453)


### Features

* **connector-besu:** added ether value in  contract invoke request ([add9cd9](https://github.com/hyperledger/cactus/commit/add9cd94ed7fe4a7facda89749895f7b04de89a8))
* **core-api:** plugin import types: LOCAL & REMOTE ([f4d51da](https://github.com/hyperledger/cactus/commit/f4d51dae5b28367e714a2b9aa35dd84a2cb4cb37))
* **refactor:** openapi endpoint paths ([261c17b](https://github.com/hyperledger/cactus/commit/261c17b08124070c7be0890d6bc3da380255893b))





# [0.3.0](https://github.com/hyperledger/cactus/compare/v0.1.0...v0.3.0) (2021-01-06)


### Bug Fixes

* open API generator config - protected keyword ([57e52f4](https://github.com/hyperledger/cactus/commit/57e52f42c3aaab653acb8838ba93518a5a097af8)), closes [#436](https://github.com/hyperledger/cactus/issues/436)


### Features

* **besu:** 🎸 OpenAPI support => arbitrary TX, contract deployments ([6d7e788](https://github.com/hyperledger/cactus/commit/6d7e7882eb0e11102a7e06b508433203c7cd821d))
* **besu:** add keychain reference signing support ([768c4cc](https://github.com/hyperledger/cactus/commit/768c4cc67837699f5e153545cc7350f2807c4460))
* **besu:** remove references to gethkeychainpassword ([2640b52](https://github.com/hyperledger/cactus/commit/2640b521967de51dc84e30f27749256da6369434))
* **cmd-api-server:** fully dynamic plugin imports via config file/env/CLI ([fe396c9](https://github.com/hyperledger/cactus/commit/fe396c969436f1c1a99b6d03d8b58b160e1a93bb))
* **core-api:** add instanceId getter to ICactusPlugin ([e50d9ce](https://github.com/hyperledger/cactus/commit/e50d9cef081708d7d6b92701f7f941c36ef6f920))
* **core-api:** getConsensusAlgorithmFamily() on connector API ([477dc7e](https://github.com/hyperledger/cactus/commit/477dc7ed5dfba9ae56060772d478aae349919f10)), closes [#355](https://github.com/hyperledger/cactus/issues/355)
* **plugin-ledger-connector-besu:** add log level to options ([29402d0](https://github.com/hyperledger/cactus/commit/29402d0814bf9ebc642430cd0acb660eb4d50b97))





# [0.2.0](https://github.com/hyperledger/cactus/compare/v0.1.0...v0.2.0) (2020-12-01)


### Features

* **besu:** 🎸 OpenAPI support => arbitrary TX, contract deployments ([6d7e788](https://github.com/hyperledger/cactus/commit/6d7e7882eb0e11102a7e06b508433203c7cd821d))
* **besu:** add keychain reference signing support ([768c4cc](https://github.com/hyperledger/cactus/commit/768c4cc67837699f5e153545cc7350f2807c4460))
* **cmd-api-server:** fully dynamic plugin imports via config file/env/CLI ([fe396c9](https://github.com/hyperledger/cactus/commit/fe396c969436f1c1a99b6d03d8b58b160e1a93bb))
* **core-api:** add instanceId getter to ICactusPlugin ([e50d9ce](https://github.com/hyperledger/cactus/commit/e50d9cef081708d7d6b92701f7f941c36ef6f920))
* **plugin-ledger-connector-besu:** add log level to options ([29402d0](https://github.com/hyperledger/cactus/commit/29402d0814bf9ebc642430cd0acb660eb4d50b97))

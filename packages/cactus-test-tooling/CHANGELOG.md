# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/hyperledger/cactus/compare/v0.3.0...v0.4.0) (2021-03-10)


### Bug Fixes

* **test-tooling:** removed latest tag ([24d593d](https://github.com/hyperledger/cactus/commit/24d593d6156e8128286e6230dbb867f1afefef7d))


### Features

* **corda:** add Corda ledger support ([5623369](https://github.com/hyperledger/cactus/commit/5623369aa3b5f3b75cbafb58499b24da6efc896d))
* **keychain:** add rust keychain plugin vault implementation ([6dcdb8a](https://github.com/hyperledger/cactus/commit/6dcdb8a02db30e4dfe3d912bd56d5979b0cb3bc3))
* **test-tooling:** containers#getById and #waitForHealthCheck ([4a7fbfe](https://github.com/hyperledger/cactus/commit/4a7fbfe19cdc269b3b197c736ecce4395b39e1e3)), closes [#471](https://github.com/hyperledger/cactus/issues/471)





# [0.3.0](https://github.com/hyperledger/cactus/compare/v0.1.0...v0.3.0) (2021-01-06)


### Bug Fixes

* **test-tooling:** bind test ledgers to port zero for macOS ([6ff1b98](https://github.com/hyperledger/cactus/commit/6ff1b981f353449a15627ec0ec724e6e4a3fbb8d)), closes [#186](https://github.com/hyperledger/cactus/issues/186)
* **test-tooling:** fabric AIO image docker in docker support ([4c2ae34](https://github.com/hyperledger/cactus/commit/4c2ae344aa9aec817e330773fc6f7b0e995ff43f)), closes [#279](https://github.com/hyperledger/cactus/issues/279)
* **test-tooling:** getContainerInfo methods lookup criteria ([7456967](https://github.com/hyperledger/cactus/commit/7456967512b0cf4e0e70f3b656de53c9690ea514)), closes [#265](https://github.com/hyperledger/cactus/issues/265)


### Features

* **fabric:** add run transaction endpoint ([07ff4f8](https://github.com/hyperledger/cactus/commit/07ff4f862f6d02fec5de887d73186777951b745a))
* **fabric:** user defined fabric samples version ([8a60717](https://github.com/hyperledger/cactus/commit/8a607172f72afbdf2e0519eff3a58679975cd1ee)), closes [#391](https://github.com/hyperledger/cactus/issues/391)
* **fabric-all-in-one:** runs-a-Fabric-Network-in-one-docker-container ([703bc61](https://github.com/hyperledger/cactus/commit/703bc61a850b87176d04793545a9030b9bffc617)), closes [#132](https://github.com/hyperledger/cactus/issues/132)
* **ledger-connector-fabric:** golang chaincode deployment ([38e9780](https://github.com/hyperledger/cactus/commit/38e97808c74124bb35f0aa37e4b3d0eb42161920)), closes [#252](https://github.com/hyperledger/cactus/issues/252) [#275](https://github.com/hyperledger/cactus/issues/275) [#276](https://github.com/hyperledger/cactus/issues/276) [#277](https://github.com/hyperledger/cactus/issues/277)
* **test-tooling:** 🎸 createEthTestAccount() to Besu,Quorum test ledger ([2c0d73c](https://github.com/hyperledger/cactus/commit/2c0d73c0aba31e1d51d94d9482caad0e2d862ac9))
* 🎸 add method: QuorumTestLedger#getGenesisAccount() ([ac19e49](https://github.com/hyperledger/cactus/commit/ac19e49b87dad7d23d9eea91e2bbca0e3a0f69e4))
* **test-tooling:** Containers class ls() and exec() methods ([44ad88a](https://github.com/hyperledger/cactus/commit/44ad88a1f8ddc16735ef4533a1d25c9acf690d2e)), closes [#275](https://github.com/hyperledger/cactus/issues/275)





# [0.2.0](https://github.com/hyperledger/cactus/compare/v0.1.0...v0.2.0) (2020-12-01)


### Bug Fixes

* **test-tooling:** bind test ledgers to port zero for macOS ([6ff1b98](https://github.com/hyperledger/cactus/commit/6ff1b981f353449a15627ec0ec724e6e4a3fbb8d)), closes [#186](https://github.com/hyperledger/cactus/issues/186)
* **test-tooling:** getContainerInfo methods lookup criteria ([7456967](https://github.com/hyperledger/cactus/commit/7456967512b0cf4e0e70f3b656de53c9690ea514)), closes [#265](https://github.com/hyperledger/cactus/issues/265)


### Features

* **test-tooling:** 🎸 createEthTestAccount() to Besu,Quorum test ledger ([2c0d73c](https://github.com/hyperledger/cactus/commit/2c0d73c0aba31e1d51d94d9482caad0e2d862ac9))
* 🎸 add method: QuorumTestLedger#getGenesisAccount() ([ac19e49](https://github.com/hyperledger/cactus/commit/ac19e49b87dad7d23d9eea91e2bbca0e3a0f69e4))
* **fabric-all-in-one:** runs-a-Fabric-Network-in-one-docker-container ([703bc61](https://github.com/hyperledger/cactus/commit/703bc61a850b87176d04793545a9030b9bffc617)), closes [#132](https://github.com/hyperledger/cactus/issues/132)
* **ledger-connector-fabric:** golang chaincode deployment ([38e9780](https://github.com/hyperledger/cactus/commit/38e97808c74124bb35f0aa37e4b3d0eb42161920)), closes [#252](https://github.com/hyperledger/cactus/issues/252) [#275](https://github.com/hyperledger/cactus/issues/275) [#276](https://github.com/hyperledger/cactus/issues/276) [#277](https://github.com/hyperledger/cactus/issues/277)
* **test-tooling:** Containers class ls() and exec() methods ([44ad88a](https://github.com/hyperledger/cactus/commit/44ad88a1f8ddc16735ef4533a1d25c9acf690d2e)), closes [#275](https://github.com/hyperledger/cactus/issues/275)

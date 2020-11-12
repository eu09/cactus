/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Plugin - Connector Besu
 * Can perform basic tasks on a Besu ledger
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BesuTransactionConfig
 */
export interface BesuTransactionConfig {
    [key: string]: object | any;

    /**
     * 
     * @type {string}
     * @memberof BesuTransactionConfig
     */
    rawTransaction?: string;
    /**
     * 
     * @type {string | number}
     * @memberof BesuTransactionConfig
     */
    from?: string | number;
    /**
     * 
     * @type {string}
     * @memberof BesuTransactionConfig
     */
    to?: string;
    /**
     * 
     * @type {string | number}
     * @memberof BesuTransactionConfig
     */
    value?: string | number;
    /**
     * 
     * @type {string | number}
     * @memberof BesuTransactionConfig
     */
    gas?: string | number;
    /**
     * 
     * @type {string | number}
     * @memberof BesuTransactionConfig
     */
    gasPrice?: string | number;
    /**
     * 
     * @type {string}
     * @memberof BesuTransactionConfig
     */
    data?: string;
}
/**
 * 
 * @export
 * @interface DeployContractSolidityBytecodeV1Request
 */
export interface DeployContractSolidityBytecodeV1Request {
    /**
     * 
     * @type {Web3SigningCredential}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    web3SigningCredential: Web3SigningCredential;
    /**
     * See https://ethereum.stackexchange.com/a/47556 regarding the maximum length of the bytecode
     * @type {string}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    bytecode: string;
    /**
     * 
     * @type {number}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    gas?: number;
    /**
     * 
     * @type {string}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    gasPrice?: string;
    /**
     * The amount of milliseconds to wait for a transaction receipt with theaddress of the contract(which indicates successful deployment) beforegiving up and crashing.
     * @type {number}
     * @memberof DeployContractSolidityBytecodeV1Request
     */
    timeoutMs?: number;
}
/**
 * 
 * @export
 * @interface DeployContractSolidityBytecodeV1Response
 */
export interface DeployContractSolidityBytecodeV1Response {
    /**
     * 
     * @type {Web3TransactionReceipt}
     * @memberof DeployContractSolidityBytecodeV1Response
     */
    transactionReceipt: Web3TransactionReceipt;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum EthContractInvocationType {
    SEND = 'SEND',
    CALL = 'CALL'
}

/**
 * 
 * @export
 * @interface InvokeContractV1Request
 */
export interface InvokeContractV1Request {
    /**
     * 
     * @type {Web3SigningCredential}
     * @memberof InvokeContractV1Request
     */
    web3SigningCredential: Web3SigningCredential;
    /**
     * The application binary interface of the solidity contract
     * @type {Array<any>}
     * @memberof InvokeContractV1Request
     */
    contractAbi: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof InvokeContractV1Request
     */
    contractAddress: string;
    /**
     * 
     * @type {EthContractInvocationType}
     * @memberof InvokeContractV1Request
     */
    invocationType: EthContractInvocationType;
    /**
     * The name of the contract method to invoke.
     * @type {string}
     * @memberof InvokeContractV1Request
     */
    methodName: string;
    /**
     * The list of arguments to pass in to the contract method being invoked.
     * @type {Array<any>}
     * @memberof InvokeContractV1Request
     */
    params: Array<any>;
    /**
     * 
     * @type {string | number}
     * @memberof InvokeContractV1Request
     */
    gas?: string | number;
    /**
     * 
     * @type {string | number}
     * @memberof InvokeContractV1Request
     */
    gasPrice?: string | number;
    /**
     * The amount of milliseconds to wait for a transaction receipt beforegiving up and crashing. Only has any effect if the invocation type is SEND
     * @type {number}
     * @memberof InvokeContractV1Request
     */
    timeoutMs?: number;
}
/**
 * 
 * @export
 * @interface InvokeContractV1Response
 */
export interface InvokeContractV1Response {
    /**
     * 
     * @type {Web3TransactionReceipt}
     * @memberof InvokeContractV1Response
     */
    transactionReceipt?: Web3TransactionReceipt;
    /**
     * 
     * @type {any}
     * @memberof InvokeContractV1Response
     */
    callOutput?: any | null;
}
/**
 * 
 * @export
 * @interface RunTransactionRequest
 */
export interface RunTransactionRequest {
    /**
     * 
     * @type {Web3SigningCredential}
     * @memberof RunTransactionRequest
     */
    web3SigningCredential: Web3SigningCredential;
    /**
     * 
     * @type {BesuTransactionConfig}
     * @memberof RunTransactionRequest
     */
    transactionConfig: BesuTransactionConfig;
    /**
     * The amount of milliseconds to wait for a transaction receipt with thehash of the transaction(which indicates successful execution) beforegiving up and crashing.
     * @type {number}
     * @memberof RunTransactionRequest
     */
    timeoutMs?: number;
}
/**
 * 
 * @export
 * @interface RunTransactionResponse
 */
export interface RunTransactionResponse {
    /**
     * 
     * @type {Web3TransactionReceipt}
     * @memberof RunTransactionResponse
     */
    transactionReceipt: Web3TransactionReceipt;
}
/**
 * 
 * @export
 * @interface SolidityContractJsonArtifact
 */
export interface SolidityContractJsonArtifact {
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    contractName: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    metadata?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    bytecode?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    deployedBytecode?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    sourceMap?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    deployedSourceMap?: string;
    /**
     * 
     * @type {string}
     * @memberof SolidityContractJsonArtifact
     */
    sourcePath?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SolidityContractJsonArtifact
     */
    compiler?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SolidityContractJsonArtifact
     */
    functionHashes?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof SolidityContractJsonArtifact
     */
    gasEstimates?: object;
}
/**
 * @type Web3SigningCredential
 * @export
 */
export type Web3SigningCredential = Web3SigningCredentialGethKeychainPassword | Web3SigningCredentialNone | Web3SigningCredentialPrivateKeyHex;

/**
 * 
 * @export
 * @interface Web3SigningCredentialGethKeychainPassword
 */
export interface Web3SigningCredentialGethKeychainPassword {
    /**
     * 
     * @type {Web3SigningCredentialType}
     * @memberof Web3SigningCredentialGethKeychainPassword
     */
    type: Web3SigningCredentialType;
    /**
     * The ethereum account (public key) that the credential  belongs to. Basically the username in the traditional terminology of authentication.
     * @type {string}
     * @memberof Web3SigningCredentialGethKeychainPassword
     */
    ethAccount: string;
    /**
     * A geth keychain unlock password.
     * @type {string}
     * @memberof Web3SigningCredentialGethKeychainPassword
     */
    secret: string;
}
/**
 * Using this denotes that there is no signing required because the transaction is pre-signed.
 * @export
 * @interface Web3SigningCredentialNone
 */
export interface Web3SigningCredentialNone {
    /**
     * 
     * @type {Web3SigningCredentialType}
     * @memberof Web3SigningCredentialNone
     */
    type: Web3SigningCredentialType;
}
/**
 * 
 * @export
 * @interface Web3SigningCredentialPrivateKeyHex
 */
export interface Web3SigningCredentialPrivateKeyHex {
    /**
     * 
     * @type {Web3SigningCredentialType}
     * @memberof Web3SigningCredentialPrivateKeyHex
     */
    type: Web3SigningCredentialType;
    /**
     * The ethereum account (public key) that the credential belongs to. Basically the username in the traditional terminology of authentication.
     * @type {string}
     * @memberof Web3SigningCredentialPrivateKeyHex
     */
    ethAccount: string;
    /**
     * The HEX encoded private key of an eth account.
     * @type {string}
     * @memberof Web3SigningCredentialPrivateKeyHex
     */
    secret: string;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum Web3SigningCredentialType {
    GETHKEYCHAINPASSWORD = 'GETH_KEYCHAIN_PASSWORD',
    PRIVATEKEYHEX = 'PRIVATE_KEY_HEX',
    NONE = 'NONE'
}

/**
 * 
 * @export
 * @interface Web3TransactionReceipt
 */
export interface Web3TransactionReceipt {
    [key: string]: object | any;

    /**
     * 
     * @type {boolean}
     * @memberof Web3TransactionReceipt
     */
    status: boolean;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    transactionHash: string;
    /**
     * 
     * @type {number}
     * @memberof Web3TransactionReceipt
     */
    transactionIndex: number;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    blockHash: string;
    /**
     * 
     * @type {number}
     * @memberof Web3TransactionReceipt
     */
    blockNumber: number;
    /**
     * 
     * @type {number}
     * @memberof Web3TransactionReceipt
     */
    gasUsed: number;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    contractAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof Web3TransactionReceipt
     */
    to: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deploys the bytecode of a Solidity contract.
         * @param {DeployContractSolidityBytecodeV1Request} [deployContractSolidityBytecodeV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuDeployContractSolidityBytecode: async (deployContractSolidityBytecodeV1Request?: DeployContractSolidityBytecodeV1Request, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-besu/deploy-contract-solidity-bytecode`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof deployContractSolidityBytecodeV1Request !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(deployContractSolidityBytecodeV1Request !== undefined ? deployContractSolidityBytecodeV1Request : {}) : (deployContractSolidityBytecodeV1Request || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Invokeds a contract on a besu ledger
         * @param {InvokeContractV1Request} [invokeContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuInvokeContract: async (invokeContractV1Request?: InvokeContractV1Request, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-besu/invoke-contract`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof invokeContractV1Request !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(invokeContractV1Request !== undefined ? invokeContractV1Request : {}) : (invokeContractV1Request || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Executes a transaction on a besu ledger
         * @param {RunTransactionRequest} [runTransactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuRunTransaction: async (runTransactionRequest?: RunTransactionRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-besu/run-transaction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof runTransactionRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(runTransactionRequest !== undefined ? runTransactionRequest : {}) : (runTransactionRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deploys the bytecode of a Solidity contract.
         * @param {DeployContractSolidityBytecodeV1Request} [deployContractSolidityBytecodeV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request?: DeployContractSolidityBytecodeV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeployContractSolidityBytecodeV1Response>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Invokeds a contract on a besu ledger
         * @param {InvokeContractV1Request} [invokeContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BesuInvokeContract(invokeContractV1Request?: InvokeContractV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvokeContractV1Response>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1BesuInvokeContract(invokeContractV1Request, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Executes a transaction on a besu ledger
         * @param {RunTransactionRequest} [runTransactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1BesuRunTransaction(runTransactionRequest?: RunTransactionRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunTransactionResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1BesuRunTransaction(runTransactionRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Deploys the bytecode of a Solidity contract.
         * @param {DeployContractSolidityBytecodeV1Request} [deployContractSolidityBytecodeV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request?: DeployContractSolidityBytecodeV1Request, options?: any): AxiosPromise<DeployContractSolidityBytecodeV1Response> {
            return DefaultApiFp(configuration).apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Invokeds a contract on a besu ledger
         * @param {InvokeContractV1Request} [invokeContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuInvokeContract(invokeContractV1Request?: InvokeContractV1Request, options?: any): AxiosPromise<InvokeContractV1Response> {
            return DefaultApiFp(configuration).apiV1BesuInvokeContract(invokeContractV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Executes a transaction on a besu ledger
         * @param {RunTransactionRequest} [runTransactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1BesuRunTransaction(runTransactionRequest?: RunTransactionRequest, options?: any): AxiosPromise<RunTransactionResponse> {
            return DefaultApiFp(configuration).apiV1BesuRunTransaction(runTransactionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Deploys the bytecode of a Solidity contract.
     * @param {DeployContractSolidityBytecodeV1Request} [deployContractSolidityBytecodeV1Request] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request?: DeployContractSolidityBytecodeV1Request, options?: any) {
        return DefaultApiFp(this.configuration).apiV1BesuDeployContractSolidityBytecode(deployContractSolidityBytecodeV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Invokeds a contract on a besu ledger
     * @param {InvokeContractV1Request} [invokeContractV1Request] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1BesuInvokeContract(invokeContractV1Request?: InvokeContractV1Request, options?: any) {
        return DefaultApiFp(this.configuration).apiV1BesuInvokeContract(invokeContractV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Executes a transaction on a besu ledger
     * @param {RunTransactionRequest} [runTransactionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1BesuRunTransaction(runTransactionRequest?: RunTransactionRequest, options?: any) {
        return DefaultApiFp(this.configuration).apiV1BesuRunTransaction(runTransactionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



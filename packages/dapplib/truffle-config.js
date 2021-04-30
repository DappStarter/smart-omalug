require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict help frame tribe street repeat mad modify grunt light army gaze'; 
let testAccounts = [
"0xea9efa3aae2536642d1c5a677f7214d9db65e0cc6c727f3c22f856f95f8f5703",
"0x55f360e497a4e82c46deafd8e940d709a1fce3d6b2be17306299260064e0b55f",
"0x4454fb94ce7a728d7981e95fe116ab77569df882fc57c61ea47e5788fd4fe382",
"0x5eb3db489f42a6965ac730aa787a505f5ad71f58ab49dc5bfea41d218f112770",
"0x61b7dc242843387c84c5b17007553cc79ecaa792bd58909f33e080d646b855e3",
"0x70682a410f758e4b5c8e510d5635cc425e4d9be1540bf623d9a7fb08f293fd30",
"0x22bec90e4739d8cc15bc14c49d7f757c5d3b639b27d90f6fadefc045469dd3f2",
"0xe6a6e0c0a4418828673c81df5a8c96f25ea8952b8c1879bf39cf3fd1a75b9973",
"0xf654c366d387c6a7a6231f73a41846a75041e98fca35e025f5aae54287186561",
"0xede976de05403fb6d32006401be7f43f61fa98dbb75e91b048d28bd256bd2495"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



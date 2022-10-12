require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind essay inflict clip olympic gift'; 
let testAccounts = [
"0x220830f17dd16d8f567476a2bfa7ee09828f309b681c3ff06b5d6bb52ca8c1be",
"0xc89437a60516238c93589791b9eb73c810bba7d0f06caf6fd499d0e4d456d913",
"0x2d9e93f53ed3ec82c1f72f64f561bc6acfed8e9fdb75fbb4ce7618287cb2d0c9",
"0xdf74ff2e0279b2153ef1cca43dbc27977e2dccdade6dc285e0d82e9e46236983",
"0x229d0a4fecd4e6f0122c67aa9241e736755cf86ad529dc3e0009fc42c6950137",
"0x3bd63e30cdbcbe9589a7bf72323c32c1ca50b8f99e92d5cee03220a1e386042f",
"0x72bc85c68a5dcc2638a5abc322bc5710f47ce15e9cbc8d8aca6fc49b05d65a46",
"0x97bef9fec71057ded02ace7ee75cc966ba82c2319b613a4b759680911b974d79",
"0xf622f3aa99a7b2bbc80163e13be86f5ef4bd2f6e7a7c9cc59908f68e32353828",
"0x0ec199656203a6e047572081fcd960a558ad0b61a5afac44f28bffe01adf7bc7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


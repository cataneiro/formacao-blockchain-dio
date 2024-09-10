//importando as dependencias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//definir a rede
//bitcoin - rede principal - mainnet
//testnet - rede de teste - tesnet4

const testnet4 = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,  // Base58 prefix for xpub on Testnet4
      private: 0x04358394  // Base58 prefix for xprv on Testnet4
    },
    pubKeyHash: 0x6f,      // P2PKH starts with 'm' or 'n'
    scriptHash: 0xc4,      // P2SH starts with '2'
    wif: 0xef              // Wallet Import Format prefix
  };

//derivação de carteiras HD
const path = `m/49'/1'/0'/0` 

//criando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da cartiera HD
let root = bip32.fromSeed(seed, testnet4)

//criando uma conta - par pvt-pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: testnet4,
}).address

console.log("Carteira gerada: ")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ", node.toWIF())
console.log("Seed: ", mnemonic)

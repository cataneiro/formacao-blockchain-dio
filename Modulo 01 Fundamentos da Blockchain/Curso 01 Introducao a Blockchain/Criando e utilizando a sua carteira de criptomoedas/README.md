Abra o Node.js

Crie uma pasta com qualquer nome: ex: "Wallet"
Crie uma pasta dentro de Wallet com o nome "src"
Crie o arquivo "CreateWallt.js"

Abra o terminal de coloque os seguintes comandos:

npm init -y
npm install bip39 bip32@2.0.6 bitcoinjs-lib --save

#########################

Importe o script do arquivo createWallet.js desse repositório no arquivo recém criado.

###########################

Edite o seguinte item do arquivo:

D:\Wallet\node_modules\bip174\package.json:15

de Type: "module" para "type"

##################

Salve os arquivos e aplique o comando:

node .\createWallet.js

#################

Resultado:

PS D:\WalletBTC\src> node .\createWallet.js
Carteira gerada:
Endereço:  mu1w2kiH1br8J2mdimmDzFeTGGUMModtoo
Chave privada:  cR76Xw2uaWoNiY1J3qskxJhTQnLHVCAYVFXEoyvd1rgMbdQq5rG9
Seed:  defense beef profit solar document wrap table gather pool chief subject desert

Obs.: Cada vez que for gerado esse comando, irá criar uma carteira nova.

########################

Baixar o Electrum e instalar

https://electrum.org/#download

Após instalado, configurar uma nova carteira

Carteira: wallet_BTC
Seeds:
electric actor celery candy sibling tube regular vehicle tissue begin spice acquire
Senha: 

#####################

Criar moedas BTC testnet e transferir para a carteira

https://bitcoinfaucet.uo1.net/

#################

Validar transação das moedas:

[https://live.blockcypher.com/btc-testnet/address/](https://live.blockcypher.com/btc-testnet/)
https://blockstream.info/testnet/






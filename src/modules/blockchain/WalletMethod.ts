// import { connectWallet, disconnectWallet } from '../../logic/action/wallet.actions'
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

export const getWeb3Instance = async (type: any) => {
	let web3 = new Web3(Web3.givenProvider);
	if (parseInt(type) === 1) {
		try {
			const provider: any = await detectEthereumProvider();
			/*---------------------------------------------------------------------*/
			let ethereum = provider;
			const data = [
				{
					chainId: '0x61',
					chainName: 'Binance Smart Chain',
					nativeCurrency: {
						name: 'BNB',
						symbol: 'BNB',
						decimals: 18,
					},
					rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
					blockExplorerUrls: ['https://bscscan.com/'],
				},
			];
			/*---------------------------------------------------------------------*/
			/* eslint-disable */
			const tx = await ethereum
				.request({ method: 'wallet_addEthereumChain', params: data })
				.catch();
			if (tx) {
				console.log(tx);
			}

			if (provider) {
				web3.eth.setProvider(provider);
			} else {
				window.alert('Please activate MetaMask first.');
			}
		} catch (error) {}
	}
	if (parseInt(type) === 2) {
		try {
			const provider: any = await window.ethereum;
			if (provider) {
				web3.setProvider(provider);
			}
		} catch (error) {}
	}

	return web3;
};

export const handleLogin = async (web3: any, type: any, dispatch: any) => {
	localStorage.setItem('walletType', type);
	try {
		const accounts = await web3.currentProvider.request({
			method: 'eth_requestAccounts',
		});
	} catch (error) {
		console.log('error==>', error);
	}
};

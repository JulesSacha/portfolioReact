import React from 'react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Wallet from '../artifacts/contracts/Wallet.sol/Wallet.json';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Form from '../components/Form';
import TokenEth from '../components/tokenEth';
import Signature from '../components/Signature';

let WalletAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function Contact() {
    const [balance, setBalance] = useState(0);
    const [amountSend, setAmountSend] = useState();
    const [account, setAccount] = useState('');
    const [amountWithdraw, setAmountWithdraw] = useState();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        getBalance();
    }, []);

    async function getBalance() {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(WalletAddress, Wallet.abi, provider);
            try {
                let overrides = {
                    from: accounts[0]
                }
                const data = await contract.getBalance(overrides);
                setBalance(String(data));
            }
            catch (err) {
                setError('Erreur lors de la récupération du solde');
            }
        }
    }
    async function transfer() {
        if (!amountSend) {
            return;
        }
        setError('');
        setSuccess('');
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            try {
                const tx = {
                    from: accounts[0],
                    to: WalletAddress,
                    value: ethers.utils.parseEther(amountSend)
                }
                const transaction = await signer.sendTransaction(tx);
                await transaction.wait();
                setAmountSend('');
                getBalance('');
                setSuccess('Merci beaucoup !');
            }
            catch (err) {
                setError('Une erreur est survenue');
            }


        }

    }

    async function withdraw() {
        if (!amountWithdraw) {
            return;
        }
        setError('');
        setSuccess('');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(WalletAddress, Wallet.abi, signer);
        try {
            const transaction = await contract.withdrawMoney(account, ethers.utils.parseEther(amountWithdraw));
            await transaction.wait();
            setAmountWithdraw('');
            getBalance();
            setSuccess(' Votre argent a bien été retiré du portfeuille');
        }
        catch (err) {
            setError('Errr');
        }

    }

    function changeAmountSend(e) {
        setAmountSend(e.target.value);
    }

    function changeAmountWithdraw(e) {
        setAmountWithdraw(e.target.value);
    }
    function changeAccount(e) {
        setAccount(e.target.value);
    }
    return (
        <div className="contact">

            <Navigation />
            <div className="contactContent">

                <div className="contactBox">

                    <h1>Contactez-moi !</h1>

                    <ul>

                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Strasbourg</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="+33 6 78 67 30 99">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié') }}>+33 6 78 67 30 99</span>
                            </CopyToClipboard>

                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="fernsner.j@gmail.com">
                                <span className="clickInput" onClick={() => { alert('Email copié') }}>fernsner.j@gmail.com</span>
                            </CopyToClipboard>

                        </li>

                    </ul>
                    <div className="eth_center">
                    <TokenEth />
                        <h3>Soutenez le Web 3</h3>
                        <input type="number" placeholder="Montant à envoyer" onChange={changeAmountSend} />
                        <button className="button" onClick={transfer}>Je participe</button>
                        {success && <h3 className="error">{success}</h3>}
                        {error && <p className="error">{error}</p>}
                        {/* <h2>{balance / 10 ** 18} eth</h2>
                            <h3>Retirer de l'ether</h3>
                            <input type="number" placeholder="Montant en ether" onChange={changeAmountWithdraw} />
                            <input type="text" placeholder="adresse" onChange={changeAccount} />
                            <button className="button" onClick={withdraw}>Retirer</button> */}
                    </div>

                    <Form />
                </div>
            </div>
            <Signature />
        </div>
    );
};

export default Contact;
# Web3WisdomWand

Web3WisdomWand is your go-to Node.js package for conducting thorough "Do Your Own Research" (DYOR) and crypto intelligence gathering. It offers easy access to the latest crypto news, in-depth token metrics, and market sentiment analysis.

## Features

- Fetch the latest crypto news.
- Analyze token metrics for informed decision-making.
- Assess the current market sentiment.

## Installation

npm install web3wisdomwand

## Usage

Create an instance of the Web3WisdomWand with your API key:

const Web3WisdomWand = require('web3wisdomwand');
const wand = new Web3WisdomWand('YOUR_API_KEY');

// Fetch latest crypto news
wand.fetchCryptoNews().then(console.log);

// Analyze a specific token
wand.analyzeToken('BTC').then(console.log);

// Get market sentiment
wand.getMarketSentiment().then(console.log);
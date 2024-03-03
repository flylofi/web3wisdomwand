const axios = require('axios');

class Web3WisdomWand {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.examplecryptoapi.com';
    }

    async fetchCryptoNews() {
        try {
            const response = await axios.get(`${this.baseUrl}/news`, {
                headers: { 'X-API-KEY': this.apiKey }
            });
            return response.data.articles;
        } catch (error) {
            console.error('Error fetching crypto news:', error);
            return [];
        }
    }

    async analyzeToken(tokenSymbol) {
        try {
            const response = await axios.get(`${this.baseUrl}/token/${tokenSymbol}/metrics`, {
                headers: { 'X-API-KEY': this.apiKey }
            });
            return response.data.metrics;
        } catch (error) {
            console.error(`Error analyzing token ${tokenSymbol}:`, error);
            return {};
        }
    }

    async getMarketSentiment() {
        try {
            const response = await axios.get(`${this.baseUrl}/sentiment`, {
                headers: { 'X-API-KEY': this.apiKey }
            });
            return response.data;
        } catch (error) {
            console.error('Error getting market sentiment:', error);
            return {};
        }
    }
}

module.exports = Web3WisdomWand;

import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

    class Tickers extends Component {

        constructor(props) {
            super(props);
            this.state = {
              data: [
                  {
                      id: "bitcoin",
                      name: "Bitcoin",
                      symbol: "BTC",
                      price_usd: "1",
                      percent_change_1h: "0",
                      percent_change_24h: "0",
                      percent_change_7d: "0",
                  },
                  {
                      id: "ethereum",
                      name: "Ethereum",
                      symbol: "ETH",
                      price_usd: "1",
                      percent_change_1h: "0",
                      percent_change_24h: "0",
                      percent_change_7d: "0",
                  },
                  {
                      id: "litecoin",
                      name: "Litecoin",
                      symbol: "LTC",
                      price_usd: "1",
                      percent_change_1h: "0",
                      percent_change_24h: "0",
                      percent_change_7d: "0",
                  }
              ]
          };
        }

        async fetchCryptocurrencyData() {
          try {
            let { data } = await axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10");
            let targets = ["bitcoin", "ethereum", "litecoin"];
            let result = data.filter(currency => targets.includes(currency.id));
            this.setState({data: result});
          }
          catch (err) {
            console.log(err);
          }
        }

        componentDidMount() {
          this.fetchCryptocurrencyData();
          this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 1000);
        }

        render() {
          let tickers = this.state.data.map((currency) =>
          <Cryptocurrency data={currency} key={currency.id} />
          );
            return (
                <div className="tickers-container">
                    <ul className="tickers">{tickers}</ul>
                    <p>Information updated every minute courtesy of coinmarketcap.com</p>
               </div>
            );
        }
    }

    export default Tickers;
	
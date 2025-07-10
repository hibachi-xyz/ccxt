import { hibachi } from '../../js/ccxt.js';
import fs from 'fs';

async function example () {
    const keys = JSON.parse(fs.readFileSync('keys.local.json', 'utf-8'));
    const exchange = new hibachi (keys.hibachi);
    exchange.verbose = true;

    const markets = await exchange.fetchMarkets();
    console.log ('fetchMarkets', markets.length, markets[0]);

    const currencies = await exchange.fetchCurrencies();
    console.dir (currencies, { depth: null, colors: true });

    const balance = await exchange.fetchBalance();
    console.dir (balance, { depth: null, colors: true });

    // In order to run this, please change it to a valid order ID
    // const cancelOrder = await exchange.cancelOrder('111111111111111111');
    // console.dir (cancelOrder, { depth: null, colors: true });
}
example ();

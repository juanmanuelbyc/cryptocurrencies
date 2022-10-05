import { useSelector } from 'react-redux';
import CryptoForHomePage from '../components/cryptoForHomePage';
import Facade from '../components/facade';
import cryptoImage from '../assets/cryptoImage.png';

const HomePage = () => {
  const cryptocurrencies = useSelector((state) => state.cryptosReducer);
  const odd = cryptocurrencies.filter((c, i) => i % 2 === 0);
  const even = cryptocurrencies.filter((c, i) => i % 2 === 1);
  return (
    <div className="homeContainer">
      <Facade
        topText="most important cryptos in the market"
        mainText="THE TOP 10 CRYPTOCURRENCIES"
        bottomText="LIST OF CRYPTOCURRENCIES"
        image={cryptoImage}
      />
      <div className="homePageCryptosContainer">
        <div className="homePageCryptosColumn1">
          {odd.length ? odd.map((crypto) => (
            <CryptoForHomePage
              className="column1"
              key={crypto.symbol}
              crypto={crypto}
            />
          ))
            : <p>No cryptocurrencies available!</p>}
        </div>
        <div className="homePageCryptosColumn2">
          {even.length ? even.map((crypto) => (
            <CryptoForHomePage
              className="column2"
              key={crypto.symbol}
              crypto={crypto}
            />
          ))
            : <p>No cryptocurrencies available!</p>}
        </div>
      </div>
    </div>
  );
};
export default HomePage;

import { useSelector } from 'react-redux';
import CryptoForHomePage from '../components/cryptoForHomePage';
import Facade from '../components/facade';
import cryptoImage from '../assets/cryptoImage.png';
import Filter from '../components/filter';

const HomePage = () => {
  const cryptocurrencies = useSelector((state) => state.cryptosReducer);
  const odd = cryptocurrencies.filter((c, i) => i % 2 === 0);
  const even = cryptocurrencies.filter((c, i) => i % 2 === 1);

  const facade = (
    <Facade
      topText="most important cryptos in the market"
      mainText="THE TOP 50 CRYPTOCURRENCIES"
      bottomText="LIST OF CRYPTOCURRENCIES"
      image={cryptoImage}
    />
  );

  if (cryptocurrencies) {
    return (
      <div className="homeContainer">
        {facade}
        <Filter />
        <div className="homePageCryptosContainer">
          <div className="homePageCryptosColumn1">
            {odd.length ? odd.map((crypto, i) => (
              <CryptoForHomePage
                key={crypto.symbol}
                crypto={crypto}
                index={i * 2}
              />
            ))
              : <p>Nothing to show</p>}
          </div>
          <div className="homePageCryptosColumn2">
            {even.length ? even.map((crypto, i) => (
              <CryptoForHomePage
                key={crypto.symbol}
                crypto={crypto}
                index={(i * 2) + 1}
              />
            ))
              : <p>Nothing to show</p>}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="homeContainer">
      {facade}
      <Filter />
      <div className="homePageCryptosContainer">
        <h2>NOTHING TO SHOW</h2>
      </div>
    </div>
  );
};
export default HomePage;

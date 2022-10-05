import { useSelector } from 'react-redux';
import Facade from '../components/facade';
import Detail from '../components/Detail';

const DetailsPage = () => {
  const cryptocurrencies = useSelector((state) => state.cryptosReducer);
  const index = useSelector((state) => state.detailsReducer);
  const cryptocurrency = cryptocurrencies[index - 1];
  const data = Object.entries(cryptocurrency).slice(4, 15);

  return (
    <div className="detailsContainer">
      <Facade
        topText="cryptocurrency details"
        mainText={cryptocurrency.name.toUpperCase()}
        bottomText="UPDATED STATISTICS"
        image={cryptocurrency.image}
      />
      {data.map((detail) => (
        <Detail
          key={detail[0]}
          title={detail[0]}
          value={detail[1]}
        />
      ))}
    </div>
  );
};

export default DetailsPage;

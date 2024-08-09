import Spinner from "../../Spinner/Spinner/Spinner.jsx";
import CityItem from "../CityItem/CityItem.jsx";
import Message from "../../Message/Message.jsx";

import styles from "./CityList.module.css";
import { useCities } from "../../../contexts/CitiesContext.jsx";

export default function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your first city" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

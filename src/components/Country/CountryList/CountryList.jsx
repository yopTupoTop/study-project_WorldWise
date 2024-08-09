import Spinner from "../../Spinner/Spinner/Spinner.jsx";
import CountryItem from "../CountryItem/CountryItem.jsx";
import Message from "../../Message/Message.jsx";

import styles from "./CountryList.module.css";
import { useCities } from "../../../contexts/CitiesContext.jsx";

export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your first city" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

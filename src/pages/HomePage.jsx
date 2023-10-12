import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = () => {
      axios
        .get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
          console.log(response.data);
          setCountries(response.data);
        })
        .catch((error) => {
          console.error("Not Found", error);
        });
    };

    fetchCountries();
  }, []);

  if (!countries) return <div>Loading...</div>;

  return (
    <div>
      <h2>Country List</h2>
      <ul className="ul-countries">
        {countries ? (
          countries.map((country) => (
            <li key={country._id} className="li-countries">
              <Link to={`/${country.alpha3Code}`}>
                <div className="country-container">
                  <img
                    className="country-image"
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`Flag of ${country.name.official}`}
                  />

                  {country.name.official}
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>loading...</p>
        )}
      </ul>
    </div>
  );
}

export default HomePage;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        console.log("Line 13", response.data);
        setCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country details", error);
      });
  }, [countryId]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h3 className="country-details-title">Country Details</h3>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt={`Flag of ${country.name.official}`}
        />

        <h4>{country.name.official}</h4>

        <div className="details-container">
          <ul>
            <li className="details-bold">Capital:</li>
            <li>{country.capital}</li>
            <li className="details-bold">Area:</li>
            <li>{country.area}</li>
            <li className="details-bold">Border:</li>
            <ul>
              {country.borders.map((border) => (
                <Link to={`/${border}`}>
                  <li>{border}</li>
                </Link>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;

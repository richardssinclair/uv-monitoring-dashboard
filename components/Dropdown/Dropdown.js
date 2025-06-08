import styles from "./Dropdown.module.scss";

const Dropdown = ({ selectedCity, setSelectedCity, locations }) => {
  return (
    <div className={styles.dropdownContainer}>
      <p>Choose a location</p>
      <select
        className={styles.dropdown}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        id="city-select"
      >
        <option value="">-- Select a city --</option>
        {locations.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

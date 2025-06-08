import styles from "./Dropdown.module.scss";

const Dropdown = ({ selectedCity, setSelectedCity, locations }) => {
  return (
    <div className={styles.dropdownContainer}>
      <h2>Choose a location</h2>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        style={{ width: "30%", padding: "8px" }}
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
}

export default Dropdown;

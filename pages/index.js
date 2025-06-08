import { useEffect, useState } from "react";
import { fetchGeoData } from "../lib/geoCoding";
import { fetchUVData } from "../lib/fetchUVData";
import UVChart from "../components/UVChart";
import UVCurrent from "../components/UVCurrent";
import Dropdown from "../components/Dropdown";
import UVImage from "@/components/UVImage";
import { london, canterbury, lisbon, narobi } from "../lib/data";

const LOCATIONS = ["London", "Canterbury", "Lisbon", "Nairobi"];

// Added Mock Data flag to not max out API calls during development
const useMockData = process.env.MOCK_DATA;
// Change values to 1, 4, 7, 11, 12 to test different UV index levels for UVImage and UVCurrent
const testVal = '1';

const mockUVData = {
  London: london[0],
  Canterbury: canterbury[0],
  Lisbon: lisbon[0],
  Nairobi: narobi[0],
};

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("London");
  const [geoData, setGeoData] = useState(null);
  const [uv, setUv] = useState(null);

  // Checks Selected city and fetched data from API or mock data
  useEffect(() => {
    if (!selectedCity) return;

    async function getData() {
      if (useMockData) {
        const uvData = mockUVData[selectedCity];
        if (uvData) setUv({ result: uvData });
      } else {
        const geo = await fetchGeoData(selectedCity);
        setGeoData(geo);
        if (!geo) return;
        const uvData = await fetchUVData(geo.lat, geo.lng);
        if (uvData) setUv(uvData);
      }
    }

    getData();
  }, [selectedCity]);

  // limits time on the UVCurrent to past day only
  function getClosestUV(data) {
    const now = new Date();
    return data.reduce((closest, item) => {
      const itemTime = new Date(item.uv_time);
      const closestTime = new Date(closest.uv_time);
      return Math.abs(itemTime - now) < Math.abs(closestTime - now)
        ? item
        : closest;
    });
  }

  // limits time on the chart to past day only
  function getPastUV(data) {
    const now = new Date();
    return data.filter((item) => new Date(item.uv_time) <= now);
  }

  return (
    <main>
      <div className="container">
        <div className="col-one">
          <Dropdown
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            locations={LOCATIONS}
          />
          {uv && <UVChart data={uv.result} />}
          {/* Comment out other UVCurrent and UVImage and change testVal at top of this file */}
          {/* <UVCurrent value={testVal} /> */}
          {uv !== null && <UVCurrent value={getClosestUV(uv.result).uv} />}
        </div>
        <div className="col-two">
          {/* <UVImage value={testVal} /> */}
          {uv !== null && <UVImage value={getClosestUV(uv.result).uv} />}
        </div>
      </div>
    </main>
  );
}

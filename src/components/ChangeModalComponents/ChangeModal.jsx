import { FaSearchLocation } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
// Context
import WeatherContext from "../context/WeatherContext";
function ChangeModal() {
  // Get context function
  const { fetchWeather, fetchWeatherDays, lat, lon, setLocation } =
    useContext(WeatherContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text != "") {
      setLocation(text);
      fetchWeather(text);
      localStorage.setItem("location", text);
    }
  };
  useEffect(() => {
    fetchWeatherDays(lat, lon);
  }, [lat]);
  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="my-modal-2"
        className="btn glass btn-block rounded-3xl modal-button"
      >
        <span>
          <FaSearchLocation className="mr-2" size="20px" />
        </span>
        Change Location
      </label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          {/* INPUT BOX */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Search Location</span>
            </label>
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Country"
              className="input input-bordered"
            />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Change Location
            </button>
            <label htmlFor="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ChangeModal;

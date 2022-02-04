import MainWeather from "./components/MainWeather";
import WeatherDetails from "./components/WeatherDetails";
// Import Context Provider

function App() {
  return (
    <div className="App container flex h-screen m-auto">
      <div className="container m-auto  rounded-xl   w-[60%] h-[65%] grid grid-cols-2">
        <MainWeather />
        <WeatherDetails />
      </div>
    </div>
  );
}

export default App;

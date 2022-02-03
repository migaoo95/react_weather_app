import MainWeather from "./components/MainWeather";
import WeatherDetails from "./components/WeatherDetails";
function App() {
  return (
    <div className="App container flex h-screen">
      <div className="container m-auto bg-black shadow-2xl rounded-xl   w-1/2 h-1/2 grid grid-cols-2">
        <MainWeather />
        <WeatherDetails />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import bg from "./weather.jpg";
import Info from "./components/Info/Info";
import TextBox from "./components/TextBox/TextBox";

const myStyle = {
  backgroundImage: `url(${bg})`,
  width: "100%",
  height: "100vh",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

// const getWeatherData = (city) => {
//   console.log("getting weather for ", city);
// };

function App() {
  // const data = getWeatherData();
  const data = {
    temp: 6.66,
    min: 6.66,
    max: 6.66,
  };

  return (
    <div className="App flex-col" style={myStyle}>
      <TextBox getWeatherData={data} />
      <Info data={data} />
    </div>
  );
}

export default App;

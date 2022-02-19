export default function Info({ data }) {
  return (
    <div className="App">
      <h3> Temperature {data.temp}C </h3>
      <br />
      <h4>Min {data.min}C</h4>
      <h4> Max {data.max}C</h4>
    </div>
  );
}

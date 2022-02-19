export default function TextBox() {
  const processCity = (e) => {
    const city = document.getElementById("cityNameText").value;
    if (e.code === "Enter") {
      console.log("current city: ", city);
    }
  };
  return (
    <>
      <input
        type="text"
        style={{
          width: "30%",
          border: "none",
          textAlign: "center",
          padding: "1rem",
          borderRadius: "1rem",
        }}
        placeholder="enter city"
        id="cityNameText"
        onKeyUp={processCity}
      ></input>
    </>
  );
}

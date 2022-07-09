import Routers from "./routes";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(wave-haikei_orange.svg)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Routers />
    </div>
  );
}
export default App;

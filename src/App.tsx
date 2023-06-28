import IOSRamUsage from "./components/IOSRamUsage";
import ImageAndPrediction from "./components/ImageProcessing";
import LoadModel from "./components/LoadModel";
import PredictionProcessing from "./components/PredictionProcessing";

const style: React.CSSProperties = { marginBottom: "120px" };

function App() {
  return (
    <>
      <div style={style}>
        <LoadModel />
      </div>
      <div style={style}>
        <ImageAndPrediction />
      </div>
      <div style={style}>
        <PredictionProcessing />
      </div>
      <div style={style}>
        <IOSRamUsage />
      </div>
    </>
  );
}

export default App;

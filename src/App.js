import { Slider } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Box from "./Box/Box";
import { SketchPicker } from "react-color";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(8);
  const [blur, setBlur] = useState(32);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("rgba(31, 38, 135, 0.4)");

  return (
    <div className="app">
      <div className="controls">
        <h1>Box Shadow Generator</h1>

        <div className="controls_input">
          <div className="controls__grp">
            <h3>X:</h3>
            <input type="text" value={x} />
          </div>
          <Slider
            value={x}
            onChange={(e, val) => setX(val)}
            min={-200}
            max={200}
          />
        </div>

        <div className="controls_input">
          <div className="controls__grp">
            <h3>Y:</h3>
            <input type="text" value={y} />
          </div>
          <Slider
            value={y}
            onChange={(e, val) => setY(val)}
            min={-200}
            max={200}
          />
        </div>

        <div className="controls_input">
          <div className="controls__grp">
            <h3>Blur:</h3>
            <input type="text" value={blur} />
          </div>
          <Slider
            value={blur}
            onChange={(e, val) => setBlur(val)}
            min={-200}
            max={200}
          />
        </div>

        <div className="controls_input">
          <div className="controls__grp">
            <h3>Spread:</h3>
            <input type="text" value={spread} />
          </div>
          <Slider
            value={spread}
            onChange={(e, val) => setSpread(val)}
            min={-200}
            max={200}
          />
        </div>
        <div className="controls_input">
          <SketchPicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </div>
      </div>
      <Box x={x} y={y} blur={blur} spread={spread} color={color} />
    </div>
  );
}

export default App;

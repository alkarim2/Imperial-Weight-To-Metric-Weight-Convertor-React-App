//React app that takes an imperial weight as input and outputs the metric weight conversion
import './App.css';
import { useState } from 'react';

function App() {
    const [imperialValue, setImperialValue] = useState(0);
    const [metricValue, setMetricValue] = useState(0);

    const handleChange = (e) => {
      setImperialValue(e.target.value);
      setMetricValue(e.target.value*0.454)
    };

    return (
      <>
           <label>
              Imperial weight in lbs:
              <input
                value={imperialValue}
                onChange={handleChange}
                type="number"
              />
           </label>
           <p>Metric weight is {metricValue} kgs.</p>
      </> 
    );
}

export default App;
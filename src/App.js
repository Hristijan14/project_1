import "./App.css";
import Home from "./components/home/Home";
import Killer from "./components/killer/Killer";
import Survivor from "./components/survivor/Survivor";
import { Route, Routes } from "react-router-dom";
import KillerCardDetails from "./components/killerCardDetails/KillerCardDetails";
import KillerPerks from "./components/killerPerks/KillerPerks";
import SurvivorCardDetails from "./components/survivorCardDetails/SurvivorCardDetails";
import SurvivorPerks from "./components/survivorPerks/SurvivorPerks";
import KillerPowerAddOns from "./components/killerPowerAddOns/KillerPowerAddOns";
import SurvivorItems from "./components/survivorItems/SurvivorItems";
import SurvivorItemsAddOns from "./components/survivorItemsAddOns/SurvivorItemsAddOns";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/killers" element={<Killer />} />
        <Route path="/killers/:code" element={<KillerCardDetails />} />
        <Route path="/killers/:code/addons" element={<KillerPowerAddOns />} />
        <Route path="/killers/perks" element={<KillerPerks />} />
        <Route path="/survivors" element={<Survivor />} />
        <Route path="/survivors/:scode" element={<SurvivorCardDetails />} />
        <Route path="/survivors/perks" element={<SurvivorPerks />} />
        <Route path="/survivors/items" element={<SurvivorItems />} />
        <Route
          path="/survivors/items/addons"
          element={<SurvivorItemsAddOns />}
        />
      </Routes>
    </div>
  );
}

export default App;

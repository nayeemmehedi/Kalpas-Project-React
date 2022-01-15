import React from "react";
import RoutingValue from "./Practice2/Routing/RoutingValue";
import FirstContext from "./Practice2/ContextValue/FirstContext";
import SecendKalpasContext from "./Practice2/ContextValue/SecendKalpasContext";
import ThirdFormContext from "./Practice2/ContextValue/ThirdFormContext";

function App() {
  return (
    <div className="bg-danger">
      <FirstContext>
        <SecendKalpasContext>
          <ThirdFormContext>

            <RoutingValue />
            
          </ThirdFormContext>
        </SecendKalpasContext>
      </FirstContext>
    </div>
  );
}

export default App;

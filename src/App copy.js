import React from "react";
import PhoneForm from "./components/PhoneForm";

function App() {
  handleCreate = (e) => {
    return e;
  };

  return (
    <div className="App">
      <PhoneForm onCreate={this.handleCreate} />
    </div>
  );
}

export default App;

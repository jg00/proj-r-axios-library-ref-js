import Title from "./components/Title";
// import Setup from "./examples/1-first-request";
// import Setup from "./examples/2-headers";
// import Setup from "./examples/3-post-request";

// Global Defaults - axios.defaults.___
// import Setup from "./examples/4-global-instance";
// import "./axios/global"; // not the axios library rather the global.js file.  Because we invoke it here now we have global properties.

// Custom Instance - axiios.create({..})
// import Setup from "./examples/5-custom-instance";

// Interceptors
import Setup from "./examples/6-interceptors";

function App() {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  );
}

export default App;

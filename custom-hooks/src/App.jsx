import FetchComponent from "./components/FetchComponent";
import FormComponent from "./components/FormComponent";
import ToggleComponent from "./components/ToggleComponent";

const App = () => {
  return (
    <div>
      <h1>Custom Hooks Examples:</h1>
      <ToggleComponent />
      <FormComponent />
      <FetchComponent />
    </div>
  );
};

export default App;

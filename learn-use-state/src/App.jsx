import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <>
      <Counter />
      <ToDoList />
      <Profile />
      <ShoppingList />
    </>
  );
};

export default App;

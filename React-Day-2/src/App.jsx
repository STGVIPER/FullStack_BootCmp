import Counter from "./Counter";
import ToggleText from "./ToggleText";
import ColorChanger from "./ColorChanger";
import InputMirror from "./InputMirror";
import LikeButton from "./LikeButton";
import MultiForm from "./MultiForm";

const App = () => {
  return (
    <div className="app">
      <h1>React Day 2 — useState Practice</h1>
      <p className="subtitle">5 useState examples + Form Handling</p>

      <div className="grid">
        <Counter />
        <ToggleText />
        <ColorChanger />
        <InputMirror />
        <LikeButton />
      </div>

      <MultiForm />
    </div>
  );
};

export default App;

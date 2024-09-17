import AppName from "./components/AppName";
import EnterTodo from "./components/EnterTodo";
import FirstTodo from "./components/FirstTodo";
import SecondTodo from "./components/SecondTodo";
import "./App.css";
function App() {
  return (
    <>
      <div className="container text-center mt-5 card-body">
        {/* 1st component heading name */}
        <div className="card">
        <div className="card-body">
        <AppName></AppName>
        <EnterTodo></EnterTodo>
        <FirstTodo></FirstTodo>
        <SecondTodo></SecondTodo>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;

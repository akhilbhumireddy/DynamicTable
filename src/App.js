import DynamicTable from "./components/DynamicTable";
import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="table-container">
        <h1 className="table-title">Dynamic Table</h1>
        <DynamicTable />
      </div>
    </main>
  );
}

export default App;

import FilterPanel from "./features/filter/FilterPanel";
import JobList from "./features/positions/JobList";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
};

export default App;

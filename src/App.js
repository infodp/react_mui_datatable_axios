import './App.css';
import { TableAxios } from './tables/TableAxios';
import { TableBasic } from './tables/TableBasic';
import { TableJson } from './tables/TableJson';
import { ThemeDark } from "./layout/themeDark.js ";

function App() {
  return (
    <div className="App">     
      {/* use data array */}
      <TableBasic />
      {/*  use data file json */}
      <TableJson />
      {/* apply dark style */}
      <ThemeDark>
        <TableAxios />
      </ThemeDark>  
    </div>
  );
}

export default App;

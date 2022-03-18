import './App.css';
import { TableAxios } from './tables/TableAxios';
import { TableBasic } from './tables/TableBasic';
import { TableJson } from './tables/TableJson';

function App() {
  return (
    <div className="App">
     <TableBasic />
     {/* <TableJson /> */}
     {/* <TableAxios /> */}
    </div>
  );
}

export default App;

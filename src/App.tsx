import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './components/Main';
import Sidebar from './Layout/Sidebar';
import ProductEdit from './components/ProductEdit'; 
import Navbar from './components/Navbar/Navbar';
import TransactionTable from './components/Navbar/Table/Table';

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* <Header /> */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 p-4 flex-col overflow-y-scroll">
      <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
              <Route path="/productTable" element={<TransactionTable />} />
              <Route path="/productedit" element={<ProductEdit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

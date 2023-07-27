import Auth from "./Component/Auth/Auth";

import { Routes, Route } from 'react-router-dom';
import Home from "./Component/Home/Home";

function App() {




  return (
   

    <Routes>
      <Route path="/" element={ <Auth/>} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;


import { useEffect, useState, createContext } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';
// import { useSelector, useDispatch } from 'react-redux';
// import reducer from './redux/reducer';
// import {invokeApiAction} from './redux/actions';
export let AppContext = createContext();


function App() {
  let [list, setList] = useState([]);

  // const dispatch =useDispatch();
  // const list=useSelector(s=>s.reducer.post)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(data => {
        setList([...data]);
        console.log(data);  
      });
  }, [])

  // dispatch(invokeApiAction());
  console.log("redux>>",list);

  return (
    <div className="App">

       <AppContext.Provider value={[list]}>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/:id' element={<Detail />}/>
          </Routes>
        </div>
      </AppContext.Provider> 
    </div>
  );
}

export default App;

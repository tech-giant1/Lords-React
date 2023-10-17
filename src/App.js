import './App.css';
import MainApp from './Components/MainApp';
import ROUTES from './Constants/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/Home';
import AddStudent from './Pages/AddStudent/AddStudent';
import { useState } from 'react';
import About from './Pages/About/About';

function App() {
  const [studentList, setStudentList] = useState([])

  const addStudent = (student) => {
    setStudentList([...studentList, student])
  }

  return (
    <BrowserRouter>
      <MainApp>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage studentList={studentList} />} />
          <Route path={ROUTES.addStudent} element={<AddStudent addStudent={addStudent} />} />
          <Route path={ROUTES.aboutUs} element={<About />} />
        </Routes>
      </MainApp>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ShowAllTask from './screens/ShowAllTask';
import AddTask from './screens/AddTask';
import UpdateTask from './screens/UpdateTask';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Showalltask" element={<ShowAllTask />} />
        <Route path="/Addtask" element={<AddTask />} />
        <Route path="/Updatetask/:id" element={<UpdateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing_Page from './Landing_Page';
import Layout from './Layout';
import View_Puppies from './View_Puppies';
import Learn_More from './Learn_More';
import Slider from './Slider';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_Page />}></Route>
        <Route element={<Layout />}>
          <Route path="/view_puppies" element={<View_Puppies />}></Route>
          <Route
            path="/learn_more"
            element={
              <Slider>
                <Learn_More />
              </Slider>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

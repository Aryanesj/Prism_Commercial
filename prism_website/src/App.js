import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Aos from "aos";
import "aos/dist/aos.css";
import styles from './globalStyle.module.scss';

const App = () => {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className={styles.wrap}>
      <main className={styles.main}>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

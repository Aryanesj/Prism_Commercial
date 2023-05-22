import React from 'react'
import Header from './components/modules/Header'
import Home from './components/pages/Home'
import { Routes, Route } from 'react-router-dom'
import styles from './globalStyle.module.scss';

const App = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <h1>PRISM Website</h1>
      <main className={styles.main}>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


// pagina Home do Next.js

import Head from 'next/head';
// import 'axios';
import { SearchBar } from '../components/SearchBar';
import { DataTable }  from '../components/DataTable'
import { Footer }  from '../components/Footer';
import { ApiData } from '../api/api';
// const ApiData = require('../src/api/api.js');
import { DrawerComponent } from '../components/Drawer';
import { useState } from 'react';
import { 
  Security, 
  Person, 
  Tune, 
  Home, 
  Settings,
  PowerSettingsNew } from '@material-ui/icons';

import styles from '../styles/pages/Home.module.css';

const rows =  ApiData();

export default function HomePage(props) {
  const [openDrawer, SetOpenDrawer] = useState(false);

  const toogleDrawer = () => {
      SetOpenDrawer(!openDrawer);
  }

  return (
  <div className={styles.container}>
    <Head>
      <title>Frontend Storm Group</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500&display=swap" 
      rel="stylesheet" /> 
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>

    <div className={ styles.navbar }>
      <div className={ styles.navLeft }>
        {/* <svg viewBox="0 0 42px 32px"></svg> */}
        <img src="assets/symbol.svg" alt="symbol icon"/>
        {/* <div className={ styles.barLeft }></div> */}
        <div>
          <button>
            <Security style={{ fontSize: 20 , color: "var(--gray-icon)" }}/>
          </button>
          <button>
            <Person style={{ fontSize: 20 , color: "white" }} />
          </button>
        </div>
        <SearchBar />
      </div>

      <div className={ styles.navRight }>  
          <button onClick={ toogleDrawer }>
            <Tune style={{ fontSize: 20 , color: "var(--gray-icon)" }}/>
          </button>
          <button>
            <Person style={{ fontSize: 20 , color: "white" }} />
            <span>INCLUIR USUÁRIO</span>
          </button>
          {/* <div className={ styles.dividerRight }></div> */}
          <div className={ styles.icons }>
            <Home />
            <Settings />
            <PowerSettingsNew />
          </div>
      </div>
    </div>
    <DrawerComponent open = { openDrawer } toogleDrawer = { toogleDrawer } />
    <DataTable rowsData = { rows } margin={ 40 } />
    <div className={ styles.pagination}>
      <button disabled>Primeiro</button>
      <button disabled>Anterior</button>
      <button className={ styles.currentPage }>1</button>
      <button disabled>Próximo</button>
      <button disabled>Último</button>
    </div>
    <Footer />

  </div>
)}

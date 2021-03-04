// pagina Home do Next.js

import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { SearchBar } from '../components/SearchBar';
import { DataTable }  from '../components/DataTable'
import { Security } from '@material-ui/icons/Security';


export default function Home(props) {
  return (
  <div className={styles.container}>
    <Head>
      <title>Frontend Storm Group</title>
      <link rel="stylesheet" 
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>

    <div className={ styles.navbar }>

      <div className={ styles.navLeft }>
        <img src="assets/symbol.svg" alt="symbol icon"/>
        <div>
          <button>
            <img src="assets/security-24px.svg" alt="security icon"/>
          </button>
          <button>
            <img src="assets/person-24px.svg" alt="person icon"/>
          </button>
        </div>
        <SearchBar />
      </div>

      <div className={ styles.navRight }>  
          <button>
            <img src="assets/tune-24px.svg" alt="tune icon"/>
          </button>
          <button>
              <img src="assets/person-24px.svg" alt="person icon"/>
              <span>INCLUIR USUÁRIO</span>
          </button>
          <div>
            <img src="assets/home-24px.svg" alt="home icon"/>
            <img src="assets/settings-24px.svg" alt="settings icon"/>
            <img src="assets/power_settings_new-24px.svg" alt="power icon"/>
          </div>
      </div>
    </div>
    
    <DataTable />

  </div>
)}

import { Drawer } from '@material-ui/core';
import { DateRange, HdrStrong, ArrowDropDown, Close, Tune } from '@material-ui/icons';

import styles from '../styles/components/Drawer.module.css';

export function DrawerComponent(props) {
    return (
    <Drawer
      anchor='right'
      open={props.open}
    >
      <div className={ styles.drawerContainer }>
        <div className= { styles.navDrawer }>
          <div>
            <Tune style={{ fontSize: 24 , color: "var(--light-gray)" }}/>
            <span>FILTROS</span>
          </div>
          <button onClick={ props.toogleDrawer }>
            <Close style={{ fontSize: 20 , color: "var(--gray-icon)" }} />
          </button>
        </div>
        <div className={ styles.drawerBody }>
          
          <div className={ styles.drawerMessage }>
            <p>
              Utilize os filtros abaixo para refinar os resultados da tabela, 
              clique no botão APLICAR para salvar as alterações.
            </p>
          </div>

          <div className={ styles.drawerOptions }>
            <div className={ styles.optionsContainer }>
              <div>
                <DateRange style={{ fontSize: 20 , color: "var(--light-gray)" }}/>
                <span>TODAS AS DATAS DE INCLUSÃO</span>
              </div>
              <button>
                <ArrowDropDown style={{ fontSize: 20 , color: "var(--light-gray)" }}/>  
              </button>
            </div>

            <div className={ styles.optionsContainer }>
              <div>
              <DateRange style={{ fontSize: 20 , color: "var(--light-gray)" }}/>
              <span>TODAS AS DATAS DE ALTERAÇÃO</span>
              </div>
              <button>
                <ArrowDropDown style={{ fontSize: 20 , color: "var(--light-gray)" }}/>  
              </button>
            </div>

            <div className={ styles.optionsContainer }>
              <div>
                <HdrStrong style={{ fontSize: 20 , color: "var(--light-gray)" }}/>
                <span>ATIVOS E INATIVOS</span>
              </div>
              <button>
                <ArrowDropDown style={{ fontSize: 20 , color: "var(--light-gray)" }}/>  
              </button>
            </div>
            <button className={ styles.btnAplicar } disabled>APLICAR</button>
          </div>

        </div>
        
      </div>
    </Drawer>
    )
}
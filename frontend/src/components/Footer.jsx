import { RadioButtonChecked, Tv, Update, } from '@material-ui/icons';
import styles from '../styles/components/Footer.module.css';

export function Footer() {
    return(
        <div className={ styles.container }>
            <div className={ styles.footerLeft }>
                <div className={ styles.noAr }>
                    <RadioButtonChecked />
                    <p>NO AR</p>
                </div>
                <div className={ styles.encontro }>
                    <div>
                        <Tv/>
                        <p>ENCONTRO - 10:00</p>
                    </div>
                    <div>
                        <Update />
                        <p>Última atualização em 10:28</p>
                    </div>
                </div>
            </div>
            <div className={ styles.footerRight }>
                <span className= {styles.data}>
                Quinta, 
                <strong> 30 </strong> de
                <strong> Maio</strong> de 
                <strong> 2019</strong>
                </span>
                <span>// 10:30:42</span>
            </div>
        </div>
    )
}
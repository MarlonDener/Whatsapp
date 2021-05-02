import React from 'react'
import styles from './styles/ChatIntro.module.css'

export default () => {
    return(
        <div className={styles.chatIntro}>
            <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="Intro Whatsapp" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O whtasApp conecta seu telefone para sincronizar sas mensagens.<br />Para reduzir o uso de dadosm conecte sue telefone  auma rede Wifi</h2>
        </div>
    );
}
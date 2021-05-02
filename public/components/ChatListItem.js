import styles from './styles/Chat.module.css'
import React from 'react'

export default ({onClick, active}) =>{
    const activeClass = active ? styles.active : '';
    return(
        <div className={`${styles.chatlistItem} ${activeClass}`} onClick={onClick}>
            <img className={styles.chatListItem_avatar} src="https://www.w3schools.com/howto/img_avatar2.png" alt="Mulher"/>
            <div className={styles.chatListItem_lines}>

                <div className={styles.chatListItem_line}>
                    <div className={styles.chatListItem_name}>Marlon Dener</div>
                    <div className={styles.chatListItem_date}>18:00</div>
                </div>

            <div className={styles.chatListItem_line}>
                <div className={styles.chatListItem_lastMessage}>
                    <p>Opa, tudo bem coomo voce vai fazer pra irsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddd pra casa da namorada amanhassssssssssssssssssssssssssssssssssssssssss?</p>
                </div>
            </div>
          </div>
        </div>
    );
}
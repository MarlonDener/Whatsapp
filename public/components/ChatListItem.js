import styles from './styles/Chat.module.css'
import React, {useState, useEffect} from 'react'

export default ({onClick, active, data}) =>{
    const [time, setTime] = useState('');

    useEffect(() => {
        if(data.lastMessageDate > 0){
            let d = new Date(data.lastMessageDate.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            setTime(`${hours}:${minutes}`); 
        }
           }, [data])

    const activeClass = active ? styles.active : '';
    return(
        <div className={`${styles.chatlistItem} ${activeClass}`} onClick={onClick}>
            <img className={styles.chatListItem_avatar} src={data.image} alt="Mulher"/>
            <div className={styles.chatListItem_lines}>

                <div className={styles.chatListItem_line}>
                    <div className={styles.chatListItem_name}>{data.title}</div>
                    <div className={styles.chatListItem_date}>{time}</div>
                </div>
        {console.log(data)}
            <div className={styles.chatListItem_line}>
                <div className={styles.chatListItem_lastMessage}>
                    <p>{data.lastMessage}</p>
                </div>
            </div>
          </div>
        </div>
    );
}
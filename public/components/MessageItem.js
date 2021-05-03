import React from 'react';
import styles from './styles/MessageItem.module.css';


const MessageItem = ({data, user}) => {
    return(
        <div className={styles.messageLine}
        style={{justifyContent: user.id === data.autor ? 'flex-end' : 'flex-start'}}>
                <div className={styles.messageItem}
                style={{backgroundColor: user.id === data.autor ? '#DCF8C6' : '#FFF'}}>
                    <div className={styles.messageText}> {data.body}</div>
                    <div className={styles.messageDate}>19/05/01</div>
                </div>
        </div>
    );
}

export default MessageItem;
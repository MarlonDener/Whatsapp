import React, { useState } from 'react'
import styles from './styles/NewChat.module.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NewChat = ({user, chatlist, show, setShow}) =>{

    const [list, setList] = useState([
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Lima santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Lima santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Marcia santos'}
    ]);

    const handleClose = () =>{
        setShow(false);
    }

    return(
        <div className={styles.newChat} style={{left:show ? '0px' : '-415px'}}>
            <div className={styles.newChat_head}>
                <div className={styles.newChat_backbutton}
                
                onClick={handleClose}

                >
                    <ArrowBackIcon style={{color:'#FFF'}}/>
                </div>
                <div className={styles.newChat_headtitle}>
                    Nova conversa
                </div>
            </div>

            <div className={styles.newChat_list}>
                    {list.map((item,key) => (
                        <div className={styles.newChat_item} key={key}>
                             <img src={item.avatar} alt={item.key} className={styles.newChat_itemavatar} />
                             <div className={styles.newChat_itemname}>{item.name}</div>   
                        </div>
                    ))}
            </div>
        </div>
    );

}
export default NewChat;
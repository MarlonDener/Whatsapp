import React, { useState, useEffect } from 'react'
import styles from './styles/NewChat.module.css'

import ApiFirebase from '../../src/ApiFirebase'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NewChat = ({user, chatlist, show, setShow}) =>{

    const [list, setList] = useState([
    ]);

    useEffect(() => {
        const getList = async () =>{
            if(user !== null){
                let results = await ApiFirebase.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    },[user])

    const handleClose = () =>{
        setShow(false);
    }

    const addNewChat = async(user2) =>{
        await ApiFirebase.addNewChat(user, user2);

        handleClose();
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
                        <div onClick={() => addNewChat(item)} className={styles.newChat_item} key={key}>
                             <img src={item.avatar} alt={item.key} className={styles.newChat_itemavatar} />
                             <div className={styles.newChat_itemname}>{item.name}</div>   
                        </div>
                    ))}
            </div>
        </div>
    );

}
export default NewChat;
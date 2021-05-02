import React from 'react'
import styles from './styles/ChatWindow.module.css'

import SearchIcon from '@material-ui/icons/Search'
import AttachIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export default () => {
    return(
        <div className={styles.chatWindow}>

            <div className={styles.chatWindow_header}>

                    <div className={styles.chatWindow_header_info}>
                        <div className={styles.image}>
                            <img className={styles.ChatWindow_avatar} src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
                        </div>

                        <div className={styles.chatWindow_name}>Marlon Dener</div> 
                        
                    </div>

                    <div className={styles.chatWindow_headerbuttons}>
                        <div className={styles.chatWindow_btn}>
                                <SearchIcon style={{color:'#919191'}}/>
                                <AttachIcon style={{color:'#919191'}}/>
                                <MoreVertIcon style={{color:'#919191'}}/>
                        </div>
                    </div>

            </div>

            <div className={styles.chatWindow_body}>sds</div>

            <div className={styles.chatWindow_footer}></div>


        </div>
    );
}
import React, {useState, useEffect, useRef} from 'react'
import MessageItem from './MessageItem'
import ApiFirebase from '../../src/ApiFirebase'

//import Picker from 'emoji-picker-react';

{/* Icones */}
import SearchIcon from '@material-ui/icons/Search'
import AttachIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'

{/*Estilo */}
import styles from './styles/ChatWindow.module.css'

//user | usuarios -- e a data informações do perfil que puxa do index.js
const ChatWindow = ({user, data}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);

    const onEmojiClick = (e, emojiObject) =>{
            setText(text + emojiObject.emoji);
    }
    const openEmoji = () => {
           setEmojiOpen(true); 
    }
    const closeEmoji = () =>{
        setEmojiOpen(false);
    }
    const InputKeyUp = (e) =>{
        if(e.keyCode == 13){
            handleSendClick();
        }
    }

    const handleSendClick = () =>{
        if(text != ''){
            ApiFirebase.SendMessage(data, user.id, 'text', text);
            setText('');
            setEmojiOpen(false);
        }
    }

    const handleMicClick = () =>{

        if(recognition !== null){
            recognition.onstart = () =>{
                   setListening(true); 
            }
            recognition.onend = () =>{
                setListening(false);
            }
            recognition.onresult = (e) =>{
                setText( e.results[0][0].transcript );
            }
            recognition.start();
        }
    }
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([]);
    
        
        useEffect(()=>{ 
            if(body.current.scrollHeight > body.current.offsetHeight){
                body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
            }
        },[list]);


        useEffect(() =>{

            setList([]);

            let unsub = ApiFirebase.ConteudoDoChat(data.chatId, setList);
            return unsub;

        },[data.chatId]); 


    return(
        <div className={styles.chatWindow}>

            <div className={styles.chatWindow_header}>

                    <div className={styles.chatWindow_header_info}>
                        <div className={styles.image}>
                            <img className={styles.ChatWindow_avatar} src={data.image} alt="avatar" />
                        </div>

                        <div className={styles.chatWindow_name}>{data.title}</div> 
                        
                    </div>

                  <div className={styles.chatWindow_headerbuttons}>
                        <div className={styles.chatWindow_btn}>
                                <SearchIcon style={{color:'#919191'}}/>
                                <AttachIcon style={{color:'#919191'}}/>
                                <MoreVertIcon style={{color:'#919191'}}/>
                        </div>
                    </div>
            </div>

            <div ref={body} className={styles.chatWindow_body}> 

                    {list.map((item, key)=>(
                        <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                         />
                    ))}

            </div> 
        
            {/*    <div className={styles.emojiArea} style={{height: emojiOpen ? '300px' : '0px'}}>  
                    <Picker 
                     onEmojiClick={onEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker   
                    />
                </div>     

                 */}
            <div className={styles.chatWindow_footer}>
                
                    <div className={styles.chatWindow_pre}> 

                        <div className={styles.chatWindow_btn}
                         onClick={closeEmoji} 
                         style={{width: emojiOpen ? '40px' : '0px'}}  
                        >
                             <CloseIcon style={{color:'#919191'}}/>
                        </div>

                        <div className={styles.chatWindow_btn}
                        onClick={openEmoji}>
                            <InsertEmoticonIcon style={{color: emojiOpen ?'#009688':'#919191'}}/>
                        </div>
                        
                    </div>
                    <div className={styles.chatWindow_inputarea}>
                        <input type="text" className={styles.chatWindow_input} 
                         placeholder="Digite uma mensagem" 
                         value={text}
                         onChange={e=>setText(e.target.value)} 
                         onKeyUp={InputKeyUp} 
                        
                        />
                    </div>

                    <div className={styles.chatWindow_pos}>
                       {text === '' && 
                       <div onClick={handleMicClick} className={styles.chatWindow_btn}>
                                    <MicIcon style={{color:listening? '#126ecd' :'#919191'}}/>
                        </div>
                        }
                        {text !== '' &&
                        <div onClick={handleSendClick} className={styles.chatWindow_btn}>
                                    <SendIcon style={{color:'#919191'}}/>
                        </div>
                        }
    
                    </div>
            </div>


        </div>
    );
}

export default ChatWindow;
import firebase from 'firebase/app';
import firebaseApp from './firebaseConfig';
const db = firebaseApp.firestore();

export default{
    fbPopup:async () =>{
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);

        return result;
    },
        /*

            Function add new Usere

        */
    addUser:async (u) =>{
        await db.collection('users').doc(u.id).set({
            name: u.name,
            avatar: u.avatar
        },{merge:true});
    },
    getContactList: async (userId) =>{
        let list = [];

        const results = await db.collection('users').get();
        results.forEach(result =>{
            let data = result.data();

            if(result.id !== userId){
                list.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.name
                })
            }
        });

        return list;
    },
    /* Adicionando chat ao clickar para abrir */
    addNewChat: async (user, user2) =>{
        let newChat = await db.collection('chats').add({
            messages:[],
            users:[user.id, user2.id]
        });
        // Puxa os dados para o user
        db.collection('users').doc(user.id).update({
            chats:firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: user2.name,
                image: user2.avatar,
                with: user2.id,
                lastMessage: user2.lastMessage
            })
        });
        //puxa os dados para o usuario 2
        db.collection('users').doc(user2.id).update({
            chats:firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: user.name,
                image: user.avatar,
                with: user.id,
                lastMessage: user.lastMessage
            })
        });
    },
    onChatList:(userId, setChatList) =>{
        return db.collection('users').doc(userId).onSnapshot((doc) =>{
            if(doc.exists){
                let data = doc.data();

                if(data.chats){
                    setChatList(data.chats);
                }
            }
        });
    },
    
    ConteudoDoChat:(chatId, setList) =>{
        return db.collection('chats').doc(chatId).onSnapshot((doc)=>{
            if(doc.exists){
                let data = doc.data();
                setList(data.messages);
            }
        });
    },

    SendMessage:(chatData, userId, type, body) =>{
        let now = new Date();
       
        db.collection('chats').doc(chatData.chatId).update({
            messages:firebase.firestore.FieldValue.arrayUnion({
                type,
                author: userId,
                body,
                date: now
            })
        })
    }
};
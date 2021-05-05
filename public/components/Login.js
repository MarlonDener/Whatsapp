import React from 'react'
import Api from '../../src/ApiFirebase'
import styles from './styles/Login.module.css';

const Login = ({onReceive}) =>{
    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert('erro ao logar');
        }
    }

    return(
            <div className={styles.login}>
                <button onClick={handleFacebookLogin}>Logar com o facebook</button>
            </div>
    );

}
export default Login;
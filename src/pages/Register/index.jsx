import React, {useEffect} from 'react'
import {useState} from 'react'
import Header from '../../components/Header'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import listRegister from '../../data/register.json'
import './index.css'

function Register(){
    
    useEffect(function(){
        const slider=document.querySelector('.img-btn');
        if(slider){
            slider.addEventListener('click', function(){
                document.querySelector('.cont').classList.toggle('s-signup')
            })
        }
        
    });

    const [name, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");
    const [passwordconfirm, setConfirm] = useState("");
    const [register, setRegister] = useState(listRegister);

    function registerSubmit(event){

        const newRegister = {
            name: name,
            email: email,
            password: password,
            passwordconfirm: passwordconfirm
        }

        setRegister([...register, newRegister])

        console.log(newRegister);
        console.log(register);

        event.preventDefault();
    }

    return(
        <div className="register-page">
             <Header />
             <div className="global">
                <div className="cont">
                    <div className="form sign-in">
                        <h2>Faça seu Login!</h2>
                            <label>
                                <span>Email</span>
                                <input type="email" name="email"/>
                            </label>
                            <label>
                                <span>Senha</span>
                                <input type="password" name="password" />
                            </label>
                            <button className="submit">Login</button>
                        <p className="forgot-pass">Esqueceu sua senha?</p>
                        <div className="social-media">
                            <ul>
                                <li><img src={facebook} alt="facebook"></img></li>
                                <li><img src={twitter} alt="twitter"></img></li>
                                <li><img src={instagram} alt="instagram"></img></li>
                                <li><img src={linkedin} alt="linkedin"></img></li>
                            </ul>
                        </div>
                    </div>    
                    <div className="sub-cont">
                        <div className="img">
                            <div className="img-text m-up">
                                <h2>Novo por aqui?</h2>
                                <p>Faça sua conta e descubra novos conteúdos</p>
                            </div>
                            <div className="img-text m-in">
                                <h2>Já possui sua conta?</h2>
                                <p>Faça seu login e fique ligado nas novidades</p>
                            </div>
                            <div className="img-btn">
                                <span className="m-up">Registro</span>
                                <span className="m-in">Login</span>
                            </div>
                        </div>
                        <div className="form sign-up">
                            <h2>Faça seu Registro!</h2>
                            <form onSubmit={registerSubmit}>
                                <label>
                                    <span>Nome</span>
                                    <input onChange={e => setNome(e.target.value)} type="text" value={name}/>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input onChange={e => setEmail(e.target.value)} type="email" value={email} />
                                </label>
                                <label>
                                    <span>Senha</span>
                                    <input onChange={e => setSenha(e.target.value)} type="password" value={password} />
                                </label>
                                <label>
                                    <span>Confirmar Senha</span>
                                    <input onChange={e => setConfirm(e.target.value)} type="password" value={passwordconfirm} />
                                </label>
                                <button className="submit" type="submit" value="Enviar">Registro</button>
                            </form>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    );
}

export default Register;
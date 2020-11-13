import React, {useEffect} from 'react'
import Menu from '../../components/Menu'
import twitter from '../../assets/images/twitter2.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import './index.css'

function Register(){
    
    useEffect(()=>{
        const slider=document.querySelector('.img-btn');
        if(slider){
            slider.addEventListener('click', function(){
                document.querySelector('.cont').classList.toggle('s-signup')
            })
        }
        
    });

    return(
        <div>
             <Menu />
             <section className="global">
                <div className="cont">
                    <div className="form sign-in">
                        <h2>Faça seu Login!</h2>
                        <label>
                            <span>Email</span>
                            <input type="email" name="email" />
                        </label>
                        <label>
                            <span>Senha</span>
                            <input type="password" name="password" />
                        </label>
                        <button className="submit" type="button">Login</button>
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
                            <label>
                                <span>Nome</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Email</span>
                                <input type="email" />
                            </label>
                            <label>
                                <span>Senha</span>
                                 <input type="password" />
                            </label>
                            <label>
                                <span>Confirmar Senha</span>
                                <input type="password" />
                            </label>
                            <button type="button" className="submit">Registro</button>
                        </div>
                    </div>
                </div>              
            </section>
        </div>
    );
}

export default Register;
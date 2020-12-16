import React from 'react';
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import Perfil from '../../assets/images/perfil.jpg'
import Button from '@material-ui/core/Button';
import './index.css'

function Profile() {
    return (
        <div>
            <Menu />
            <section>
                <div className="recuperar-geral">
                    <div className="blocos-recuperar">
                        <div className="block1-recuperar">
                            <img src={Perfil} alt="perfil img" width='250px' height='200px' />
                            <Button>Alterar</Button>
                        </div>
                        <div className="block2-recuperar">
                            <a>ALTERE OS DADOS DA SUA CONTA</a>
                            <label>
                                <input type='text' name='Usuário' placeholder='Usuário' />
                                <Button variant="contained">Alterar</Button>
                            </label>
                            <label>
                                <input type='email' name='Email' placeholder='Email' />
                                <Button variant="contained">Alterar</Button>
                            </label>
                            <label>
                                <input type='password' name='Senha' placeholder='Senha' />
                                <Button variant="contained">Alterar</Button>
                            </label>
                            <div>
                                <div className="btnend-recuperar">
                                    <Button variant="contained" color="primary">Salvar </Button>
                                    <Button variant="contained" color="primary">Cancelar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Rodape />
        </div>
    )
}

export default Profile;
import React from 'react';
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import Perfil from '../../assets/images/perfil.jpg'
import './index.css'

function Profile(){
    return ( 
    <div>
        <Menu />
        <section>
            <div  className="geral">
              <div className="blocos">
              <div className="block1">
                <img src={Perfil} alt="perfil img" width='250px' height='200px'/>
                <button>Alterar</button>
              </div>
              <div className="block2">
                  <label>
                      <input type='text' name='Usuário' placeholder='Usuário'/>
                      <button>Alterar</button>
                  </label>
                  <label>
                      <input type='email' name='Email' placeholder='Email'/>
                      <button>Alterar</button>
                  </label>
                  <label>
                      <input type='password' name='Senha' placeholder='Senha'/>
                      <button>Alterar</button>
                  </label>
                  <label className="btnend">
                      <button>Cancelar</button>
                      <button>Salvar</button>
                  </label>
              </div>
            </div>
          </div>
        </section>
        <Rodape />
    </div>
    )
}

export default Profile;
import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import {CardPequeno} from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImageProfile from './images/angelo-profile.jpg'
import ImageWorkMM from './images/6-sl3E9J.jpg'
import ImageWorkTPC from './images/Logo_tpc.jpg'
import HTML from './images/html.webp'
import CSS from './images/css.webp'
import JS from './images/javascript.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImageProfile}
          nome="Ângelo O'Dwyer" 
          descricao="Oi, eu sou o Ângelo. Sou o estudante em desenvolvimento web fullstack na Labenu. Atualmente venho aprendendo sobre componentes e props no React. Já tenho uma noção de HTML e CSS, que foi aprimorada aqui no curso."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

        <CardPequeno
          icon="https://www.flaticon.com/svg/vstatic/svg/1782/1782765.svg?token=exp=1615312057~hmac=26418655398c3e610dbc04001df995a0"
          iconAdress="https://www.flaticon.com/svg/vstatic/svg/44/44334.svg?token=exp=1615312295~hmac=1a70ff4f3c17dc4507e7775ea4403c63"
          email="angelo_odwyer@hotmail.com"
          endereco="Rua 15, Numero 15 - Salvador, Bahia"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImageWorkMM} 
          nome="Martins Medeiros" 
          descricao="Responsável pelo direcionamento de frota veicular especializada para operações portuária, cargas de projeto, minério e carga conteinerizada." 
        />
        
        <CardGrande 
          imagem={ImageWorkTPC} 
          nome="Grupo TPC" 
          descricao="Coordenar operação portuária, gestão documental e análise perante a receita federal, importação e exportação de cargas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Competências</h2>
        <CardGrande 
          imagem={HTML}
          nome="HTML" 
          descricao="HTML semântico - SEO - Meta Tags" 
        />

        <CardGrande 
          imagem={CSS}
          nome="CSS" 
          descricao="Box model - Pseudo-Classes - Pseudo-Elements - FlexBox - Grid - Resposividade" 
        />

        <CardGrande 
          imagem={JS}
          nome="JavaScript" 
          descricao="DOM - Funções - Array - Funções de Array - Condicionais" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/174/174857.png" 
          texto="Linkedin" 
        /> 

         <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

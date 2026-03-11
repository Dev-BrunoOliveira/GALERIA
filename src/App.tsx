import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// 1. Definição do Tipo (TypeScript)
interface Desenho {
  id: number;
  titulo: string;
  preco: string;
  img: string;
  descricao: string;
}

function App() {
  const [selecionado, setSelecionado] = useState<Desenho | null>(null);

  // 2. Seus Desenhos (Altere os caminhos das imagens conforme necessário)
  const desenhos: Desenho[] = [
    { 
      id: 1, 
      titulo: "2PAC", 
      preco: "R$ 45", 
      img: "img/2PAC.png", 
      descricao: "Desenho original feito à mão com técnica de hachura em caneta esferográfica."
    },
    { 
      id: 2, 
      titulo: "Notorius B.I.G.", 
      preco: "R$ 45", 
      img: "img/BIG.png",
      descricao: "Retrato detalhado do Biggie Smalls. Estudo de sombras e contraste."
    },
    { 
      id: 3, 
      titulo: "Ice Cube", 
      preco: "R$ 45", 
      img: "img/Ice Cube.png",
      descricao: "Expressão e realismo em preto e branco. Arte autoral Dinamite Ink."
    },
    { 
      id: 4, 
      titulo: "50 Cent", 
      preco: "R$ 45", 
      img: "img/50Cent.png",
      descricao: "Série Lendas do Hip Hop. Disponível para print ou original."
    }
  ];

  return (
    <div className="galeria-container">
      {/* CABEÇALHO */}
      <header className="museu-header">
        <h1>DINAMITE INK</h1>
      </header>
      
      {/* PAREDE DA GALERIA */}
      <main className="parede">
        {desenhos.map(art => (
          <motion.div 
            key={art.id} 
            className="moldura"
            onClick={() => setSelecionado(art)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: art.id * 0.1 }}
          >
            <div className="obra">
              <img src={art.img} alt={art.titulo} />
            </div>
            <div className="legenda">
              <p><strong>{art.titulo}</strong></p>
              <p>{art.preco}</p>
            </div>
          </motion.div>
        ))}
      </main>

      {/* MODAL INTERATIVO */}
      <AnimatePresence>
        {selecionado && (
          <div className="overlay" onClick={() => setSelecionado(null)}>
            <motion.div 
              className="modal-conteudo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="btn-fechar" onClick={() => setSelecionado(null)}>FECHAR [X]</button>
              
              <div className="modal-grid">
                <img src={selecionado.img} alt={selecionado.titulo} />
                <div className="modal-info">
                  <h2>{selecionado.titulo}</h2>
                  <p className="modal-desc">{selecionado.descricao}</p>
                  <p className="modal-preco">{selecionado.preco}</p>
                  
                  {/* LINK DO WHATSAPP COM MENSAGEM DINÂMICA */}
                  <a 
                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(
                      `Salve Bruno! Vi o desenho do "${selecionado.titulo}" no site DinamiteInk e quero reservar.`
                    )}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-comprar"
                    style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                  >
                    RESERVAR OBRA
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RODAPÉ INSTITUCIONAL */}
      <footer className="museu-footer">
        <p>© 2026 DINAMITE INK - ART & TATTOO</p>
        <div className="social-links">
          <a href="https://instagram.com/dinamiteink" target="_blank" rel="noreferrer">INSTAGRAM</a>
          <span>|</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
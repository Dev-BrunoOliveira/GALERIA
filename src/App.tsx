import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

interface Desenho {
  id: number;
  titulo: string;
  preco: string;
  img: string;
  descricao: string;
}

function App() {
  const [selecionado, setSelecionado] = useState<Desenho | null>(null);

  const desenhos: Desenho[] = [
    {
      id: 1,
      titulo: "2PAC",
      preco: "R$ 45",
      img: "img/2PAC.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 2,
      titulo: "Notorius B.I.G.",
      preco: "R$ 45",
      img: "img/BIG.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 3,
      titulo: "Ice Cube",
      preco: "R$ 45",
      img: "img/Ice Cube.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 4,
      titulo: "50 Cent",
      preco: "R$ 45",
      img: "img/50Cent.png",
      descricao: "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 5,
      titulo: "Snoop Dogg",
      preco: "R$ 45",
      img: "img/Snoop.png",
      descricao: "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 6,
      titulo: "Travis",
      preco: "R$ 45",
      img: "img/Travis.png",
      descricao: "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 7,
      titulo: "Kendrick Lamar",
      preco: "R$ 45",
      img: "img/Kendrick.jpg",
      descricao: "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 8,
      titulo: "Corra",
      preco: "R$ 45",
      img: "img/Corra.png",
      descricao: "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 9,
      titulo: "John Wick",
      preco: "R$ 45",
      img: "img/John Wick.png",
      descricao:
          "John Wick, o lendário assassino interpretado por Keanu Reeves, ganha vida em um retrato detalhado feito à mão. Com traços precisos e sombrios, esta obra captura a intensidade e a aura enigmática do personagem, tornando-se uma peça indispensável para os fãs da série de filmes.Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
      },
    {
      id: 10,
      titulo: "Walter White",
      preco: "R$ 45",
      img: "img/Walter White.png",
      descricao:
        "Walter White, o icônico protagonista de 'Breaking Bad', é retratado com maestria em um desenho feito à mão. Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 11,
      titulo: "Dexter",
      preco: "R$ 45",
      img: "img/Dexter Morgan.png",
      descricao:
        "Dexter Morgan, o assassino serial de 'Dexter', é retratado com maestria em um desenho feito à mão. Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 12,
      titulo: "Joel The Last of Us",
      preco: "R$ 45",
      img: "img/Joel.png",
      descricao: "Joel da série The Last of Us. Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 13,
      titulo: "Rainha de Maio",
      preco: "R$ 45",
      img: "img/Midsommar.png",
      descricao:
        "A Rainha de Maio, personagem central do filme 'Midsommar', é retratada com detalhes impressionantes em um desenho feito à mão. Com traços delicados e uma expressão enigmática, esta obra captura a essência mística e perturbadora da personagem, tornando-se uma peça indispensável para os fãs do filme e amantes de arte autoral.Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
     {
      id: 15,
      titulo: "Neymar",
      preco: "R$ 45",
      img: "img/Neymar.png",
      descricao:
        "Neymar, o icônico jogador de futebol, é retratado com maestria em um desenho feito à mão. Com traços precisos e uma expressão enigmática, esta obra captura a essência mística e perturbadora da personagem, tornando-se uma peça indispensável para os fãs do filme e amantes de arte autoral.Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },

  ];

  return (
    <div className="galeria-container">
      <header className="museu-header">
        <div className="header-overlay">
          <p className="header-top">ORIGINAL PORTRAITS</p>
          <h1 className="header-title">DINAMITE INK</h1>
          <p className="header-bottom">MADE WITH BIC PEN</p>
        </div>
      </header>

      <main className="parede">
        {desenhos.map((art) => (
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
              <p>
                <strong>{art.titulo}</strong>
              </p>
              <p>{art.preco}</p>
            </div>
          </motion.div>
        ))}
        <div>
          <section className="insta-banner">
            <h2>Curtiu as Artes ? </h2>
            <p>
              Acompanhe o processo diário das artes e novos portraits no
              Instagram.
            </p>
            <a
              href="https://instagram.com/dinamiteink"
              target="_blank"
              className="btn-insta-grande"
            >
              VISITAR @DINAMITEINK
            </a>
          </section>
        </div>
      </main>

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
              <button
                className="btn-fechar"
                onClick={() => setSelecionado(null)}
              >
                X
              </button>

              <div className="modal-grid">
                <img src={selecionado.img} alt={selecionado.titulo} />
                <div className="modal-info">
                  <h2>{selecionado.titulo}</h2>
                  <p className="modal-desc">{selecionado.descricao}</p>
                  <p className="modal-preco">{selecionado.preco}</p>

                  <a
                    href={`https://wa.me/message/XDBZLY2ZNU27H1?text=${encodeURIComponent(
                      `Salve Bruno! Vi o desenho do "${selecionado.titulo}" no site DinamiteInk e quero reservar.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-comprar"
                    style={{
                      textDecoration: "none",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    RESERVAR OBRA
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="museu-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">DINAMITE INK</h2>
            <p>Original Portraits made with Bic Pen</p>
          </div>

          <div className="footer-social">
            <p>SIGA O PROCESSO NO INSTAGRAM</p>
            <a
              href="https://instagram.com/dinamiteink"
              target="_blank"
              className="insta-link"
            >
              @dinamiteink
            </a>
          </div>

          <div className="footer-info">
            <p>SÃO PAULO - BRASIL</p>
            <p className="copyright">
              © 2026 - Desenvolvido para Colecionadores
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

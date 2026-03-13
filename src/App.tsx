import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

interface Desenho {
  id: number;
  titulo: string;
  status: string; // Alterado de preco para status
  img: string;
  descricao: string;
}

function App() {
  const [selecionado, setSelecionado] = useState<Desenho | null>(null);

  const desenhos: Desenho[] = [
    {
      id: 1,
      titulo: "2PAC",
      status: "Disponível",
      img: "img/2PAC.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 2,
      titulo: "Notorius B.I.G.",
      status: "Disponível",
      img: "img/BIG.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 3,
      titulo: "Ice Cube",
      status: "Disponível",
      img: "img/Ice Cube.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 4,
      titulo: "50 Cent",
      status: "Disponível",
      img: "img/50Cent.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 5,
      titulo: "Snoop Dogg",
      status: "Disponível",
      img: "img/Snoop.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 6,
      titulo: "Travis",
      status: "Disponível",
      img: "img/Travis.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 7,
      titulo: "Kendrick Lamar",
      status: "Disponível",
      img: "img/Kendrick.jpg",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 8,
      titulo: "John Wick",
      status: "Disponível",
      img: "img/John Wick.png",
      descricao:
        "John Wick, o lendário assassino interpretado por Keanu Reeves, ganha vida em um retrato detalhado feito à mão. Com traços precisos e sombrios, esta obra captura a intensidade e a aura enigmática do personagem. Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 9,
      titulo: "Corra",
      status: "Disponível",
      img: "img/Corra.png",
      descricao:
        "Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },

    {
      id: 10,
      titulo: "Rainha de Maio",
      status: "Disponível",
      img: "img/Midsommar.png",
      descricao:
        "A Rainha de Maio, personagem central do filme 'Midsommar', é retratada com detalhes impressionantes. Com traços delicados e uma expressão enigmática, esta obra captura a essência mística e perturbadora da personagem. Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },

    {
      id: 11,
      titulo: "Dexter",
      status: "Disponível",
      img: "img/Dexter Morgan.png",
      descricao:
        "Dexter Morgan, o assassino serial de 'Dexter', é retratado com maestria em um desenho feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 12,
      titulo: "Joel The Last of Us",
      status: "Disponível",
      img: "img/Joel.png",
      descricao:
        "Joel da série The Last of Us. Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },
    {
      id: 13,
      titulo: "Walter White",
      status: "Disponível",
      img: "img/Walter White.png",
      descricao:
        "Walter White, o icônico protagonista de 'Breaking Bad', é retratado com maestria em um desenho feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
    },

    {
      id: 14,
      titulo: "Neymar",
      status: "Disponível",
      img: "img/Neymar.png",
      descricao:
        "Neymar Jr, um dos maiores ícones do futebol mundial, retratado em detalhes através da técnica de hachura. Desenho original feito à mão com técnica de hachura em caneta esferográfica, Impressão em papel Glossy Premium, tamanho A4 (21x30 cm).",
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
              <p>{art.status}</p>
            </div>
          </motion.div>
        ))}

        <section className="insta-banner">
          <h2>Curtiu as Artes ? </h2>
          <p>
            Acompanhe o processo diário das artes e novos portraits no
            Instagram.
          </p>
          <a
            href="https://instagram.com/dinamiteink"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-insta-grande"
          >
            VISITAR @DINAMITEINK
          </a>
        </section>
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
                  <p className="modal-preco">{selecionado.status}</p>

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
              rel="noopener noreferrer"
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

// --- BASE DE DADOS DOS PRODUTOS ---
const listaProdutos = [
  {
    id: 1,
    nome: "Lava Roupas 4L",
    categoria: "Multiuso",
    preco: 13.99,
    imagem: '<img src="docs/LAVA ROUPAS.jpg" alt="Lava Roupas">',
    emDestaque: true,
    descricao:
      "Mais concentração, limpeza e perfume para suas roupas! Disponível em dois aromas.",
  },
  {
    id: 2,
    nome: "Água Sanitária 4L",
    categoria: "Desinfecção",
    preco: 9.99,
    imagem:
      '<img src="docs/AGUA SANITARIA.jpg" alt="Água Sanitária Limpa Bom">',
    emDestaque: true,
    descricao:
      "Água sanitária é ideal para a limpeza e desinfecção de superfícies, ajudando a eliminar germes e bactérias. Também pode ser utilizada no clareamento de roupas brancas e remoção de manchas.",
  },
  {
    id: 3,
    nome: "Lava Louças 4L",
    categoria: "Cozinha",
    preco: 13.99,
    imagem: '<img src="docs/LAVA LOUÇAS.png" alt="Lava Louças Limpa Bom 4L">',
    emDestaque: true,
    descricao:
      "Alto poder desengordurante e rendimento superior para o dia a dia da sua cozinha. Remove gorduras difíceis com facilidade, deixando louças, copos e panelas impecáveis. Disponível nas versões Limão, Neutro, Maçã e Coco.",
  },
  {
    id: 4,
    nome: "Cloro Gel 1L",
    categoria: "Desinfecção",
    preco: 12.0,
    imagem: '<img src="docs/CLORO GEL.jpg" alt="Cloro Gel Limpa Bom 1L">',
    emDestaque: true,
    descricao:
      "Fórmula 2 em 1 com ação detergente e desinfetante em gel de alta aderência, que rende muito mais e evita desperdícios. Ideal para limpeza pesada, remoção de limo e desinfecção profunda de banheiros, pisos, azulejos e superfícies em geral.",
  },
  {
    id: 5,
    nome: "Copo para Café Descartável",
    categoria: "Descartáveis",
    preco: 4.0,
    imagem: '<img src="docs/COPO CAFE.jpg" alt="Copo para Café Descartável">',
    emDestaque: false,
    descricao:
      "Seu café mais prático e gostoso! Copos descartáveis resistentes e seguros, ideais para café e bebidas quentes com qualidade e praticidade no seu dia a dia.",
  },
  {
    id: 6,
    nome: "Amaciante Concentrado Limpa Bom 4L",
    categoria: "Roupas",
    preco: 13.99,
    imagem:
      '<img src="docs/AMACIANTE 4L.jpg" alt="Amaciante Concentrado Limpa Bom Sonho 4L">',
    emDestaque: false,
    descricao:
      "Amaciante concentrado Limpa Bom Sonho 4L. Deixa suas roupas muito mais macias, fáceis de passar e deliciosamente perfumadas por muito mais tempo.",
  },
  {
    id: 7,
    nome: "Papel Toalha Águia 1000 (Pacote Fechado)",
    categoria: "Papel",
    preco: 11.99,
    imagem: '<img src="docs/PAPEL TOALHA.jpg" alt="Papel Toalha Águia 1000">',
    emDestaque: false,
    descricao:
      "Toalhas de papel interfolhadas, 100% celulose virgem, formato 20x21. Duas dobras, folha simples, práticas e absorventes para cozinha, banheiro e uso comercial.",
  },
  {
    id: 8,
    nome: "Vassoura Premium San Marcus",
    categoria: "Utilidades",
    preco: 14.99,
    imagem: '<img src="docs/VASSOURA.jpg" alt="Vassoura Premium San Marcus">',
    emDestaque: false,
    descricao:
      "Mais praticidade para o seu dia a dia! Cerdas resistentes, excelente durabilidade e varrição mais eficiente. Ideal para todos os tipos de pisos.",
  },
  {
    id: 9,
    nome: "Papel Higiênico Familiar Soft 4 Rolos",
    categoria: "Papel",
    preco: 3.5,
    imagem:
      '<img src="docs/PAPEL HIGIENICO.jpg" alt="Papel Higiênico Familiar Soft">',
    emDestaque: false,
    descricao:
      "Papel higiênico folha simples neutro, macio e resistente. Pacote com 4 rolos de 30m x 10cm cada.",
  },
  {
    id: 10,
    nome: "Pregador de Madeira 24 Peças",
    categoria: "Utilidades",
    preco: 4.8,
    imagem:
      '<img src="docs/PREGADOR.jpg" alt="Conjunto de Pregadores de Madeira 24 peças">',
    emDestaque: false,
    descricao:
      "Conjunto com 24 pregadores de madeira com mola de aço. Resistentes e duráveis, ideais para uso doméstico e perfeitos para roupas e roupas leves.",
  },
  {
    id: 11,
    nome: "Sabão Líquido Limpa Bom 4L",
    categoria: "Limpeza",
    preco: 23.99,
    imagem:
      '<img src="docs/SABAO LIQUIDO ERVA DOCE.jpg" alt="Sabão Líquido Perfumado Limpa Bom 4L Erva Doce">',
    emDestaque: false,
    descricao:
      "Sabão líquido perfumado Limpa Bom de 4 litros, com limpeza e perfume por mais tempo. Ideal para o dia a dia da sua casa.",
  },
  {
    id: 12,
    nome: "Odorizante de Ambientes Puro Ar",
    categoria: "Aromatizadores",
    preco: 11.99,
    imagem:
      '<img src="docs/PURO AR.jpg" alt="Odorizante de Ambientes Puro Ar">',
    emDestaque: false,
    descricao:
      "Seu ambiente mais perfumado todos os dias! Room spray que perfuma o ambiente e traz sensação de frescor e bem-estar. Vários aromas: Brisa do Mar, Pétalas de Rosas e Lavanda.",
  },
  {
    id: 13,
    nome: "Desinfetante Limpa Bom 4L",
    categoria: "Desinfetante",
    preco: 13.99,
    imagem:
      '<img src="docs/LIMPADOR PERFUMADO.jpg" alt="Desinfetante Limpa Bom 4L">',
    emDestaque: false,
    descricao:
      "Mais limpeza e mais perfume para a sua casa! Limpa e perfuma por mais tempo, pronto para uso, ideal para toda a casa. Fragrâncias: Limão, Lavanda e Floral.",
  },
  {
    id: 14,
    nome: "Pano do Grande",
    categoria: "Utilidades",
    preco: 8.0,
    imagem: '<img src="docs/PANO DO GRANDE.jpg" alt="Pano do Grande">',
    emDestaque: false,
    descricao:
      "Pano de limpeza xadrez com alta absorção, resistente, lavável e reutilizável. Ideal para limpeza pesada e geral. Diversos tamanhos (a partir de R$ 8,00).",
  },
  {
    id: 15,
    nome: "Copo Descartável 250ml (100 un.)",
    categoria: "Descartáveis",
    preco: 5.99,
    imagem:
      '<img src="docs/COPO 250ML.jpg" alt="Copo Descartável Copobras 250ml">',
    emDestaque: false,
    descricao:
      "Copos descartáveis Copobras de 250ml, pacote com 100 unidades. Ideal para festas, eventos, reuniões e muito mais.",
  },
];

let carrinho = JSON.parse(localStorage.getItem("eleve_carrinho")) || [];

document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();
  configurarBusca();

  // Navegação
  document
    .getElementById("abrir-carrinho-btn")
    ?.addEventListener("click", mostrarCarrinho);
  document
    .getElementById("voltar-loja-btn")
    ?.addEventListener("click", mostrarLoja);
  document.getElementById("logo-btn")?.addEventListener("click", mostrarLoja);

  // Catálogo
  document
    .getElementById("nav-catalogo-btn")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarCatalogo();
    });
  document
    .getElementById("hero-catalogo-btn")
    ?.addEventListener("click", mostrarCatalogo);
  document
    .getElementById("ver-mais-catalogo-btn")
    ?.addEventListener("click", mostrarCatalogo);
  document
    .getElementById("footer-catalogo-btn")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarCatalogo();
    });

  // Voltar para Home
  document.querySelectorAll(".nav-home-btn").forEach((btn) => {
    btn.addEventListener("click", () => mostrarLoja());
  });

  // Evento WhatsApp
  document
    .getElementById("checkout-btn")
    ?.addEventListener("click", finalizarPedidoWhatsApp);

  // Eventos do Modal de Detalhes do Produto
  const modalProd = document.getElementById("modal-produto");
  document
    .getElementById("modal-close-btn")
    ?.addEventListener("click", fecharModalProduto);
  modalProd?.addEventListener("click", (e) => {
    if (e.target === modalProd) fecharModalProduto();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModalProduto();
  });

  salvarERenderizar();
});

// HELPER PARA BUSCA (IGNORA MAIÚSCULAS E ACENTOS)
function normalizarTexto(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

let termoBuscaAtual = "";

// CONFIGURAÇÃO DA BARRA DE PESQUISA
function configurarBusca() {
  const inputHome = document.getElementById("search-input-home");
  const clearHome = document.getElementById("search-clear-home");
  const inputCat = document.getElementById("search-input-catalogo");
  const clearCat = document.getElementById("search-clear-catalogo");

  const sincronizarEEscutar = (valor) => {
    termoBuscaAtual = valor;
    if (inputHome && inputHome.value !== valor) inputHome.value = valor;
    if (inputCat && inputCat.value !== valor) inputCat.value = valor;

    if (clearHome) clearHome.style.display = valor ? "inline-flex" : "none";
    if (clearCat) clearCat.style.display = valor ? "inline-flex" : "none";

    renderizarProdutos(valor);
  };

  inputHome?.addEventListener("input", (e) =>
    sincronizarEEscutar(e.target.value),
  );
  inputCat?.addEventListener("input", (e) =>
    sincronizarEEscutar(e.target.value),
  );

  clearHome?.addEventListener("click", () => sincronizarEEscutar(""));
  clearCat?.addEventListener("click", () => sincronizarEEscutar(""));
}

function limparBusca() {
  const inputHome = document.getElementById("search-input-home");
  const inputCat = document.getElementById("search-input-catalogo");
  const clearHome = document.getElementById("search-clear-home");
  const clearCat = document.getElementById("search-clear-catalogo");

  termoBuscaAtual = "";
  if (inputHome) inputHome.value = "";
  if (inputCat) inputCat.value = "";
  if (clearHome) clearHome.style.display = "none";
  if (clearCat) clearCat.style.display = "none";

  renderizarProdutos("");
}

// RENDERIZAÇÃO DE PRODUTOS COM FILTRO DINÂMICO
function renderizarProdutos(filtroTexto = "") {
  const gridDestaques = document.getElementById("grid-destaques");
  const gridCatalogo = document.getElementById("grid-catalogo");
  const feedbackHome = document.getElementById("search-feedback-home");
  const feedbackCat = document.getElementById("search-feedback-catalogo");

  const termoLimpo = filtroTexto.trim();
  const termoNorm = normalizarTexto(termoLimpo);

  // Filtra produtos pelo nome ou categoria
  let produtosFiltrados = listaProdutos;
  if (termoNorm !== "") {
    produtosFiltrados = listaProdutos.filter((p) => {
      return (
        normalizarTexto(p.nome).includes(termoNorm) ||
        normalizarTexto(p.categoria).includes(termoNorm)
      );
    });
  }

  // Atualiza feedback de quantidade encontrada
  const atualizarFeedback = (el) => {
    if (!el) return;
    if (termoLimpo !== "") {
      el.style.display = "block";
      el.innerHTML = `Encontrado(s) <strong>${produtosFiltrados.length}</strong> produto(s) para "<strong>${termoLimpo}</strong>"`;
    } else {
      el.style.display = "none";
      el.innerHTML = "";
    }
  };

  atualizarFeedback(feedbackHome);
  atualizarFeedback(feedbackCat);

  // Template do card de produto
  const cardHTML = (produto) => `
    <div class="product-card" data-nome="${produto.nome}" onclick="abrirModalProduto(${produto.id}, event)">
      <div class="product-img">${produto.imagem}</div>
      <div class="product-info">
        <span class="product-category">${produto.categoria}</span>
        <h3 class="product-title">${produto.nome}</h3>
        <div class="product-price">R$ ${produto.preco.toFixed(2).replace(".", ",")}</div>
        <button class="btn btn-outline add-to-cart-btn" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco}, event)">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Adicionar</span>
        </button>
      </div>
    </div>
  `;

  // Template para quando nenhum produto for encontrado
  const emptyHTML = `
    <div class="busca-vazia">
      <span class="busca-vazia-icone">🔍</span>
      <h3>Nenhum produto encontrado</h3>
      <p>Não encontramos nenhum item para "<strong>${termoLimpo}</strong>". Tente outro nome ou categoria.</p>
      <button class="btn btn-primary" onclick="limparBusca()">Ver Todos os Produtos</button>
    </div>
  `;

  // Renderiza na vitrine da Home
  if (gridDestaques) {
    gridDestaques.innerHTML = "";
    if (termoNorm !== "") {
      if (produtosFiltrados.length === 0) {
        gridDestaques.innerHTML = emptyHTML;
      } else {
        produtosFiltrados.forEach((prod) => {
          gridDestaques.innerHTML += cardHTML(prod);
        });
      }
    } else {
      const destaques = listaProdutos.filter((p) => p.emDestaque);
      destaques.forEach((prod) => {
        gridDestaques.innerHTML += cardHTML(prod);
      });
    }
  }

  // Renderiza no Catálogo Completo
  if (gridCatalogo) {
    gridCatalogo.innerHTML = "";
    if (produtosFiltrados.length === 0) {
      gridCatalogo.innerHTML = emptyHTML;
    } else {
      produtosFiltrados.forEach((prod) => {
        gridCatalogo.innerHTML += cardHTML(prod);
      });
    }
  }

  // Mostra o selo "X no carrinho" nos produtos já adicionados
  atualizarBadgesCards();
}

// NAVEGAÇÃO DE TELAS
function esconderTodasViews() {
  document.getElementById("view-loja").style.display = "none";
  document.getElementById("view-carrinho").style.display = "none";
  document.getElementById("view-catalogo").style.display = "none";
}

function mostrarLoja() {
  esconderTodasViews();
  document.getElementById("view-loja").style.display = "block";
}

function mostrarCarrinho() {
  esconderTodasViews();
  document.getElementById("view-carrinho").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarCatalogo() {
  esconderTodasViews();
  document.getElementById("view-catalogo").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// CARRINHO
function adicionarAoCarrinho(nome, preco, eventOrBtn) {
  if (eventOrBtn && typeof eventOrBtn.stopPropagation === "function") {
    eventOrBtn.stopPropagation();
  }
  const itemExistente = carrinho.find((item) => item.nome === nome);
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }
  salvarERenderizar();

  // Identifica o botão que recebeu o clique
  let btn = null;
  let clickEvent = null;
  if (eventOrBtn && eventOrBtn.target) {
    clickEvent = eventOrBtn;
    btn = eventOrBtn.currentTarget || eventOrBtn.target.closest("button");
  } else if (eventOrBtn instanceof HTMLElement) {
    btn = eventOrBtn;
  }

  // Dispara a animação e confirmação visual instantânea
  if (btn) {
    animarConfirmacaoBotao(btn, clickEvent);
  } else {
    animarIconeCarrinho();
  }
  vibrar(12);
  atualizarBadgesCards(nome);
  exibirToastConfirmacao(`${nome} adicionado ao carrinho!`);
}

// Feedback tátil leve em celulares que suportam (Android)
function vibrar(padrao) {
  try {
    if (navigator.vibrate) navigator.vibrate(padrao);
  } catch (e) {
    /* ignora navegadores sem suporte */
  }
}

// Selo verde "✓ X no carrinho" sobre a foto de cada produto já adicionado
function atualizarBadgesCards(nomeDestaque) {
  document.querySelectorAll(".product-card[data-nome]").forEach((card) => {
    const item = carrinho.find((i) => i.nome === card.dataset.nome);
    const area = card.querySelector(".product-img") || card;
    let badge = area.querySelector(".card-qty-badge");

    if (!item) {
      if (badge) badge.remove();
      return;
    }

    if (!badge) {
      badge = document.createElement("span");
      badge.className = "card-qty-badge";
      area.appendChild(badge);
    }

    badge.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      ${item.quantidade} no carrinho
    `;

    if (nomeDestaque === item.nome) {
      badge.classList.remove("badge-pop");
      void badge.offsetWidth;
      badge.classList.add("badge-pop");
    }
  });
}

function animarConfirmacaoBotao(btn, event) {
  if (!btn) return;

  // Guarda o conteúdo original do botão (só na primeira vez)
  if (!btn.getAttribute("data-original-html")) {
    btn.setAttribute("data-original-html", btn.innerHTML);
  }

  // Reinicia tudo se clicar várias vezes seguidas
  clearTimeout(btn._doneTimeout);
  clearTimeout(btn._resetTimeout);
  btn.classList.remove("btn-animando", "btn-adicionado");
  void btn.offsetWidth;

  // Obs.: não usamos "prefers-reduced-motion" aqui de propósito. No Windows,
  // com "Efeitos de animação" desligado, o navegador informa movimento
  // reduzido e a animação sumia no PC.

  // FASE 1: carrinho atravessa o botão pintando-o de verde
  const conteudoOriginal = btn.getAttribute("data-original-html");
  btn.classList.add("btn-animando");
  btn.innerHTML = `
    <span class="atc-label atc-label-old">${conteudoOriginal}</span>
    <span class="atc-fill" aria-hidden="true"></span>
    <span class="atc-label atc-label-new" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="btn-check-icon">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Adicionado!</span>
    </span>
    <span class="atc-runner" aria-hidden="true">
      <span class="atc-speed"><i></i><i></i><i></i></span>
      <svg class="atc-cart-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g class="atc-pacote">
          <rect x="9.5" y="1.5" width="8" height="6.5" rx="1.3" fill="#fbbf24" stroke="none"></rect>
          <line x1="13.5" y1="1.5" x2="13.5" y2="8" stroke="#f59e0b" stroke-width="1.6"></line>
        </g>
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"></path>
        <g class="atc-roda">
          <circle cx="9" cy="21" r="1.9" stroke-width="1.8"></circle>
          <line x1="9" y1="19.3" x2="9" y2="22.7" stroke-width="1.2"></line>
        </g>
        <g class="atc-roda">
          <circle cx="19" cy="21" r="1.9" stroke-width="1.8"></circle>
          <line x1="19" y1="19.3" x2="19" y2="22.7" stroke-width="1.2"></line>
        </g>
      </svg>
    </span>
  `;

  // Efeito Ripple no ponto exato do toque/clique
  criarEfeitoRipple(btn, event);

  // FASE 2: confirmação verde + confete + "+1" voando até o carrinho
  btn._doneTimeout = setTimeout(() => {
    btn.classList.remove("btn-animando");
    btn.classList.add("btn-adicionado");
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="btn-check-icon atc-check">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="atc-done-text atc-sem-entrada">Adicionado!</span>
      `;
    vibrar([10, 40, 18]);
    criarConfete(btn);
    voarParaCarrinho(btn);
  }, 1400);

  // FASE 3: volta ao estado original
  btn._resetTimeout = setTimeout(() => {
    btn.innerHTML = conteudoOriginal;
    btn.classList.remove("btn-adicionado");
  }, 2900);
}

// Explosão de confete saindo do botão
function criarConfete(btn) {
  const rect = btn.getBoundingClientRect();
  const cores = [
    "#0066ff",
    "#00d2ff",
    "#10b981",
    "#fbbf24",
    "#f472b6",
    "#a78bfa",
  ];
  const total = window.innerWidth <= 768 ? 12 : 18; // mais leve no celular

  for (let i = 0; i < total; i++) {
    const p = document.createElement("span");
    p.className = "confete" + (i % 3 === 0 ? " confete-redondo" : "");

    // Ângulo concentrado para cima (entre -165° e -15°)
    const angulo = ((-165 + Math.random() * 150) * Math.PI) / 180;
    const distancia = 45 + Math.random() * 55;

    p.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * rect.width * 0.6}px`;
    p.style.top = `${rect.top + rect.height / 2}px`;
    p.style.background = cores[i % cores.length];
    p.style.setProperty("--x", `${Math.cos(angulo) * distancia}px`);
    p.style.setProperty("--y", `${Math.sin(angulo) * distancia}px`);
    p.style.setProperty("--r", `${(Math.random() - 0.5) * 720}deg`);
    p.style.animationDelay = `${Math.random() * 60}ms`;

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1100);
  }
}

// Bolinha "+1" que faz um arco do botão até o ícone do carrinho no cabeçalho
function voarParaCarrinho(btn) {
  const destino = document.getElementById("abrir-carrinho-btn");
  const origem = btn.getBoundingClientRect();
  const alvo = destino ? destino.getBoundingClientRect() : null;

  const alvoVisivel =
    alvo && alvo.width > 0 && alvo.bottom > 0 && alvo.top < window.innerHeight;

  if (!alvoVisivel || typeof document.body.animate !== "function") {
    animarIconeCarrinho();
    return;
  }

  const x0 = origem.left + origem.width / 2;
  const y0 = origem.top + origem.height / 2;
  const dx = alvo.left + alvo.width / 2 - x0;
  const dy = alvo.top + alvo.height / 2 - y0;

  // Eixo X e eixo Y em elementos separados = trajetória curva natural
  const eixoX = document.createElement("div");
  eixoX.className = "fly-to-cart";
  eixoX.style.left = `${x0}px`;
  eixoX.style.top = `${y0}px`;

  const bolinha = document.createElement("div");
  bolinha.className = "fly-to-cart-dot";
  bolinha.textContent = "+1";
  eixoX.appendChild(bolinha);
  document.body.appendChild(eixoX);

  const duracao = 850;
  eixoX.animate(
    [{ transform: "translateX(0)" }, { transform: `translateX(${dx}px)` }],
    {
      duration: duracao,
      easing: "cubic-bezier(0.25, 0.1, 0.45, 1)",
      fill: "forwards",
    },
  );

  const voo = bolinha.animate(
    [
      { transform: "translateY(0) scale(0.3)", opacity: 0 },
      { transform: "translateY(-14px) scale(1.15)", opacity: 1, offset: 0.15 },
      { transform: `translateY(${dy}px) scale(0.45)`, opacity: 0.85 },
    ],
    {
      duration: duracao,
      easing: "cubic-bezier(0.55, 0, 0.85, 0.6)",
      fill: "forwards",
    },
  );

  voo.onfinish = () => {
    eixoX.remove();
    animarIconeCarrinho();
  };
}

function criarEfeitoRipple(btn, event) {
  const rect = btn.getBoundingClientRect();
  const circle = document.createElement("span");
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;

  let x = radius;
  let y = radius;
  if (event && event.clientX) {
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  }

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${x - radius}px`;
  circle.style.top = `${y - radius}px`;
  circle.className = "btn-ripple";

  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

function criarEfeitoPlusOne(btn) {
  const container = btn.closest(".product-info") || btn.parentElement;
  if (!container) return;

  const plusOne = document.createElement("div");
  plusOne.className = "floating-plus-one";
  plusOne.textContent = "+1";
  container.appendChild(plusOne);

  setTimeout(() => plusOne.remove(), 900);
}

function exibirToastConfirmacao(texto) {
  let toast = document.getElementById("toast-feedback");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-feedback";
    toast.className = "toast-notificacao";
    document.body.appendChild(toast);
  }

  const frasesIncentivo = [
    "Ótima escolha!",
    "Boa pedida!",
    "Excelente escolha!",
    "Perfeito!",
    "Isso aí!",
  ];
  const frase =
    frasesIncentivo[Math.floor(Math.random() * frasesIncentivo.length)];

  toast.innerHTML = `
    <span class="toast-icone">✓</span>
    <span class="toast-texto"><strong>${frase}</strong> ${texto}</span>
    <button type="button" class="toast-acao">Ver carrinho</button>
  `;
  toast.querySelector(".toast-acao").onclick = () => {
    toast.classList.remove("toast-visivel");
    mostrarCarrinho();
  };

  toast.classList.remove("toast-visivel");
  void toast.offsetWidth;
  toast.classList.add("toast-visivel");

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("toast-visivel");
  }, 3200);
}

function animarIconeCarrinho() {
  const carrinhoBtn = document.getElementById("abrir-carrinho-btn");
  if (carrinhoBtn) {
    carrinhoBtn.classList.remove("cart-bump");
    void carrinhoBtn.offsetWidth;
    carrinhoBtn.classList.add("cart-bump");
  }

  // Contador do cabeçalho "salta" e brilha em verde
  const contador = document.getElementById("cart-count");
  if (contador) {
    contador.classList.remove("count-pop");
    void contador.offsetWidth;
    contador.classList.add("count-pop");
  }
}

function alterarQuantidade(index, mudanca) {
  carrinho[index].quantidade += mudanca;
  if (carrinho[index].quantidade <= 0) {
    carrinho.splice(index, 1);
  }
  salvarERenderizar();
}

function removerItem(index) {
  carrinho.splice(index, 1);
  salvarERenderizar();
}

function salvarERenderizar() {
  localStorage.setItem("eleve_carrinho", JSON.stringify(carrinho));

  const containerCarrinho = document.getElementById("cart-items");
  const totalElemento = document.getElementById("cart-total-price");
  const badgeContador = document.getElementById("cart-count");

  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  if (badgeContador) badgeContador.textContent = totalItens;
  atualizarBadgesCards();

  if (!containerCarrinho || !totalElemento) return;

  containerCarrinho.innerHTML = "";
  let totalDinheiro = 0;

  if (carrinho.length === 0) {
    containerCarrinho.innerHTML =
      '<li class="empty-cart-msg">O carrinho está vazio.</li>';
    totalElemento.textContent = "R$ 0,00";
    return;
  }

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    totalDinheiro += subtotal;

    const li = document.createElement("li");
    li.className = "item-carrinho-linha";
    li.innerHTML = `
      <div>
        <strong>${item.nome}</strong><br>
        <small>R$ ${item.preco.toFixed(2).replace(".", ",")} un.</small>
      </div>
      <div>
        <button onclick="alterarQuantidade(${index}, -1)">-</button>
        <span style="margin: 0 6px;">${item.quantidade}</span>
        <button onclick="alterarQuantidade(${index}, 1)">+</button>
        <button onclick="removerItem(${index})" style="margin-left: 6px;">🗑️</button>
      </div>
    `;
    containerCarrinho.appendChild(li);
  });

  totalElemento.textContent = `R$ ${totalDinheiro.toFixed(2).replace(".", ",")}`;
}

function finalizarPedidoWhatsApp() {
  if (carrinho.length === 0) {
    alert("O seu carrinho está vazio!");
    return;
  }

  const nomeInput = document.getElementById("entrega-nome");
  const enderecoInput = document.getElementById("entrega-endereco");
  const pagamentoInput = document.getElementById("entrega-pagamento");

  const nome = nomeInput ? nomeInput.value.trim() : "";
  const endereco = enderecoInput ? enderecoInput.value.trim() : "";
  const pagamento = pagamentoInput ? pagamentoInput.value : "";

  if (!nome || !endereco) {
    alert(
      "Por favor, preencha o seu nome e endereço de entrega antes de finalizar.",
    );
    return;
  }

  const numeroPedido = `ELEVE-${Date.now().toString().slice(-4)}`;

  // Emojis em sequências Unicode seguras para URL
  const emojiPedido = "\u{1F4E3}"; // 📣
  const emojiCliente = "\u{1F464}"; // 👤
  const emojiEndereco = "\u{1F3E1}"; // 🏠
  const emojiCartao = "\u{1F4B3}"; // 💳
  const emojiCarrinho = "\u{1F6D2}"; // 🛒
  const emojiItem = "\u{1F539}"; // 🔹
  const emojiDinheiro = "\u{1F4B2}"; // 💲

  let mensagem = `${emojiPedido} NOVO PEDIDO #${numeroPedido}*\n\n`;
  mensagem += `${emojiCliente} Cliente: ${nome}\n`;
  mensagem += `${emojiEndereco} Endereço: ${endereco}\n`;
  mensagem += `${emojiCartao} Forma de Pagamento: ${pagamento}\n\n`;
  mensagem += `${emojiCarrinho} ITENS DO PEDIDO:\n`;

  let total = 0;
  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;
    mensagem += `${emojiItem} ${item.quantidade}x ${item.nome} - R$ ${subtotal.toFixed(2).replace(".", ",")}\n`;
  });

  mensagem += `\n${emojiDinheiro} *TOTAL:* R$ ${total.toFixed(2).replace(".", ",")}`;

  const telefoneLoja = "557988487966";

  // URL formatada com encodeURIComponent de forma segura
  const url = `https://api.whatsapp.com/send?phone=${telefoneLoja}&text=${encodeURIComponent(mensagem)}`;

  carrinho = [];
  if (nomeInput) nomeInput.value = "";
  if (enderecoInput) enderecoInput.value = "";

  salvarERenderizar();
  window.open(url, "_blank");
}

// MODAL DE DETALHES DO PRODUTO
function abrirModalProduto(id, event) {
  // Evita abrir se o clique tiver vindo diretamente do botão ou de seus filhos
  if (event && event.target && event.target.closest("button")) {
    return;
  }

  const produto = listaProdutos.find((p) => p.id === id);
  if (!produto) return;

  const modal = document.getElementById("modal-produto");
  const imgEl = document.getElementById("modal-prod-img");
  const catEl = document.getElementById("modal-prod-cat");
  const tituloEl = document.getElementById("modal-prod-titulo");
  const precoEl = document.getElementById("modal-prod-preco");
  const descEl = document.getElementById("modal-prod-desc");
  const acoesEl = document.getElementById("modal-prod-acoes");

  if (!modal) return;

  if (imgEl) imgEl.innerHTML = produto.imagem;
  if (catEl) catEl.textContent = produto.categoria;
  if (tituloEl) tituloEl.textContent = produto.nome;
  if (precoEl)
    precoEl.textContent = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;
  if (descEl)
    descEl.textContent =
      produto.descricao || "Produto de alta qualidade da linha Eleve.";

  if (acoesEl) {
    acoesEl.innerHTML = `
      <button class="btn btn-primary add-to-cart-btn" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco}, event)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span>Adicionar ao Carrinho</span>
      </button>
    `;
  }

  modal.classList.add("modal-ativo");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function fecharModalProduto() {
  const modal = document.getElementById("modal-produto");
  if (!modal) return;

  modal.classList.remove("modal-ativo");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

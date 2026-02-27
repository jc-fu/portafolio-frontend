// Reemplaza esto por tus 20 proyectos
const projects = [
{
  title: "News Homepage — Tailwind",
  desc: "Landing responsive tipo portal de noticias con layout en grid, menú móvil con overlay y toggle en JavaScript.",
  img: "assets/img/img20.jpg", // <-- la pones tú
  url: "projects/20-landingPageTailwind/index.html", // ajusta según tu estructura real
  tags: ["html", "tailwind", "responsive", "grid", "mobile-menu", "overlay", "javascript", "ui"],
  category: "landing"
},
{
  title: "Formulario de Registro — Floating Labels",
  desc: "Formulario de registro con etiquetas flotantes (sin JS), animación de barra inferior al focus y layout en CSS Grid con imagen lateral.",
  img: "assets/img/img19.jpg", // <-- la pones tú
  url: "projects/19-formAnimado/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "form", "css-grid", "floating-labels", "ui", "responsive"],
  category: "ui"
},
{
  title: "Landing Animada — Minimalism",
  desc: "Landing minimalista con animación de entrada (clip-path + transform) y panel con imagen revelada por keyframes.",
  img: "assets/img/img18.jpg", // <-- la pones tú
  url: "projects/18-landingPageAnimada/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "animation", "clip-path", "keyframes", "minimalism", "landing"],
  category: "landing"
},
{
  title: "Galería + Lightbox (CSS :target)",
  desc: "Galería responsive en CSS Grid con lightbox sin JS usando :target; overlay y botón de cerrar.",
  img: "assets/img/img17.jpg", // <-- la pones tú
  url: "projects/17-galleryLightBox/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "gallery", "lightbox", "target", "css-grid", "responsive", "ui"],
  category: "ui"
},
{
  title: "Card Hover Overlay",
  desc: "Card con imagen y overlay animado al hover (translate + rotate), con título y descripción centrados.",
  img: "assets/img/img16.jpg", // <-- la pones tú
  url: "projects/16-cardAnimada/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "card", "hover", "overlay", "transitions", "transform", "ui"],
  category: "ui"
},
{
  title: "Modal CSS (sin JavaScript)",
  desc: "Modal con apertura/cierre usando :target, animación con clip-path y transición del contenido con transform.",
  img: "assets/img/img15.jpg", // <-- la pones tú
  url: "projects/15-modal/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "modal", "target", "clip-path", "transitions", "ui"],
  category: "ui"
},
{
  title: "Galería — Conoce nuestros proyectos",
  desc: "Galería responsive en CSS Grid (auto-fit/minmax) con 8 imágenes, object-fit cover y título con detalle decorativo.",
  img: "assets/img/img14.jpg", // <-- la pones tú
  url: "projects/14-galleryGrid/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "css-grid", "gallery", "responsive", "object-fit", "typography"],
  category: "ui"
},
{
  title: "Cards de Productos — CSS Grid",
  desc: "Grid responsive de cards (auto-fit) con imágenes via CSS variables y CTA; ideal para catálogo/planes.",
  img: "assets/img/img13.jpg", // <-- la pones tú
  url: "projects/13-cardsGrid/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "css-grid", "cards", "responsive", "css-variables", "catalog"],
  category: "ui"
},
{
  title: "Card Presentation — CSS Grid",
  desc: "Tarjeta de presentación con CSS Grid: imagen lateral vía ::after, panel de contenido con CTA y layout responsive.",
  img: "assets/img/img12.jpg", // <-- la pones tú
  url: "projects/12-cardGrid/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "css-grid", "card", "responsive", "pseudo-element", "background-image", "cta"],
  category: "ui"
},
{
  title: "Formulario Contacto — Grid + Clip-path",
  desc: "Formulario de contacto en CSS Grid con panel ilustrado y fondo recortado con clip-path; responsive a una columna.",
  img: "assets/img/img11.jpg", // <-- la pones tú
  url: "projects/11-formGrid/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "form", "css-grid", "clip-path", "responsive", "ui"],
  category: "ui"
},
{
  title: "Website — Curso CSS3",
  desc: "Landing completa con hero, sección about, cards de planes, galería, stack de tecnologías y footer con redes sociales.",
  img: "assets/img/img10.jpg", // <-- la pones tú
  url: "projects/10-websiteFlexBox/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "landing", "responsive", "flexbox", "cards", "gallery", "fontawesome"],
  category: "landing"
},
{
  title: "Cards Flexbox",
  desc: "Sección de 3 cards responsive con Flexbox, ilustraciones SVG, texto con scroll y botón CTA.",
  img: "assets/img/img09.jpg", // <-- la pones tú
  url: "projects/09-cardsFlexBox/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "flexbox", "cards", "responsive", "svg", "ui"],
  category: "ui"
},
{
  title: "Galería Flexbox",
  desc: "Galería responsive con Flexbox (wrap + gap), imágenes adaptativas con object-fit y tipografía Poppins.",
  img: "assets/img/img08.jpg", // <-- la pones tú
  url: "projects/08-galleryFlexBox/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "flexbox", "gallery", "responsive", "object-fit", "layout"],
  category: "ui"
},
{
  title: "Landing Page — JCFU Design",
  desc: "Landing responsive con navbar, hero en dos columnas (texto + ilustración SVG) y CTA principal.",
  img: "assets/img/img07.jpg", // <-- la pones tú
  url: "projects/07-landingPageFlexBox/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "landing", "flexbox", "responsive", "navbar", "cta", "svg"],
  category: "landing"
},
{
  title: "Formulario de Contacto",
  desc: "Formulario responsive con card centrada, fondo (gradient + imagen), inputs estilizados y botón con hover.",
  img: "assets/img/img06.jpg", // <-- la pones tú
  url: "projects/06-form/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "form", "responsive", "ui", "typography", "gradients"],
  category: "ui"
},
{
  title: "Menú fijo + Scroll suave",
  desc: "Navbar fija con enlaces ancla y desplazamiento suave; secciones full-screen con fondos en gradiente.",
  img: "assets/img/img05.jpg", // <-- la pones tú
  url: "projects/05-nav/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "navbar", "sticky", "scroll-smooth", "anchors", "layout", "gradients"],
  category: "ui"
},
{
  title: "Hero con Wave (SVG)",
  desc: "Hero full-screen con overlay (gradient + imagen), CTA y ola inferior en SVG para un look moderno.",
  img: "assets/img/img04.jpg", // <-- la pones tú
  url: "projects/04-wave/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "landing", "hero", "svg", "wave", "responsive", "typography"],
  category: "landing"
},
{
  title: "Parallax Scroll Landing",
  desc: "Página con efecto parallax usando background-attachment: fixed, secciones full-screen y bloques de texto intercalados.",
  img: "assets/img/img03.jpg", // <-- la pones tú
  url: "projects/03-landingPage/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "parallax", "scroll", "background-fixed", "landing", "responsive"],
  category: "landing"
},
{
  title: "Galería de Imágenes",
  desc: "Galería responsive con 3/2/1 columnas usando porcentajes, sombras y layout limpio en CSS.",
  img: "assets/img/img02.jpg", // <-- la pones tú
  url: "projects/02-galeria/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "gallery", "responsive", "media-queries", "layout"],
  category: "ui"
},
{
  title: "Card — Aprende CSS",
  desc: "Tarjeta UI con overlay (gradient + imagen), tipografía Raleway, CTA y diseño responsive.",
  img: "assets/img/img01.jpg", // <-- la pones tú
  url: "projects/01-card/index.html", // ajusta según tu estructura real
  tags: ["html", "css", "ui", "card", "responsive", "typography", "background-overlay"],
  category: "ui"
},
  // ... agrega hasta 20
];

const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const q = document.getElementById("q");
const cat = document.getElementById("cat");

function card(p){
  const a = document.createElement("a");
  a.className = "card";
  a.href = p.url;
  //a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML = `
    <img class="thumb" src="${p.img}" alt="${p.title}">
    <div class="content">
      <h3 class="title">${p.title}</h3>
      <p class="desc">${p.desc}</p>
      <div class="tags">
        ${p.tags.map(t => `<span class="tag">#${t}</span>`).join("")}
      </div>
    </div>
  `;
  return a;
}

function render(){
  const text = q.value.trim().toLowerCase();
  const c = cat.value;
  const filtered = projects.filter(p => {
    const matchesCat = (c === "all") || (p.category === c);
    const haystack = (p.title + " " + p.desc + " " + p.tags.join(" ")).toLowerCase();
    const matchesText = !text || haystack.includes(text);
    return matchesCat && matchesText;
  });
  grid.innerHTML = "";
  filtered.forEach(p => grid.appendChild(card(p)));
  empty.hidden = filtered.length !== 0;
}

q.addEventListener("input", render);
cat.addEventListener("change", render);
render();
console.log('Bienvenido!')

function displaysubMenu() {
  document.querySelector('.menu-2').classList.toggle('active')
}
function backmenu() {
  document.querySelector('.menu-2').classList.toggle('active')
}

function displayMenu() {
  document.querySelector('.menu').classList.toggle('active')
  document.querySelector('.overlay').classList.toggle('active')
  const submenu = document.querySelector('.menu-2.active')
  if (submenu) {
    document.querySelector('.menu-2').classList.toggle('active')
  }
  document.querySelector('.menu').innerHTML = `
            <button id="exit-menu-button" onclick="displayMenu()">
            <img
              class="menu-icon"
              src="https://images.icon-icons.com/1993/PNG/512/cancel_close_delete_exit_logout_remove_x_icon_123217.png"
              alt="Salir" />
          </button>
          <nav id="menu-categories" class="menu-list">
            <h2 class="menu-h">Categorías</h2>
            <ul>
              <li>
                <div class="menu-container" id="Componentes" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Componentes</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Ordenadores" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Ordenadores</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Perifericos" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Periféricos</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Gaming" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Gaming y videojuegos</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Smartphones" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Smartphones y tablets</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Televisores" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Televisores</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Electrodomesticos" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Electrodomésticos</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Hogar" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Hogar</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Sonido" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Sonido</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Relojes" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Relojes inteligentes</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Foto" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Fotografía</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
              <li>
                <div class="menu-container" id="Ocio" onclick="displaySecondMenu(event)">
                  <span class="menu-container-span">Ocio y movilidad</span>
                  <img
                    class="menu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Ver más" />
                </div>
              </li>
            </ul>
          </nav>
          <nav id="menu-trending" class="menu-list">
            <h3 class="menu-h">Trending</h3>
            <ul>
              <li>
                <a
                  href="https://www.pccomponentes.com/configurador"
                  class="menu-container"
                  id="configurador-trending"
                  >Configurador PCs<span class="trending"
                    >Te recomandamos</span
                  ></a
                >
              </li>
              <li>
                <a
                  href="https://www.pccomponentes.com/servicios-kit-digital"
                  class="menu-container"
                  id="kit-digital-trending"
                  >Kit Digital<span class="trending">Trending</span></a
                >
              </li>
              <li>
                <a
                  href="https://www.pccomponentes.com/novedades"
                  class="menu-container"
                  >Lanzamientos y novedades</a
                >
              </li>
              <li>
                <a
                  href="https://www.pccomponentes.com/reacondicionados"
                  class="menu-container"
                  >Reacondicionados</a
                >
              </li>
              <li>
                <a
                  href="https://www.pccomponentes.com/servicios"
                  class="menu-container"
                  >Servicios</a
                >
              </li>
              <li>
                <a
                  href="https://www.pccomponentes.com/empresas-y-profesionales"
                  class="menu-container"
                  >Empresas y profesionales</a
                >
              </li>
              <li>
                <a
                  href="https://www.pccomponentes.com/espacio-apple"
                  class="menu-container"
                  >Espacio Apple</a
                >
              </li>
            </ul>
          </nav>
  `
}

function displaySecondMenu(event) {
  const clickedElement = event.target
  const elementId = clickedElement.closest('.menu-container')
  const Id = elementId.id
  const existingSubmenu = document.querySelector('.menu-2')
  if (existingSubmenu) existingSubmenu.remove()
  const menu = document.querySelector('.menu')
  const div = document.createElement('div')
  div.className = 'menu-2'
  menu.insertAdjacentElement('afterend', div)

  switch (Id) {
    case 'Ordenadores':
      div.innerHTML = `
      <button id="exit-menu-button" onclick="backmenu()">
      <img
        class="submenu-icon"
        src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
        alt="Salir" />
    </button>
    <nav>
    <h4 class="submenu-h">Ordenadores</h4>
    <a href="https://www.pccomponentes.com/ordenadores" class="menu-ver-todo" target="_blank">Ver todo</a>
    <ul>
    <li><a href="https://www.pccomponentes.com/configurador" class="menu-container-2" target="_blank">Configurador de PCs</a></li>
    <li><a href="https://www.pccomponentes.com/portatiles" class="menu-container-2" target="_blank">Portátiles</a></li>
    <li><a href="https://www.pccomponentes.com/accesorios-portatiles" class="menu-container-2" target="_blank">Accesorios para portátiles</a></li>
    <li><a href="https://www.pccomponentes.com/sobremesa" class="menu-container-2" target="_blank">PC sobremesa</a></li>
    <li><a href="https://www.pccomponentes.com/software" class="menu-container-2" target="_blank">Software</a></li>
    </ul>
    </nav>
      `
      displaysubMenu()
      break

    case 'Componentes':
      div.innerHTML = `
        <button id="exit-menu-button" onclick="backmenu()">
        <img
          class="submenu-icon"
          src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
          alt="Salir" />
      </button>
      <nav>
      <h4 class="submenu-h">Componentes</h4>
      <a href="https://www.pccomponentes.com/componentes" class="menu-ver-todo" target="_blank">Ver todo</a>
      <ul>
      <li><a href="https://www.pccomponentes.com/configurador" class="menu-container-2" target="_blank">Configurador de PCs</a></li>
      <li><a href="https://www.pccomponentes.com/placas-base" class="menu-container-2" target="_blank">Placas base</a></li>
      <li><a href="https://www.pccomponentes.com/tarjetas-graficas" class="menu-container-2" target="_blank">Tarjetas gráficas</a></li>
      <li><a href="https://www.pccomponentes.com/procesadores" class="menu-container-2" target="_blank">Procesadores</a></li>
      <li><a href="https://www.pccomponentes.com/discos-duros" class="menu-container-2" target="_blank">Discos duros</a></li>
      <li><a href="https://www.pccomponentes.com/memorias-ram" class="menu-container-2" target="_blank">RAM</a></li>
      <li><a href="https://www.pccomponentes.com/fuentes-alimentacion" class="menu-container-2" target="_blank">Fuentes de alimentación</a></li>
      </ul>
      </nav>
        `
      displaysubMenu()
      break

    case 'Perifericos':
      div.innerHTML = `
          <button id="exit-menu-button" onclick="backmenu()">
          <img
            class="submenu-icon"
            src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
            alt="Salir" />
        </button>
        <nav>
        <h4 class="submenu-h">Periféricos</h4>
        <a href="https://www.pccomponentes.com/perifericos" class="menu-ver-todo" target="_blank">Ver todo</a>
        <ul>
        <li><a href="https://www.pccomponentes.com/monitores-pc" class="menu-container-2" target="_blank">Monitores</a></li>
        <li><a href="https://www.pccomponentes.com/teclados" class="menu-container-2" target="_blank">Teclados</a></li>
        <li><a href="https://www.pccomponentes.com/ratones" class="menu-container-2" target="_blank">Ratones</a></li>
        <li><a href="https://www.pccomponentes.com/auriculares" class="menu-container-2" target="_blank">Auriculares</a></li>
        <li><a href="https://www.pccomponentes.com/sillas" class="menu-container-2" target="_blank">Sillas</a></li>
        </ul>
        </nav>
          `
      displaysubMenu()
      break

    case 'Gaming':
      div.innerHTML = `
            <button id="exit-menu-button" onclick="backmenu()">
            <img
              class="submenu-icon"
              src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
              alt="Salir" />
          </button>
          <nav>
          <h4 class="submenu-h">Gaming y videojuegos</h4>
          <a href="https://www.pccomponentes.com/gaming" class="menu-ver-todo" target="_blank">Ver todo</a>
          <ul>
          <li><a href="https://www.pccomponentes.com/sobremesa/pccom-pccom-gaming/sobremesa-gaming" class="menu-container-2" target="_blank">Ordenadores gaming</a></li>
          <li><a href="https://www.pccomponentes.com/consolas-retro" class="menu-container-2" target="_blank">Consolas</a></li>
          <li><a href="https://www.pccomponentes.com/proximos-lanzamientos-videojuegos" class="menu-container-2" target="_blank">Videojuegos</a></li>
          <li><a href="https://www.pccomponentes.com/simulacion-gaming" class="menu-container-2" target="_blank">Simulación</a></li>
          <li><a href="https://www.pccomponentes.com/mundo-videojuegos" class="menu-container-2" target="_blank">Merchandising</a></li>
          </ul>
          </nav>
            `
      displaysubMenu()
      break

    case 'Smartphones':
      div.innerHTML = `
              <button id="exit-menu-button" onclick="backmenu()">
              <img
                class="submenu-icon"
                src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                alt="Salir" />
            </button>
            <nav>
            <h4 class="submenu-h">Smartphones y tablets</h4>
            <a href="https://www.pccomponentes.com/gaming" class="menu-ver-todo" target="_blank">Ver todo</a>
            <ul>
            <li><a href="https://www.pccomponentes.com/smartphone-moviles" class="menu-container-2" target="_blank">Smartphones</a></li>
            <li><a href="https://www.pccomponentes.com/tablets" class="menu-container-2" target="_blank">Tablets</a></li>
            <li><a href="https://www.pccomponentes.com/accesorios-smartphone" class="menu-container-2" target="_blank">Accesorios</a></li>
            <li><a href="https://www.pccomponentes.com/moviles-reacondicionados" class="menu-container-2" target="_blank">Reacondicionados</a></li>
            <li><a href="https://www.pccomponentes.com/libros-electronicos-e-books" class="menu-container-2" target="_blank">eBooks</a></li>
            </ul>
            </nav>
              `
      displaysubMenu()
      break

    case 'Televisores':
      div.innerHTML = `
                <button id="exit-menu-button" onclick="backmenu()">
                <img
                  class="submenu-icon"
                  src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                  alt="Salir" />
              </button>
              <nav>
              <h4 class="submenu-h">Televisores</h4>
              <a href="https://www.pccomponentes.com/especial-ocio-en-casa" class="menu-ver-todo" target="_blank">Ver todo</a>
              <ul>
              <li><a href="https://www.pccomponentes.com/televisores" class="menu-container-2" target="_blank">Televisores por pulgadas</a></li>
              <li><a href="https://www.pccomponentes.com/televisores" class="menu-container-2" target="_blank">Televisores por marca</a></li>
              <li><a href="https://www.pccomponentes.com/proyectores" class="menu-container-2" target="_blank">Proyectores</a></li>
              <li><a href="https://www.pccomponentes.com/cables-hdmi" class="menu-container-2" target="_blank">Cables HDMI</a></li>
              <li><a href="https://www.pccomponentes.com/accesorios-de-soportes/soporte-tv" class="menu-container-2" target="_blank">Soportes</a></li>
              </ul>
              </nav>
                `
      displaysubMenu()
      break

    case 'Electrodomesticos':
      div.innerHTML = `
                  <button id="exit-menu-button" onclick="backmenu()">
                  <img
                    class="submenu-icon"
                    src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                    alt="Salir" />
                </button>
                <nav>
                <h4 class="submenu-h">Electrodomésticos</h4>
                <a href="https://www.pccomponentes.com/electrodomesticos" class="menu-ver-todo" target="_blank">Ver todo</a>
                <ul>
                <li><a href="https://www.pccomponentes.com/gran-electrodomestico" class="menu-container-2" target="_blank">Gran electrodoméstico</a></li>
                <li><a href="https://www.pccomponentes.com/pequeno-electrodomestico" class="menu-container-2" target="_blank">Pequeño electrodoméstico</a></li>
                <li><a href="https://www.pccomponentes.com/especial-clima" class="menu-container-2" target="_blank">Ventilación y clima</a></li>
                <li><a href="https://www.pccomponentes.com/limpieza-y-cuidado-de-la-ropa" class="menu-container-2" target="_blank">Aspiradoras y limpieza</a></li>
                <li><a href="https://www.pccomponentes.com/cuidado-personal" class="menu-container-2" target="_blank">Belleza y salud</a></li>
                <li><a href="https://www.pccomponentes.com/especial-calefaccion" class="menu-container-2" target="_blank">Calefacción</a></li>
                </ul>
                </nav>
                  `
      displaysubMenu()
      break

    case 'Hogar':
      div.innerHTML = `
                    <button id="exit-menu-button" onclick="backmenu()">
                    <img
                      class="submenu-icon"
                      src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                      alt="Salir" />
                  </button>
                  <nav>
                  <h4 class="submenu-h">Hogar</h4>
                  <a href="https://www.pccomponentes.com/hogar" class="menu-ver-todo" target="_blank">Ver todo</a>
                  <ul>
                  <li><a href="https://www.pccomponentes.com/smarthome" class="menu-container-2" target="_blank">Domótica y smarthome</a></li>
                  <li><a href="https://www.pccomponentes.com/iluminacion" class="menu-container-2" target="_blank">Iluminación</a></li>
                  <li><a href="https://www.pccomponentes.com/jardin-y-bricolaje" class="menu-container-2" target="_blank">Jardín y bricolaje</a></li>
                  <li><a href="https://www.pccomponentes.com/oficina-y-papeleria" class="menu-container-2" target="_blank">Oficina y papelería</a></li>
                  <li><a href="https://www.pccomponentes.com/electrodomesticos" class="menu-container-2" target="_blank">Electrodomésticos</a></li>
                  </ul>
                  </nav>
                    `
      displaysubMenu()
      break

    case 'Sonido':
      div.innerHTML = `
                      <button id="exit-menu-button" onclick="backmenu()">
                      <img
                        class="submenu-icon"
                        src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                        alt="Salir" />
                    </button>
                    <nav>
                    <h4 class="submenu-h">Sonido</h4>
                    <a href="https://www.pccomponentes.com/audio" class="menu-ver-todo" target="_blank">Ver todo</a>
                    <ul>
                    <li><a href="https://www.pccomponentes.com/auriculares" class="menu-container-2" target="_blank">Auriculares</a></li>
                    <li><a href="https://www.pccomponentes.com/altavoces" class="menu-container-2" target="_blank">Altavoces</a></li>
                    <li><a href="https://www.pccomponentes.com/microfonos" class="menu-container-2" target="_blank">Micrófonos</a></li>
                    <li><a href="https://www.pccomponentes.com/car-audio" class="menu-container-2" target="_blank">Automóvil</a></li>
                    </ul>
                    </nav>
                      `
      displaysubMenu()
      break

    case 'Relojes':
      div.innerHTML = `
                        <button id="exit-menu-button" onclick="backmenu()">
                        <img
                          class="submenu-icon"
                          src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                          alt="Salir" />
                      </button>
                      <nav>
                      <h4 class="submenu-h">Relojes inteligentes</h4>
                      <a href="https://www.pccomponentes.com/wearables" class="menu-ver-todo" target="_blank">Ver todo</a>
                      <ul>
                      <li><a href="https://www.pccomponentes.com/smartwatch" class="menu-container-2" target="_blank">Wearables</a></li>
                      <li><a href="https://www.pccomponentes.com/accesorios-smartwatch" class="menu-container-2" target="_blank">Accesorios</a></li>
                      <li><a href="https://www.pccomponentes.com/pulseras-de-actividad" class="menu-container-2" target="_blank">Pulseras de actividad</a></li>
                      <li><a href="https://www.pccomponentes.com/relojes-deportivos-pulsometros" class="menu-container-2" target="_blank">Relojes deportivos y pulsómetros</a></li>
                      </ul>
                      <li><a href="https://www.pccomponentes.com/anillos-inteligentes" class="menu-container-2" target="_blank">Anillos inteligentes</a></li>
                      </nav>
                        `
      displaysubMenu()
      break

    case 'Foto':
      div.innerHTML = `
                          <button id="exit-menu-button" onclick="backmenu()">
                          <img
                            class="submenu-icon"
                            src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                            alt="Salir" />
                        </button>
                        <nav>
                        <h4 class="submenu-h">Fotografía</h4>
                        <a href="https://www.pccomponentes.com/especial-fotografia" class="menu-ver-todo" target="_blank">Ver todo</a>
                        <ul>
                        <li><a href="https://www.pccomponentes.com/camaras-digitales-compactas" class="menu-container-2" target="_blank">Cámaras de fotos</a></li>
                        <li><a href="https://www.pccomponentes.com/objetivos" class="menu-container-2" target="_blank">Objetivos para cámaras</a></li>
                        <li><a href="https://www.pccomponentes.com/accesorios-camaras" class="menu-container-2" target="_blank">Accesorios de fotografía</a></li>
                        <li><a href="https://www.pccomponentes.com/videocamaras" class="menu-container-2" target="_blank">Cámaras de vídeo</a></li>
                        </ul>
                        </nav>
                          `
      displaysubMenu()
      break

    case 'Ocio':
      div.innerHTML = `
                            <button id="exit-menu-button" onclick="backmenu()">
                            <img
                              class="submenu-icon"
                              src="https://images.icon-icons.com/685/PNG/512/right_icon-icons.com_61212.png"
                              alt="Salir" />
                          </button>
                          <nav>
                          <h4 class="submenu-h">Ocio y movilidad</h4>
                          <a href="https://www.pccomponentes.com/ocio-y-tiempo-libre" class="menu-ver-todo" target="_blank">Ver todo</a>
                          <ul>
                          <li><a href="https://www.pccomponentes.com/patinetes-electricos" class="menu-container-2" target="_blank">Patinetes eléctricos</a></li>
                          <li><a href="https://www.pccomponentes.com/bicicletas-electricas" class="menu-container-2" target="_blank">Bicicletas eléctricas</a></li>
                          <li><a href="https://www.pccomponentes.com/drones" class="menu-container-2" target="_blank">Drones</a></li>
                          <li><a href="https://www.pccomponentes.com/gadgets" class="menu-container-2" target="_blank">Gadgets tecnológicos</a></li>
                          <li><a href="https://www.pccomponentes.com/juguetes-y-juegos" class="menu-container-2" target="_blank">Juguetes y Juegos</a></li>
                          </ul>
                          </nav>
                            `
      displaysubMenu()
      break
  }
}

let articles = [
  {
    name: 'Lenovo IdeaPad 3 15ALC6',
    img: 'https://img.pccomponentes.com/articles/1063/10639213/1359-lenovo-ideapad-3-15iau7-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg',
    price: '668,84€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.5,
    type: 'Computer',
    link: 'https://www.pccomponentes.com/portatil-lenovo-ideapad-3-15alc6-amd-ryzen-5-5500u-16gb-512-gb-ssd-156'
  },

  {
    name: 'MSI AMD Radeon RX 6700 XT',
    img: 'https://thumb.pccomponentes.com/w-530-530/articles/38/383415/1173-msi-amd-radeon-rx-6700-xt-mech-2x-12gb-oc-12gb-gddr6.jpg',
    price: '655,60€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4,
    type: 'Components',
    link: 'https://www.pccomponentes.com/msi-amd-radeon-rx-6700-xt-mech-2x-12gb-oc-12gb-gddr6?refurbished'
  },

  {
    name: 'Sony PlayStation 5 Digital',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1080/10801090/157-sony-playstation-5-digital-slim.jpg',
    price: '399€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.8,
    type: 'Games',
    link: 'https://www.pccomponentes.com/sony-playstation-5-digital-slim'
  },

  {
    name: 'Gigabyte B550M Aorus Elite',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/30/300749/1475-gigabyte-b550m-aorus-elite.jpg',
    price: '104,04€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.2,
    type: 'Components',
    link: 'https://www.pccomponentes.com/gigabyte-b550m-aorus-elite'
  },

  {
    name: 'AMD Ryzen 9 9950X 4.3/5.7GHz',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10845779/1544-amd-ryzen-9-9950x-43-57ghz.jpg',
    price: '595,99€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 5,
    type: 'Components',
    link: 'https://www.pccomponentes.com/procesador-amd-ryzen-9-9950x-43-57ghz'
  },

  {
    name: 'WD Black SN770 1TB',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1006/10060346/1242-wd-black-sn770-1tb-nvme-ssd.jpg',
    price: '67,99€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 3.8,
    type: 'Components',
    link: 'https://www.pccomponentes.com/disco-duro-wd-black-sn770-1tb-disco-ssd-5150mb-s-nvme-pcie-40-m2-gen4-16gt-s'
  },

  {
    name: 'Corsair Vengeance RGB Pro DDR4 3200',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/35/351295/1838-corsair-vengeance-rgb-pro-ddr4-3200-pc4-25600-32gb-2x16gb-cl16.jpg',
    price: '129,98€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4,
    type: 'Components',
    link: 'https://www.pccomponentes.com/corsair-vengeance-rgb-pro-ddr4-3200-pc4-25600-32gb-2x16gb-cl16'
  },

  {
    name: 'Apple Macbook Air M4',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1087/10872312/1984-apple-macbook-air-apple-m4-10-nucleos-16-gb-256gb-ssd-gpu-8-nucleos-136-medianoche.jpg',
    price: '1.039€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.8,
    type: 'Computer',
    link: 'https://www.pccomponentes.com/portatil-apple-macbook-air-m4-10-nucleos-16-gb-256gb-ssd-gpu-8-nucleos-136-medianoche'
  },

  {
    name: 'HP 15-fd0080ns Intel Core i5-1334U',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1082/10828801/1405-hp-15-fd0080ns-intel-core-i5-1334u-16gb-512gb-ssd-156.jpg',
    price: '529€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 3,
    type: 'Computer',
    link: 'https://www.pccomponentes.com/portatil-hp-15-fd0080ns-intel-core-i5-1334u-16gb-512gb-ssd-156-win-11'
  },

  {
    name: 'Medion ERAZER Recon P10 MD34950',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1085/10856855/1567-medion-erazer-recon-p10-md34950-intel-core-i5-14400f-16gb-512gb-ssd-rtx-4060.jpg',
    price: '849€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.6,
    type: 'Computer',
    link: 'https://www.pccomponentes.com/ordenador-sobremesa-medion-erazer-recon-p10-md34950-intel-core-i5-14400f-16gb-512gb-ssd-rtx-4060'
  },

  {
    name: 'PcCom Ready V2 AMD Ryzen 7 5800X',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1087/10879988/1751-pccom-ready-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-5060-ti-16gb-v2-windows-11-home-comprar.jpg',
    price: '1.269€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4,
    type: 'Computer',
    link: 'https://www.pccomponentes.com/ordenador-sobremesa-pccom-ready-v2-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-5060-ti-16gb-windows-11-home'
  },

  {
    name: 'Nintendo Switch OLED',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/43/432883/1588-nintendo-switch-oled-azul-neon-rojo-neon-opiniones.jpg',
    price: '324€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.8,
    type: 'Games',
    link: 'https://www.pccomponentes.com/nintendo-switch-oled-azul-neon-rojo-neon'
  },

  {
    name: 'Microsoft Xbox Series X 1TB',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/32/323078/1684-microsoft-xbox-series-x-1tb.jpg',
    price: '444,90€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.3,
    type: 'Games',
    link: 'https://www.pccomponentes.com/microsoft-xbox-series-x-1tb-negra?refurbished'
  },

  {
    name: 'AstroBot PS5',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1083/10839235/1129-astrobot-ps5.jpg',
    price: '54,99€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.5,
    type: 'Games',
    link: 'https://www.pccomponentes.com/astrobot-ps5'
  },

  {
    name: 'Just Dance 2021 Xbox One/Series',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/33/334432/1386-just-dance-2021-xbox-one-series.jpg',
    price: '42,64€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 3.3,
    type: 'Games',
    link: 'https://www.pccomponentes.com/just-dance-2021-xbox-one-series'
  },

  {
    name: 'Apple iPhone 16 Pro Max 256GB Titanio Blanco',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1085/10855068/1301-apple-iphone-16-pro-max-256gb-titanio-blanco-libre.jpg',
    price: '1.309€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 5,
    type: 'SmartPhones',
    link: 'https://www.pccomponentes.com/movil-apple-iphone-16-pro-max-256gb-titanio-blanco-libre'
  },

  {
    name: 'Samsung Galaxy S25 Ultra 512GB Negro',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1086/10866751/1707-samsung-galaxy-s25-ultra-smartphone-con-ia-almacenamiento-512gb-bateria-5000mah-titanio-negro-comprar.jpg',
    price: '1.329€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.5,
    type: 'SmartPhones',
    link: 'https://www.pccomponentes.com/movil-samsung-galaxy-s25-ultra-smartphone-con-ia-almacenamiento-512gb-bateria-5000mah-titanio-negro'
  },

  {
    name: 'Samsung Galaxy S24 256GB Violeta Cobalt',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10818341/1726-samsung-galaxy-s24-8-256gb-violeta-cobalt-libre.jpg',
    price: '649€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.1,
    type: 'SmartPhones',
    link: 'https://www.pccomponentes.com/movil-samsung-galaxy-s24-8-256gb-color-violeta-cobalt-libre'
  },

  {
    name: 'Apple iPhone 16 Pro 128GB Titanio Negro',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1085/10855051/1647-apple-iphone-16-pro-128gb-titanio-negro-libre.jpg',
    price: '1.079€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.7,
    type: 'SmartPhones',
    link: 'https://www.pccomponentes.com/movil-apple-iphone-16-pro-128gb-titanio-negro-libre'
  },

  {
    name: 'Apple iPhone 16 128GB Azul Ultramar',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1085/10855024/1115-apple-iphone-16-128gb-azul-ultramar-caracteristicas.jpg',
    price: '815€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4,
    type: 'SmartPhones',
    link: 'https://www.pccomponentes.com/movil-apple-iphone-16-128gb-azul-ultramar'
  },

  {
    name: 'Intel Core Ultra 7 265KF 3.3/5.5GHz Box',
    img: 'https://thumb.pccomponentes.com/w-150-150/articles/1086/10860622/1276-intel-core-ultra-7-265kf-33-55ghz-box.jpg',
    price: '319,99€',
    seller: 'PcComponentes',
    shipping: 'Envío gratis',
    review: 4.4,
    type: 'Components',
    link: 'https://www.pccomponentes.com/procesador-intel-core-ultra-7-265kf-33-55ghz-box'
  }
]

const store = document.getElementById('store')

for (let i = 0; i < 21; i++) {
  const div = document.createElement('a')
  div.classList.add('divContainer')

  const image = document.createElement('img')
  image.src = articles[i].img

  const name = document.createElement('h4')
  name.textContent = articles[i].name

  const price = document.createElement('h5')
  price.textContent = articles[i].price

  const rating = document.createElement('div')
  rating.classList.add('review')
  const span1 = document.createElement('span')
  span1.textContent = articles[i].review + '/5'
  const span2 = document.createElement('span')
  span2.textContent = '⭐'
  rating.appendChild(span1)
  rating.appendChild(span2)

  const seller = document.createElement('h6')
  seller.textContent = 'Vendido por: ' + articles[i].seller

  const ship = document.createElement('span')
  ship.classList.add('ship')
  ship.textContent = articles[i].shipping

  const type = articles[i].type
  div.classList.add(type)

  div.href = articles[i].link

  div.appendChild(image)
  div.appendChild(name)
  div.appendChild(price)
  div.appendChild(rating)
  div.appendChild(seller)
  div.appendChild(ship)

  store.appendChild(div)
}

const btnPc = document.querySelector('#pc')
btnPc.addEventListener('click', function () {
  let array = document.querySelectorAll('.divContainer')
  array.forEach((array) => {
    if (!array.classList.contains('Computer')) {
      array.classList.add('noshow')
    } else {
      array.classList.remove('noshow')
    }
  })
})

const btnAll = document.querySelector('#all')
btnAll.addEventListener('click', function () {
  let array = document.querySelectorAll('.divContainer')
  array.forEach((array) => {
    if (array.classList.contains('noshow')) {
      array.classList.remove('noshow')
    }
  })
})

const btnComponents = document.querySelector('#components')
btnComponents.addEventListener('click', function () {
  let array = document.querySelectorAll('.divContainer')
  array.forEach((array) => {
    if (!array.classList.contains('Components')) {
      array.classList.add('noshow')
    } else {
      array.classList.remove('noshow')
    }
  })
})

const btnGames = document.querySelector('#games')
btnGames.addEventListener('click', function () {
  let array = document.querySelectorAll('.divContainer')
  array.forEach((array) => {
    if (!array.classList.contains('Games')) {
      array.classList.add('noshow')
    } else {
      array.classList.remove('noshow')
    }
  })
})

const btnSmartPhones = document.querySelector('#smartphones')
btnSmartPhones.addEventListener('click', function () {
  let array = document.querySelectorAll('.divContainer')
  array.forEach((array) => {
    if (!array.classList.contains('SmartPhones')) {
      array.classList.add('noshow')
    } else {
      array.classList.remove('noshow')
    }
  })
})

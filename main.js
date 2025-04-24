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

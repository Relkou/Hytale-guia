/**
 * Hytale Guide SPA Logic
 */

// Data Source
const guideData = [
    {
        id: 'world_structure',
        phase: 'Introducción',
        title: 'El Mundo de Hytale',
        desc: 'Estructura y comienzo.',
        img: 'https://cdn.hytale.com/5e7b9ec650cbcd001176c5bf_10___exploring_sunken_ship.png', // Placeholder or valid URL
        content: `
            <h3>Estructura del Mundo: Orbis</h3>
            <p>El mundo se llama <strong>Orbis</strong> (parte de un universo mayor). Se divide en zonas:</p>
            <ul>
                <li><strong>Zona 1:</strong> Llanuras verdes y bosques. Hogar de los Kiwicks.</li>
                <li><strong>Zona 2:</strong> Desiertos y tormentas de arena. Hogar de los Ferans y Scaraks.</li>
                <li><strong>Zona 3:</strong> Montañas nevadas. Ruinas y aldeas hostiles. Yeti.</li>
                <li><strong>Zona 4:</strong> Volcánica y subterránea. Dinosaurios y mobs feroces.</li>
            </ul>
            
            <h3>Historia y Lore</h3>
            <p>Existe una diosa llamada <strong>Gaia</strong> con 5 mechones de pelo que representan los elementos. Tu viaje inicia en el Templo de Gaia.</p>
        `
    },
    {
        id: 'quick_guide',
        phase: 'Esencial',
        title: 'Guía Rápida Completa',
        desc: 'Tu hoja de ruta para avanzar.',
        img: 'https://cdn.hytale.com/5e7b9ecb50cbcd001176c5c1_11___z2_camels.png',
        content: `
            <div class="d-grid gap-4">
                <div>
                    <h4 class="text-primary"><i class="fas fa-flag-checkered me-2"></i>1. Inicio y Recursos Básicos</h4>
                    <ul class="list-unstyled text-secondary">
                        <li><i class="fas fa-dot-circle me-2 small"></i>Apareces en un templo antiguo. Recolecta <strong>palitos y rocas</strong> del suelo.</li>
                        <li><i class="fas fa-dot-circle me-2 small"></i>Rompe la base de los árboles para que caigan enteros.</li>
                        <li><i class="fas fa-dot-circle me-2 small"></i>Recolecta <strong>fibra de arbustos</strong> y bayas rojas para comida/regeneración.</li>
                        <li><i class="fas fa-dot-circle me-2 small"></i><strong>Tip de Salto:</strong> Subes bloques automáticamente al acercarte. Salto normal llega hasta 3-4 bloques.</li>
                        <li><i class="fas fa-dot-circle me-2 small"></i><strong>Agacharse:</strong> Útil para no caer y para "deslizarse" desde alturas (>10 bloques) reduciendo daño.</li>
                        <li><i class="fas fa-dot-circle me-2 small"></i>Usa la tecla <strong>"M"</strong> para ver el mapa y marcar puntos.</li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-primary"><i class="fas fa-tools me-2"></i>2. Herramientas y Refugio</h4>
                    <ul class="list-unstyled text-secondary">
                        <li><i class="fas fa-check me-2 text-success"></i>Craftea Pico, Hacha y Espada básicos (inventario).</li>
                        <li><i class="fas fa-check me-2 text-success"></i>Crea la <strong>Mesa de Trabajo (Workbench)</strong> con madera y piedra gris.</li>
                        <li><i class="fas fa-check me-2 text-success"></i>¡Haz una cama! (Cuero + Fibra) para marcar spawn y pasar la noche.</li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-primary"><i class="fas fa-skull-crossbones me-2"></i>3. Combate</h4>
                    <p class="text-secondary">Usa <strong>Click Derecho</strong> para cubrirte. Las armas tienen habilidades (Tecla Q):</p>
                    <ul class="list-inline">
                        <li class="list-inline-item badge bg-dark border border-secondary">Espada (Rápida)</li>
                        <li class="list-inline-item badge bg-dark border border-secondary">Dagas (Salto/Agilidad)</li>
                        <li class="list-inline-item badge bg-dark border border-secondary">Mazo (Daño masivo)</li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-warning"><i class="fas fa-hammer me-2"></i>4. Era del Cobre</h4>
                    <ul class="list-unstyled text-secondary">
                        <li><i class="fas fa-angle-right me-2"></i>Busca <strong>Cobre (Naranja)</strong> en minas. Usa antorchas en mano secundaria (Z).</li>
                        <li><i class="fas fa-angle-right me-2"></i>Construye un <strong>Horno</strong> para lingotes y mejora herramientas.</li>
                        <li><i class="fas fa-angle-right me-2"></i>Craftea la <strong>Mesa de Herrería</strong> para armas de cobre (más daño/durabilidad).</li>
                        <li><i class="fas fa-angle-right me-2"></i>Mesa "Armorer" para armaduras (Set completo = 33 lingotes).</li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-secondary"><i class="fas fa-cube me-2"></i>5. Avance a Hierro y Templo</h4>
                    <p class="text-secondary">Visita el <strong>Templo Olvidado</strong> (espiral en mapa). Vence al Golem para desbloquear "Memorias" y recompensas.</p>
                    <ul class="list-unstyled text-secondary">
                        <li><i class="fas fa-search me-2"></i>Busca <strong>Hierro (Gris/Naranja)</strong> más profundo.</li>
                        <li><i class="fas fa-paw me-2"></i>Consigue cuero ligero (animales pequeños) y linen scraps (esqueletos/goblins).</li>
                        <li><i class="fas fa-arrow-up me-2"></i>Mejora a herramientas de hierro (22 lingotes).</li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-warning"><i class="fas fa-sun me-2"></i>6. Zona 2: Desierto y Torium</h4>
                    <p class="text-secondary">Ve al SUR. Mejora Workbench a Nvl 2 para <strong>Mochilas</strong>.</p>
                    <ul class="list-unstyled text-secondary">
                        <li>Minar <strong>Torium (Verde)</strong>.</li>
                        <li>Requiere mejorar herrería (Sacos de veneno de escorpiones).</li>
                        <li>Set de Torium: Mayor daño. Armadura protege contra veneno.</li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-info"><i class="fas fa-snowflake me-2"></i>7. Zona 3: Nieve y Cobalto</h4>
                    <p class="text-secondary">Ve al NORTE. Busca <strong>Cobalto (Azul)</strong> en montañas.</p>
                    <ul class="list-unstyled text-secondary">
                        <li>Mejora herramientas y armaduras con Cobalto, Cuero Pesado (Osos) y Shadow Scraps (Vikingos).</li>
                    </ul>
                </div>

                 <div>
                    <h4 class="text-danger"><i class="fas fa-fire me-2"></i>8. Zona 4: Adamantita (Endgame)</h4>
                    <p class="text-secondary">Cruza el océano. Biomas carbonizados. Mineral: <strong>Adamantita (Rojo)</strong>.</p>
                    <ul class="list-unstyled text-secondary">
                        <li>Mejora todo a Nivel 3.</li>
                        <li>Requiere Esencias (Fuego, Hielo, Void) y corazones del vacío.</li>
                        <li>Armadura de Adamantita = Máxima protección.</li>
                    </ul>
                </div>
                
                <div class="card bg-dark border-secondary p-3">
                    <h5 class="text-light"><i class="fas fa-tools me-2"></i>Otras Mesas</h5>
                     <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-primary">Construction</span>
                        <span class="badge bg-success">Farming</span>
                        <span class="badge bg-warning text-dark">Chef</span>
                        <span class="badge bg-info text-dark">Arcenist</span>
                        <span class="badge bg-light text-dark">Furniture</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'start',
        phase: 'Fase 1',
        title: 'Spawn y Primeros Pasos',
        desc: 'Sal de la cueva y consigue lo esencial.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-37.jpg.webp',
        content: `
            <h3>Saliendo de la Cueva Inicial</h3>
            <p>Cuando empieces una nueva partida de Hytale, aparecerás en una pequeña sala dentro de una cueva. Lo primero que verás son unas puertas. Atraviésalas para salir al mundo exterior.</p>
            <p>No importa dónde aparezcas, la estrategia inicial es la misma.</p>

            <div class="alert alert-info border-0 shadow-sm align-items-center" role="alert">
                <i class="fas fa-info-circle me-2"></i>
                <div>
                    <strong>Objetivo Principal:</strong> Consigue madera y piedra antes de que anochezca.
                </div>
            </div>

            <p class="mt-3"><i class="fas fa-keyboard me-2"></i><strong>Controles:</strong> Usa <code>Tabulador</code> para abrir tu inventario y craftear básicos (Cofres, palos, etc).</p>


            <h4 class="mt-4">Los 3 Materiales Básicos</h4>
            <ul class="list-group list-group-flush bg-transparent">
                <li class="list-group-item bg-transparent text-light"><i class="fas fa-check text-success me-2"></i><strong>1. Palos y Fibra:</strong> Recolecta arbustos.</li>
                <li class="list-group-item bg-transparent text-light"><i class="fas fa-check text-success me-2"></i><strong>2. Pico Básico:</strong> Craftealo en tu inventario (C).</li>
                <li class="list-group-item bg-transparent text-light"><i class="fas fa-check text-success me-2"></i><strong>3. Piedra:</strong> Usa el pico para minar rocas superficiales.</li>
            </ul>
        `
    },
    {
        id: 'tools',
        phase: 'Fase 2 y 3',
        title: 'Herramientas y Combate',
        desc: 'Equípate para defenderte.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-38.jpg.webp',
        content: `
            <h3>Herramientas Básicas</h3>
            <p>Con piedra y madera, mejora tus herramientas inmediatamente. Las herramientas de piedra duran más y recolectan más rápido.</p>

            <h3 class="mt-5">Combate Táctico</h3>
            <p>El combate en Hytale requiere timing. No spamees el click izquierdo.</p>
            <div class="row g-4 mt-2">
                <div class="col-md-6">
                     <div class="card bg-dark border-secondary h-100">
                        <div class="card-body">
                            <h5 class="card-title text-primary"><i class="fas fa-shield-alt me-2"></i>Defensa</h5>
                            <p class="card-text">Usa el escudo o el bloqueo (Click Derecho) para mitigar daño. Es vital contra esqueletos.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                     <div class="card bg-dark border-secondary h-100">
                        <div class="card-body">
                            <h5 class="card-title text-danger"><i class="fas fa-bullseye me-2"></i>Ataque</h5>
                            <p class="card-text">Carga tus golpes. Los ataques cargados hacen más daño y pueden romper guardias.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'base',
        phase: 'Fase 4',
        title: 'Tu Primera Base',
        desc: 'Un hogar seguro.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-39.jpg.webp',
        content: `
            <h3>Construcción</h3>
            <p>Busca un lugar elevado o defendible. Si encuentras una ruina, ¡reáparala! Ahorrarás muchos recursos.</p>

            <div class="alert alert-danger border-0 shadow-sm mt-4" role="alert">
                <h4 class="alert-heading"><i class="fas fa-bed me-2"></i>La Cama es Vital</h4>
                <p>Sin una cama, si mueres volverás al spawn original del mundo. Craftea una cama con <strong>Madera</strong> y <strong>Fibra/Pieles</strong> cuanto antes para establecer tu punto de respawn.</p>
            </div>
        `
    },
    {
        id: 'advanced',
        phase: 'Fase 5 y 6',
        title: 'Tecnología y Comida',
        desc: 'Avanzando en la era.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-43.jpg.webp',
        content: `
            <h3>Agricultura</h3>
            <p>No dependas de la caza. Crea un azada y planta semillas cerca del agua.</p>
            
            <h3>Mesas de Trabajo</h3>
            <p>Necesitarás un horno de fundición y un yunque para procesar hierro y cobre. Asegúrate de colocar estas estaciones bajo techo, o no funcionarán con lluvia.</p>
        `
    },
    {
        id: 'mining',
        phase: 'Fase 7',
        title: 'Minería Avanzada',
        desc: 'Hacia las profundidades.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-43.jpg.webp',
        content: `
            <h3>Capas del Mundo</h3>
            <p>El mundo de Hytale es profundo. A medida que bajas, los biomas cambian.</p>
            <ul>
                <li><strong>Superficie:</strong> Cobre y Carbón.</li>
                <li><strong>Profundidad Media:</strong> Hierro y Oro.</li>
                <li><strong>Profundidad Profunda:</strong> Torio y materiales mágicos.</li>
            </ul>
            <p class="text-warning"><i class="fas fa-exclamation-triangle me-2"></i>Lleva siempre antorchas. La oscuridad absoluta genera enemigos muy peligrosos.</p>
        `
    },
    {
        id: 'portals',
        phase: 'Fase 8',
        title: 'Portales y Dimensiones',
        desc: 'Nuevos mundos.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-44.jpg.webp',
        content: `
            <h3>Viaje Dimensional</h3>
            <p>Los portales te llevan a mazmorras instanciadas o planetas como Alterverse. Prepárate para lo peor antes de cruzar.</p>
            <p>Estos lugares suelen tener reglas físicas diferentes (gravedad, atmósfera) y loot exclusivo.</p>
        `
    },
    {
        id: 'tips',
        phase: 'Extra',
        title: 'Consejos Finales',
        desc: 'Trucos de experto.',
        img: 'https://cdn.hytale.com/5e7b9f7e50cbcd001176c5d3_14___zone_3_sunshaft_and_bloom.jpg',
        content: `
            <ul class="list-group list-group-flush bg-transparent">
                <li class="list-group-item bg-transparent text-light"><i class="fas fa-star text-warning me-2"></i><strong>Explora cuevas naturales:</strong> Es más rápido que cavar tú mismo.</li>
                <li class="list-group-item bg-transparent text-light"><i class="fas fa-star text-warning me-2"></i><strong>Organización:</strong> Usa cofres separados para loot de mobs y bloques.</li>
                <li class="list-group-item bg-transparent text-light"><i class="fas fa-star text-warning me-2"></i><strong>Sigilo:</strong> Agacharse (Shift) oculta tu nombre a otros jugadores y reduce el rango de detección de mobs.</li>
            </ul>
        `
    },
    {
        id: 'mechanics',
        phase: 'Mecánicas',
        title: 'Mecánicas Fundamentales',
        desc: 'Salud, energía y cámara.',
        img: 'https://cdn.hytale.com/5e7ba4cd3c9a2a00106793ce_129___yeti_2.jpg',
        content: `
            <h3>Salud y Estamina</h3>
            <ul>
                <li><strong>Estamina:</strong> Reemplaza a la barra de hambre. Es crucial para correr y habilidades.</li>
                <li><strong>Comida:</strong> Proporciona curación y bufos (ventajas temporales).</li>
                <li><strong>Mantling:</strong> Sistema de escalada para subir hasta 4 bloques de altura.</li>
                <li><strong>Deslizamiento:</strong> Puedes deslizarte (slide) para moverte con fluidez.</li>
            </ul>
            
            <h3>Control de Cámara</h3>
            <p>Puedes alternar entre <strong>primera y tercera persona</strong>. Usa "C" para mirar atrás sin girar.</p>
            
            <h3>Optimización</h3>
            <p>El juego pesará unos 8GB (se recomiendan 20GB). Está muy optimizado para PCs de gama baja.</p>
        `
    },
    {
        id: 'combat_advanced',
        phase: 'Combate',
        title: 'Maestría en Armas',
        desc: 'Habilidades, combos y cancels.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-38.jpg.webp',
        content: `
            <h3>Habilidades de Armas</h3>
            <p>Cada arma tiene un kit único: Click izquierdo (Ataque), Click derecho (Defensa/Secundario) y Habilidad Especial ("Ulti"). La Ulti se carga golpeando.</p>
            
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="card bg-black border-secondary p-3">
                        <h5 class="text-primary">Espada / Crues World</h5>
                        <ul>
                            <li><strong>Defensa:</strong> Click derecho.</li>
                            <li><strong>Dash:</strong> Click izquierdo mantenido.</li>
                            <li><strong>Ulti:</strong> Barrido + Golpe frontal.</li>
                        </ul>
                        <small class="text-muted">Tip: Cancela la animación de ataque con click derecho para engañar (feint).</small>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card bg-black border-secondary p-3">
                        <h5 class="text-danger">Dagas</h5>
                        <ul>
                            <li><strong>Ataque:</strong> Muy rápidos.</li>
                            <li><strong>Especial:</strong> Click mantenido te lanza al aire.</li>
                            <li><strong>Ulti:</strong> Ráfaga de cortes.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="alert alert-secondary mt-3">
                <i class="fas fa-sync me-2"></i><strong>Durabilidad:</strong> Las armas tienen <strong>durabilidad infinita</strong>, pero las herramientas NO. Se mejoran en el Yunque.
            </div>
             <p class="text-warning mt-2 small"><i class="fas fa-exclamation-triangle"></i> Nota: Los enemigos también usan escudos para bloquear.</p>
        `
    },
    {
        id: 'movement',
        phase: 'Exploración',
        title: 'Movimiento Avanzado',
        desc: 'Parkour y trucos.',
        img: 'https://cdn.hytale.com/5e7ba43d3c9a2a0010679386_105___crawlers_attacking.jpg',
        content: `
            <h3>Técnicas de Movilidad</h3>
            <ul>
                <li><strong>Super Salto de Dagas:</strong> Mantén el ataque cargado y salta justo antes de que te lance al aire para ganar altura extra.</li>
                <li><strong>Dagger Dash:</strong> Salta repetidamente mientras atacas con dagas para aprovechar la inercia y viajar rápido.</li>
                <li><strong>Salto Doble:</strong> Puedes subir 2 bloques de altura de un salto por defecto.</li>
                <li><strong>Caída Segura:</strong> Presiona "Control" justo antes de tocar el suelo para rodar y evitar daño (MLG Drop).</li>
            </ul>
        `
    },
    {
        id: 'creatures',
        phase: 'Bestiario',
        title: 'Criaturas y Facciones',
        desc: 'Amigos y enemigos.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-39.jpg.webp',
        content: `
            <p>Más de 500 mobs habitan Hytale.</p>
            
            <h4>Facciones Principales</h4>
            <div class="accordion accordion-flush" id="accordionMobs">
                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#mob1">
                            Trorks (Guerreros)
                        </button>
                    </h2>
                    <div id="mob1" class="accordion-collapse collapse" data-bs-parent="#accordionMobs">
                        <div class="accordion-body text-secondary">
                            Viven en campamentos con lobos. Tipos: Brawler, Chieftain (Jefe) y Shaman (invoca lobos blancos).
                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#mob2">
                            Kiwicks (Aliados)
                        </button>
                    </h2>
                    <div id="mob2" class="accordion-collapse collapse" data-bs-parent="#accordionMobs">
                        <div class="accordion-body text-secondary">
                            Zona 1. Adorables y amistosos. Tienen jerarquía: Bebés (Seedlings), Maduros (Verdes) y Chamanes (Tringers). ¡Salúdalos!
                        </div>
                    </div>
                </div>
                 <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#mob3">
                            Ferans
                        </button>
                    </h2>
                    <div id="mob3" class="accordion-collapse collapse" data-bs-parent="#accordionMobs">
                        <div class="accordion-body text-secondary">
                            Zona 2. Humanoides de piel. Neutrales. Tienen curtidurías en sus aldeas. (Nota: los lobos sueltan piel media-pesada).
                        </div>
                    </div>
                </div>
            </div>
            
            <h4 class="mt-4">Otros Mobs</h4>
            <ul>
                <li><strong>Vacas:</strong> Pacíficas, pero patean si las golpeas por detrás.</li>
                <li><strong>Osos:</strong> Se duermen y roncan.</li>
                <li><strong>Yeti:</strong> Zona 3. Actualmente bajo daño e IA (Early Access).</li>
                <li><strong>Scarak:</strong> Insectoides de la Zona 2. Protegen nidos gigantes. La reina (Brood Mother) está en el fondo.</li>
            </ul>
        `
    },
    {
        id: 'economy',
        phase: 'Economía',
        title: 'Comercio y Moneda',
        desc: 'Esencia de Vida.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-43.jpg.webp',
        content: `
            <h3>Mercaderes Kiwick</h3>
            <p>Intercambian bienes por <strong>Esencia de Vida</strong> (se obtiene de recursos vivos como trigo).</p>
            <ul>
                <li><strong>Venden:</strong> Comida (Tartas, Pinchos), Ingredientes (Sal, Masa) y Recetas raras.</li>
                <li><strong>Tipos de Esencia:</strong> Vida, Fuego, Hielo, Rayo, Vacío, Agua.</li>
            </ul>
        `
    },
    {
        id: 'biomes',
        phase: 'Mundo',
        title: 'Biomas y Entorno',
        desc: 'Clima y peligros.',
        img: 'https://areajugones.sport.es/wp-content/uploads/2026/01/image-4-44.jpg.webp',
        content: `
            <h3>Entorno Vivo</h3>
            <ul>
                <li><strong>Océanos:</strong> Arrecifes de coral, algas y tiburones (actualmente pasivos).</li>
                <li><strong>Clima:</strong> Tormentas de arena en Zona 2 que anulan la visión.</li>
                <li><strong>Peligros:</strong> Zarzas espinosas hacen daño al contacto.</li>
            </ul>
        `
    },
    {
        id: 'lore',
        phase: 'Historia',
        title: 'Lore y Misiones',
        desc: 'Los Recuerdos de Gaia.',
        img: 'https://cdn.hytale.com/5e7b9f8e50cbcd001176c5d9_17___new_environment_tease_2.jpg',
        content: `
            <h3>Misión Principal</h3>
            <ol>
                <li>Encuentra el <strong>Templo de Gaia</strong>.</li>
                <li>Derrota al Miniboss para abrir el Templo Perdido (zona indestructible).</li>
                <li>Interactúa con la Estatua Mágica para desbloquear "Los Recuerdos de Gaia".</li>
            </ol>
            <p><strong>Objetivo:</strong> Restaurar el Orbee olvidado.</p>
            <p><em>Recompensa:</em> Desbloquea el registro de Facciones y Mobs.</p>
        `
    },
    {
        id: 'creative',
        phase: 'Extra',
        title: 'Modo Creativo',
        desc: 'Herramientas de Dios.',
        img: 'https://cdn.hytale.com/5e7ba4d43c9a2a00106793d2_131___player_emotes.jpg',
        content: `
            <ul>
                <li><strong>Metamorfosis:</strong> Transfórmate en cualquier mob (¡incluso un Corgi o una Paloma!).</li>
                <li><strong>Cine:</strong> Herramientas para grabar películas, recorridos y proyectar videos in-game.</li>
                <li><strong>Scripting Visual:</strong> Modifica el juego usando nodos sin saber programar en Java.</li>
                <li><strong>Construcción:</strong> Copia y pega edificios (prefabs), usa brochas para terreno y genera figuras geométricas.</li>
            </ul>
        `
    },
    {
        id: 'facts',
        phase: 'Información',
        title: 'Datos y Curiosidades',
        desc: 'Lanzamiento y secretos.',
        img: 'https://cdn.hytale.com/5e7b9ebd50cbcd001176c5bd_9___goblin_fight.png',
        content: `
            <h3>Lanzamiento y Ediciones</h3>
            <ul>
                <li><strong>Plataformas:</strong> Primero PC. Luego Consolas y Móvil.</li>
                <li><strong>Ediciones:</strong> Estándar ($20), Supporter ($35), Cruise Breaker ($70+). Cosméticos exclusivos en Early Access.</li>
                <li><strong>Monetización:</strong> NO Pay-to-Win. Programa de creadores (5-7% comisión).</li>
            </ul>

            <h3>Desarrollo</h3>
            <p>Iniciado en 2015. Adquirido por Riot Games en 2020. El dueño es <strong>Simón</strong> (Hypixel). El desarrollo ha tenido pausas estratégicas para pulir el motor.</p>

            <h3>Curiosidades</h3>
            <ul>
                <li><strong>Ratas:</strong> Les atrae el queso.</li>
                <li><strong>Árboles:</strong> Al cortarlos, colapsan físicamente.</li>
                <li><strong>Quibex:</strong> Nacen de árboles y se convierten en árboles al morir.</li>
                <li><strong>Mods:</strong> Fáciles de hacer (Java básico). CurseForge oficial.</li>
                <li><strong>Eventos:</strong> Habrá eventos de Halloween y Navidad.</li>
            </ul>
        `
    }
];

// Crafting Data
// Uses external itemsDatabase from js/itemsData.js
let craftingRecipes = [...itemsDatabase]; // Initialize with all items

/**
 * DOM Elements
 */
const guideContainer = document.getElementById('guide-dynamic-container');
const craftingContainer = document.getElementById('crafting-grid');
const searchInput = document.getElementById('search-crafting');
const filterBtns = document.querySelectorAll('[data-filter]');
const addForm = document.getElementById('add-recipe-form');

/**
 * Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    // Render initial views
    renderGuideList();
    renderCraftingGrid(craftingRecipes);

    // Filter Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Toggle
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Logic
            const filter = btn.dataset.filter;
            filterRecipes(filter, searchInput.value);
        });
    });

    // Search Listener
    searchInput.addEventListener('input', (e) => {
        const activeFilter = document.querySelector('[data-filter].active').dataset.filter;
        filterRecipes(activeFilter, e.target.value);
    });

    // Add Form Listener
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewRecipe();
    });
});

/**
 * Guide Rendering Logic
 */
function renderGuideList() {
    let html = '<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">';

    guideData.forEach(guide => {
        html += `
            <div class="col">
                <div class="card h-100 bg-dark text-light border-secondary hover-elevate cursor-pointer" onclick="renderGuideDetail('${guide.id}')">
                    <div style="height: 200px; overflow: hidden;">
                        <img src="${guide.img}" class="card-img-top object-fit-cover h-100" alt="${guide.title}">
                    </div>
                    <div class="card-body">
                        <small class="text-primary fw-bold text-uppercase ls-1">${guide.phase}</small>
                        <h5 class="card-title mt-2 fw-bold">${guide.title}</h5>
                        <p class="card-text text-secondary small">${guide.desc}</p>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <span class="text-primary small fw-bold">Leer más <i class="fas fa-arrow-right ms-1"></i></span>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    guideContainer.innerHTML = html;
}

function renderGuideDetail(id) {
    const guide = guideData.find(g => g.id === id);
    if (!guide) return;

    // Create Detail View HTML
    const detailHtml = `
        <div class="fade-in">
            <button class="btn btn-outline-secondary btn-sm mb-4" onclick="renderGuideList()">
                <i class="fas fa-arrow-left me-2"></i>Volver a la lista
            </button>
            
            <div class="card bg-dark border-secondary shadow-lg overflow-hidden">
                <div class="position-relative" style="height: 300px;">
                    <img src="${guide.img}" class="w-100 h-100 object-fit-cover opacity-50" alt="${guide.title}">
                    <div class="position-absolute bottom-0 start-0 p-4 bg-gradient-to-t w-100">
                        <span class="badge bg-primary mb-2">${guide.phase}</span>
                        <h2 class="display-5 fw-bold text-white mb-0">${guide.title}</h2>
                    </div>
                </div>
                <div class="card-body p-4 p-lg-5">
                    <div class="article-content">
                        ${guide.content}
                    </div>
                </div>
                <div class="card-footer bg-black border-secondary p-4 d-flex justify-content-between">
                    <button class="btn btn-link text-decoration-none text-secondary" onclick="renderGuideList()">Inicio</button>
                </div>
            </div>
        </div>
    `;

    guideContainer.innerHTML = detailHtml;
    document.getElementById('guides').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Crafting Logic
 */
function renderCraftingGrid(items) {
    craftingContainer.innerHTML = items.map(item => `
        <div class="card bg-black border-secondary h-100 text-center p-2 hover-border-primary transition-all item-card position-relative fade-in">
            <div class="ratio ratio-1x1 mb-1 rounded overflow-hidden border border-dark">
                <img src="${item.img}" class="object-fit-cover" alt="${item.name}" loading="lazy">
            </div>
            <h6 class="text-light mb-0 text-truncate small">${item.name}</h6>
            <div class="position-absolute top-0 end-0 m-1">
                 <span class="badge bg-dark border border-secondary text-secondary" style="font-size: 0.6rem;">${item.id}</span>
            </div>
        </div>
    `).join('');
}

function filterRecipes(type, search) {
    const term = search.toLowerCase();

    const filtered = craftingRecipes.filter(item => {
        const matchesType = type === 'all' || item.type === type;
        const matchesSearch = item.name.toLowerCase().includes(term);
        return matchesType && matchesSearch;
    });

    renderCraftingGrid(filtered);
}

function addNewRecipe() {
    const name = document.getElementById('new-name').value;
    const type = document.getElementById('new-type').value;
    const icon = document.getElementById('new-icon').value;

    const newItem = {
        id: craftingRecipes.length + 1,
        name,
        type,
        icon
    };

    craftingRecipes.push(newItem);

    // Close modal (Bootstrap way)
    const modalEl = document.getElementById('addRecipeModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    // Reset Form
    addForm.reset();

    // Refresh Grid
    const activeFilter = document.querySelector('[data-filter].active').dataset.filter;
    const searchTerm = searchInput.value;
    filterRecipes(activeFilter, searchTerm);
}

// Global scope exposure for onclick handlers in HTML string
window.renderGuideList = renderGuideList;
window.renderGuideDetail = renderGuideDetail;
window.renderCraftingGrid = renderCraftingGrid;

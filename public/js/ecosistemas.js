/**
 * Catálogo Visual de Ecosistemas de México — Diagramas Isométricos en Vista Explotada
 * Paleta: 60% Marfil Antiguo (#EAE4D7) | 30% Negro Piano (#151515) | 10% Mineral y Botánico
 */

const ECOSYSTEMS = [
    {
        id: "matorral",
        indexTag: "01",
        title: "Matorral Xerófilo.",
        subtitle: "Cuatro estratos. Resiliencia extrema.",
        coverage: "~35% del territorio nacional (Altiplano, Sonora y Baja California)",
        edition: "Edición Marfil · Desierto Chihuahuense y Sonorense",
        accentColor: "#8A6D46",
        botanicalColor: "#5A6648",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · DOSEL Y AVIFAUNA",
                title: "Avifauna de dosel",
                shortDesc: "Correcaminos y halcón cola roja.",
                scientific: "Geococcyx californianus · Buteo jamaicensis",
                detail: "Aves rapaces y corredoras adaptadas a espacios abiertos con termorregulación eficiente y caza visual de largo alcance."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · VEGETACIÓN DOMINANTE",
                title: "Cactáceas y agaves",
                shortDesc: "Sahuaro, biznaga y gobernadora.",
                scientific: "Carnegiea gigantea · Larrea tridentata · Agave lechuguilla",
                detail: "Plantas suculentas con metabolismo ácido (CAM) que abren estomas de noche y almacenan agua en tejidos parenquimatosos."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · FAUNA TERRESTRE",
                title: "Fauna crepuscular",
                shortDesc: "Berrendo, coyote y cascabel.",
                scientific: "Antilocapra americana · Canis latrans · Crotalus atrox",
                detail: "Mamíferos corredores y reptiles de hábitos nocturnos o crepusculares que evitan la radiación térmica máxima del mediodía."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · SUSTRATO Y GEOLOGÍA",
                title: "Suelo aluvial calcáreo",
                shortDesc: "Drenaje rápido y caliche.",
                scientific: "Xerosol · Regosol · Litosol árido",
                detail: "Suelos pedregosos pobres en materia orgánica superficial, pero con reservas hídricas profundas aprovechadas por raíces pivotantes."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · RÉGIMEN CLIMÁTICO",
                title: "Clima árido extremo",
                shortDesc: "Lluvias < 300 mm anuales.",
                scientific: "Tipo BW · Oscilación térmica > 25 °C",
                detail: "Precipitación escasa y torrencial en verano con elevada evapotranspiración e intensa radiación solar durante todo el año."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · ADAPTACIÓN FISIOLÓGICA",
                title: "Espinas y ceras",
                shortDesc: "Cero pérdida hídrica foliar.",
                scientific: "Cutícula cerosa · Fotosíntesis CAM",
                detail: "Hojas transformadas en espinas que disipan calor, condensan rocío matutino y protegen las reservas hídricas frente a herbívoros."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · REGIONES CLAVE",
                title: "Endemismo récord",
                shortDesc: "Tehuacán-Cuicatlán y Sonora.",
                scientific: "Región Neártica · 60% flora endémica",
                detail: "México alberga la mayor diversidad de cactáceas del planeta, con centros de endemismo en Tehuacán-Cuicatlán y Cuatro Ciénegas."
            }
        ],
        svgLayers: {
            layer4: `
                <polygon points="200,260 330,315 200,370 70,315" fill="#CBBFA8" stroke="#151515" stroke-width="1.6"/>
                <polygon points="70,315 200,370 200,396 70,341" fill="#A99B82" stroke="#151515" stroke-width="1.6"/>
                <polygon points="330,315 200,370 200,396 330,341" fill="#8C7E66" stroke="#151515" stroke-width="1.6"/>
                <line x1="95" y1="336" x2="185" y2="374" stroke="#151515" stroke-width="0.9" stroke-dasharray="4 4" opacity="0.55"/>
                <line x1="215" y1="374" x2="305" y2="336" stroke="#EAE4D7" stroke-width="0.9" stroke-dasharray="3 4" opacity="0.5"/>
            `,
            layer3: `
                <polygon points="200,218 322,270 200,322 78,270" fill="rgba(234,228,215,0.72)" stroke="#151515" stroke-width="1.3" stroke-dasharray="4 3"/>
                <!-- Rocas desérticas y silueta de fauna terrestre -->
                <ellipse cx="155" cy="268" rx="14" ry="7" fill="#7D7465" stroke="#151515" stroke-width="1.2"/>
                <ellipse cx="168" cy="272" rx="9" ry="5" fill="#9A8F7D" stroke="#151515" stroke-width="1.1"/>
                <!-- Silueta estilizada de berrendo/coyote -->
                <path d="M214,274 L224,258 L236,258 L242,248 L247,250 L242,262 L244,274 M222,264 L220,275 M235,264 L237,275" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Serpiente estilizada -->
                <path d="M178,292 C186,286 194,296 202,290 C208,286 213,291 218,289" fill="none" stroke="#8A6D46" stroke-width="2.1" stroke-linecap="round"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(21,21,21,0.04)" stroke="#151515" stroke-width="1.1"/>
                <!-- Sahuaro central -->
                <path d="M200,224 L200,144 C200,138 208,138 208,144 L208,224 Z" fill="#4A5844" stroke="#151515" stroke-width="1.5"/>
                <path d="M200,184 L188,184 C184,184 184,180 184,176 L184,160 C184,155 190,155 190,160 L190,177 L200,177" fill="#4A5844" stroke="#151515" stroke-width="1.4"/>
                <path d="M208,172 L220,172 C224,172 224,168 224,164 L224,150 C224,145 218,145 218,150 L218,165 L208,165" fill="#4A5844" stroke="#151515" stroke-width="1.4"/>
                <!-- Agave izquierdo -->
                <path d="M148,218 L134,196 M148,218 L142,190 M148,218 L152,188 M148,218 L162,194 M148,218 L166,204" stroke="#5E6E54" stroke-width="2.3" stroke-linecap="round"/>
                <!-- Biznaga derecha -->
                <ellipse cx="252" cy="212" rx="13" ry="11" fill="#637356" stroke="#151515" stroke-width="1.4"/>
                <circle cx="252" cy="201" r="3" fill="#C98A3E"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <!-- Sol desértico minimalista -->
                <circle cx="246" cy="118" r="11" fill="#D4A656" opacity="0.75"/>
                <!-- Aves planeando -->
                <path d="M164,134 Q174,124 184,134 Q194,124 204,134" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="round"/>
                <path d="M210,148 Q217,141 224,148 Q231,141 238,148" fill="none" stroke="#151515" stroke-width="1.6" stroke-linecap="round"/>
            `
        }
    },
    {
        id: "selva-humeda",
        indexTag: "02",
        title: "Selva Húmeda.",
        subtitle: "Cuatro estratos. Biodiversidad máxima.",
        coverage: "Sureste mexicano (Lacandona, Calakmul y Los Tuxtlas)",
        edition: "Edición Selva Alta · Bosque Tropical Perennifolio",
        accentColor: "#3D5A3C",
        botanicalColor: "#2F4A2E",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · DOSEL EMERGENTE (40 M)",
                title: "Dosel y guacamayas",
                shortDesc: "Guacamaya roja y tucán real.",
                scientific: "Ara macao · Ramphastos sulfuratus · Harpia harpyja",
                detail: "Copa continua a más de 35 metros de altura que intercepta el 90% de la luz solar y sostiene aves frugívoras y rapaces."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · ESTRATO ARBÓREO DENSO",
                title: "Caoba, ceiba y epífitas",
                shortDesc: "Árboles perennifolios con contrafuertes.",
                scientific: "Swietenia macrophylla · Ceiba pentandra · Bromeliaceae",
                detail: "Árboles gigantes con raíces tabulares cubiertos de bromelias, orquídeas y lianas que crean microacuíferos aéreos."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · SOTOBOSQUE UMBRÍO",
                title: "Jaguar y tapir",
                shortDesc: "Depredadores tope y herbívoros.",
                scientific: "Panthera onca · Tapirus bairdii · Ateles geoffroyi",
                detail: "Ambiente húmedo y sombreado habitado por el jaguar, tapir centroamericano, mono araña y una vasta diversidad de anfibios."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · SUELO LATERÍTICO",
                title: "Reciclaje ultrarrápido",
                shortDesc: "Red micorrízica superficial.",
                scientific: "Acrisol · Ferralsol · Hongos saprófitos",
                detail: "La hojarasca se mineraliza en semanas gracias a hongos e insectos, reabsorbiendo nutrientes antes de que la lluvia los lave."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · RÉGIMEN PLUVIAL",
                title: "Lluvia > 2,000 mm",
                shortDesc: "Humedad relativa del 85%.",
                scientific: "Clima Af / Am · Temperatura media 24–27 °C",
                detail: "Precipitaciones abundantes todo el año sin estación seca marcada, generando evapotranspiración que alimenta nubes regionales."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · ESTRUCTURA VERTICAL",
                title: "Cinco pisos foliares",
                shortDesc: "Hojas con punta de goteo.",
                scientific: "Acumen foliar · Estratificación lumínica",
                detail: "Las hojas poseen ápices alargados para escurrir rápidamente el exceso de agua y evitar el crecimiento de algas epífilas."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · CONSERVACIÓN",
                title: "Corredor Mesoamericano",
                shortDesc: "Selva Lacandona y Calakmul.",
                scientific: "Región Neotropical · > 20,000 especies",
                detail: "Concentra la mayor riqueza específica por hectárea de México y funciona como sumidero masivo de carbono forestal."
            }
        ],
        svgLayers: {
            layer4: `
                <polygon points="200,260 330,315 200,370 70,315" fill="#8D735B" stroke="#151515" stroke-width="1.6"/>
                <polygon points="70,315 200,370 200,396 70,341" fill="#6E5641" stroke="#151515" stroke-width="1.6"/>
                <polygon points="330,315 200,370 200,396 330,341" fill="#544030" stroke="#151515" stroke-width="1.6"/>
                <path d="M120,315 Q160,305 200,318 T280,315" fill="none" stroke="#4D7C8A" stroke-width="2.5" opacity="0.75"/>
            `,
            layer3: `
                <polygon points="200,218 322,270 200,322 78,270" fill="rgba(74,88,68,0.16)" stroke="#151515" stroke-width="1.3" stroke-dasharray="4 3"/>
                <!-- Helechos de sotobosque -->
                <path d="M138,274 Q126,260 118,266 M138,274 Q136,256 130,256 M138,274 Q148,258 154,264" fill="none" stroke="#3D5A3C" stroke-width="2" stroke-linecap="round"/>
                <!-- Silueta felina (jaguar) -->
                <path d="M206,274 L218,263 L236,263 L244,257 L248,261 L240,269 L242,277 M216,269 L213,277 M232,269 L234,277 M206,268 Q196,262 194,270" fill="none" stroke="#151515" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(47,74,46,0.08)" stroke="#151515" stroke-width="1.1"/>
                <!-- Tronco de ceiba con contrafuertes -->
                <path d="M192,226 L196,162 L204,162 L208,226 L216,232 L184,232 Z" fill="#5A4634" stroke="#151515" stroke-width="1.4"/>
                <!-- Copas frondosas superpuestas -->
                <ellipse cx="200" cy="152" rx="44" ry="20" fill="#3D5A3C" stroke="#151515" stroke-width="1.5"/>
                <ellipse cx="164" cy="176" rx="28" ry="15" fill="#4E6E4B" stroke="#151515" stroke-width="1.4"/>
                <ellipse cx="238" cy="178" rx="28" ry="15" fill="#2F4A2E" stroke="#151515" stroke-width="1.4"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <!-- Guacamaya estilizada en vuelo -->
                <path d="M176,136 Q188,120 200,134 Q212,120 224,136" fill="none" stroke="#9E3B2B" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M200,134 L196,148" stroke="#D4A656" stroke-width="2" stroke-linecap="round"/>
                <path d="M150,145 Q157,138 164,145 Q171,138 178,145" fill="none" stroke="#151515" stroke-width="1.6" stroke-linecap="round"/>
            `
        }
    },
    {
        id: "bosque-templado",
        indexTag: "03",
        title: "Bosque Templado.",
        subtitle: "Cuatro estratos. Pulmón de montaña.",
        coverage: "~16% de México (Sierras Madre y Eje Neovolcánico)",
        edition: "Edición Pino-Encino · Alta Montaña Mexicana",
        accentColor: "#4A5844",
        botanicalColor: "#384734",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · COPAS DE CONÍFERAS",
                title: "Dosel y monarca",
                shortDesc: "Mariposa monarca y chara azul.",
                scientific: "Danaus plexippus · Cyanocitta stelleri",
                detail: "Las copas densas de oyamel amortiguan el viento y regulan el microclima invernal para millones de mariposas monarca."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · ASOCIACIÓN PINO-ENCINO",
                title: "Ocotes, oyameles y robles",
                shortDesc: "Mayor diversidad de pinos del mundo.",
                scientific: "Pinus montezumae · Abies religiosa · Quercus rugosa",
                detail: "México es el centro mundial de diversificación de pinos (49 especies) y encinos (más de 160 especies)."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · FAUNA DE MONTAÑA",
                title: "Venado y teporingo",
                shortDesc: "Venado cola blanca y lince rojo.",
                scientific: "Odocoileus virginianus · Lynx rufus · Romerolagus diazi",
                detail: "Mamíferos forestales y especies endémicas del Eje Neovolcánico como el conejo de los volcanes (teporingo)."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · SUELO VOLCÁNICO",
                title: "Andosol y acuíferos",
                shortDesc: "Recarga hídrica subterránea.",
                scientific: "Andosol húmico · Roca basáltica y andesítica",
                detail: "Suelos de origen volcánico porosos cubiertos de acículas de pino que infiltran el agua de lluvia hacia los valles."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · GRADIENTE TÉRMICO",
                title: "Clima subhúmedo frío",
                shortDesc: "12–18 °C con heladas invernales.",
                scientific: "Clima Cw · Altitud 1,600 a 3,400 m s. n. m.",
                detail: "Temperaturas frescas todo el año con lluvias concentradas en verano y heladas nocturnas entre noviembre y febrero."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · RESILIENCIA ECOLÓGICA",
                title: "Corteza ignífuga",
                shortDesc: "Adaptación a incendios naturales.",
                scientific: "Corteza suberosa · Rebrote basal en Quercus",
                detail: "Los pinos adultos poseen cortezas gruesas resistentes a fuegos superficiales periódicos, mientras los encinos rebrotan de cepa."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · SERVICIOS AMBIENTALES",
                title: "Fábrica de agua",
                shortDesc: "Abastece a las grandes urbes.",
                scientific: "Bosque La Primavera · Sierra Tarahumara",
                detail: "Regula el clima regional, captura carbono de larga duración y alimenta manantiales de Guadalajara, CDMX y Monterrey."
            }
        ],
        svgLayers: {
            layer4: `
                <polygon points="200,260 330,315 200,370 70,315" fill="#7B756D" stroke="#151515" stroke-width="1.6"/>
                <polygon points="70,315 200,370 200,396 70,341" fill="#5A554F" stroke="#151515" stroke-width="1.6"/>
                <polygon points="330,315 200,370 200,396 330,341" fill="#423E39" stroke="#151515" stroke-width="1.6"/>
                <line x1="115" y1="344" x2="180" y2="372" stroke="#EAE4D7" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
            `,
            layer3: `
                <polygon points="200,218 322,270 200,322 78,270" fill="rgba(234,228,215,0.68)" stroke="#151515" stroke-width="1.3" stroke-dasharray="4 3"/>
                <!-- Venado cola blanca con astas -->
                <path d="M208,274 L218,260 L232,260 L238,248 M238,248 L234,241 M238,248 L243,242 M216,266 L214,276 M230,266 L232,276" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Hongos silvestres -->
                <path d="M154,274 L154,268 M148,268 Q154,261 160,268 Z" fill="#8A6D46" stroke="#151515" stroke-width="1.1"/>
                <path d="M166,277 L166,272 M161,272 Q166,266 171,272 Z" fill="#8A6D46" stroke="#151515" stroke-width="1.1"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(74,88,68,0.08)" stroke="#151515" stroke-width="1.1"/>
                <!-- Pino / Oyamel cónico central -->
                <line x1="200" y1="226" x2="200" y2="144" stroke="#4D3B2C" stroke-width="3"/>
                <polygon points="200,136 178,166 222,166" fill="#384734" stroke="#151515" stroke-width="1.4"/>
                <polygon points="200,154 172,188 228,188" fill="#4A5844" stroke="#151515" stroke-width="1.4"/>
                <polygon points="200,174 166,210 234,210" fill="#384734" stroke="#151515" stroke-width="1.4"/>
                <!-- Encino lateral -->
                <line x1="146" y1="220" x2="146" y2="196" stroke="#4D3B2C" stroke-width="2.5"/>
                <circle cx="146" cy="186" r="16" fill="#63704D" stroke="#151515" stroke-width="1.4"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <!-- Mariposas monarca estilizadas -->
                <path d="M182,135 C175,127 173,139 182,138 C191,139 189,127 182,135 Z" fill="#C96A2B" stroke="#151515" stroke-width="1.1"/>
                <path d="M214,126 C208,119 206,129 214,129 C222,129 220,119 214,126 Z" fill="#C96A2B" stroke="#151515" stroke-width="1.1"/>
                <path d="M198,148 C193,142 191,150 198,150 C205,150 203,142 198,148 Z" fill="#C96A2B" stroke="#151515" stroke-width="1"/>
            `
        }
    },
    {
        id: "bosque-niebla",
        indexTag: "04",
        title: "Bosque de Niebla.",
        subtitle: "Cuatro estratos. Condensación perpetua.",
        coverage: "~1% del país, pero concentra >10% de la flora nacional",
        edition: "Edición Mesófila · Bosque Mesófilo de Montaña",
        accentColor: "#586862",
        botanicalColor: "#3F544B",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · DOSEL ENVUELTO EN NUBES",
                title: "Quetzal y pavón",
                shortDesc: "Avifauna mesoamericana endémica.",
                scientific: "Pharomachrus mocinno · Oreophasis derbianus",
                detail: "Hogar del quetzal mesoamericano y el pavón cornudo, aves emblemáticas que dispersan semillas de aguacatillos silvestres."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · FLORA RELICTA",
                title: "Helechos arborescentes",
                shortDesc: "Liquidámbar, magnolias y musgos.",
                scientific: "Cyathea fulva · Liquidambar styraciflua · Magnolia",
                detail: "Conviven árboles de linaje boreal (liquidámbar, haya) con helechos arborescentes jurásicos y cientos de orquídeas."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · FAUNA DE HUMEDAD",
                title: "Salamandras y ocelote",
                shortDesc: "Anfibios sin pulmones y felinos.",
                scientific: "Bolitoglossa · Leopardus pardalis · Bassariscus",
                detail: "La humedad constante permite la respiración cutánea de salamandras pletodóntidas altamente endémicas."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · ESPONJA HÍDRICA",
                title: "Mantillo ácido saturado",
                shortDesc: "Libera agua limpia todo el año.",
                scientific: "Humus ácido · Briofitas retenedoras",
                detail: "Gruesas alfombras de musgo y hojarasca actúan como una esponja que regula el caudal de ríos incluso en época seca."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · LLUVIA HORIZONTAL",
                title: "Neblina orográfica",
                shortDesc: "Condensación entre 800 y 2,500 m.",
                scientific: "Precipitación > 1,800 mm + Niebla constante",
                detail: "Los vientos húmedos procedentes del océano chocan contra las laderas montañosas condensándose directamente sobre el follaje."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · BIOGEOGRAFÍA",
                title: "Puente evolutivo",
                shortDesc: "Fusión Neártica y Neotropical.",
                scientific: "Refugio del Pleistoceno · Alta fragilidad",
                detail: "Es el ecosistema más amenazado de México por su distribución fragmentada en cañadas húmedas y laderas de barlovento."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · SANTUARIOS",
                title: "El Triunfo y Oaxaca",
                shortDesc: "Santuarios de biodiversidad.",
                scientific: "Sierra Madre de Chiapas · Sierra Norte",
                detail: "Destacan la Reserva El Triunfo en Chiapas, la Sierra Norte de Oaxaca y los bosques mesófilos de Veracruz e Hidalgo."
            }
        ],
        svgLayers: {
            layer4: `
                <polygon points="200,260 330,315 200,370 70,315" fill="#6D766E" stroke="#151515" stroke-width="1.6"/>
                <polygon points="70,315 200,370 200,396 70,341" fill="#525A53" stroke="#151515" stroke-width="1.6"/>
                <polygon points="330,315 200,370 200,396 330,341" fill="#3D443E" stroke="#151515" stroke-width="1.6"/>
                <path d="M130,320 Q170,334 210,322 T285,326" fill="none" stroke="#8EB3B8" stroke-width="2.2"/>
            `,
            layer3: `
                <polygon points="200,218 322,270 200,322 78,270" fill="rgba(88,104,98,0.16)" stroke="#151515" stroke-width="1.3" stroke-dasharray="4 3"/>
                <!-- Salamandra y musgo -->
                <path d="M178,274 Q192,266 206,272 T230,268" fill="none" stroke="#151515" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M186,271 L182,278 M186,271 L184,264 M206,272 L204,279 M206,272 L209,265" stroke="#151515" stroke-width="1.5" stroke-linecap="round"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(63,84,75,0.08)" stroke="#151515" stroke-width="1.1"/>
                <!-- Helecho arborescente -->
                <line x1="200" y1="224" x2="200" y2="172" stroke="#4B3E33" stroke-width="3"/>
                <path d="M200,174 Q174,158 158,174 M200,174 Q226,158 242,174 M200,174 Q182,146 168,154 M200,174 Q218,146 232,154 M200,174 L200,144" fill="none" stroke="#3F544B" stroke-width="2.4" stroke-linecap="round"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.65)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <!-- Bandas de niebla translúcida -->
                <path d="M142,138 Q170,128 200,138 T258,138" fill="none" stroke="#6E685C" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
                <path d="M156,149 Q184,141 212,149 T248,147" fill="none" stroke="#6E685C" stroke-width="3" stroke-linecap="round" opacity="0.35"/>
                <!-- Quetzal estilizado -->
                <path d="M188,128 Q198,118 208,128" fill="none" stroke="#2F6B4F" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M198,126 Q194,144 190,156" fill="none" stroke="#2F6B4F" stroke-width="1.6" stroke-linecap="round"/>
            `
        }
    },
    {
        id: "pastizal",
        indexTag: "05",
        title: "Pastizal Natural.",
        subtitle: "Cuatro estratos. Horizonte abierto.",
        coverage: "~6% del país (Chihuahua, Coahuila, Durango y Zacatecas)",
        edition: "Edición Estepa · Llanuras del Norte y Altiplano",
        accentColor: "#9A824C",
        botanicalColor: "#786B3B",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · ESPACIO AÉREO ABIERTO",
                title: "Águila real y halcón",
                shortDesc: "Cazadores de planicie abierta.",
                scientific: "Aquila chrysaetos · Falco femoralis",
                detail: "Las corrientes térmicas ascendentes sobre las llanuras permiten el patrullaje del águila real y el halcón aplomado."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · TAPIZ DE GRAMÍNEAS",
                title: "Zacate navajita y búfalo",
                shortDesc: "Pastos nativos resistentes a sequía.",
                scientific: "Bouteloua gracilis · Buchloe dactyloides",
                detail: "Gramíneas perennes amacolladas con puntos de crecimiento basales que soportan el pastoreo y rebrotan tras lluvias estivales."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · FAUNA DE LLANURA",
                title: "Perrito llanero y bisonte",
                shortDesc: "Colonias subterráneas y megafauna.",
                scientific: "Cynomys mexicanus · Bison bison",
                detail: "El perrito llanero mexicano es una especie clave: sus colonias sustentan hurones, tecolotes llaneros y zorras."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · RAÍCES PROFUNDAS",
                title: "Suelo chernozem fértil",
                shortDesc: "Biomasa subterránea de carbono.",
                scientific: "Phaeozem · Kastanozem · Red radicular densa",
                detail: "Hasta el 70% de la biomasa del pastizal vive bajo tierra, formando un entramado radicular que evita la erosión eólica."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · CLIMA ESTEPARIO",
                title: "Clima semiárido templado",
                shortDesc: "Lluvias de 300 a 600 mm anuales.",
                scientific: "Tipo BS · Vientos secos y heladas invernales",
                detail: "Se ubica en llanuras y mesetas entre 1,100 y 2,500 metros de altitud con marcada estacionalidad hídrica."
            },
            {
                num: "06",
                side: "right",
                layer: 3,
                layerName: "PARÁMETRO 06 · INGENIERÍA ECOLÓGICA",
                title: "Madrigueras filtrantes",
                shortDesc: "Infiltración pluvial acelerada.",
                scientific: "Bioturbación · Ciclos de nutrientes",
                detail: "Las galerías excavadas por roedores coloniales aumentan la permeabilidad del suelo y enriquecen su fertilidad."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · RESERVAS NATURALES",
                title: "Janos y Ojuelos",
                shortDesc: "Corredor de aves migratorias.",
                scientific: "Reserva Biosfera Janos · Llanos de Ojuelos",
                detail: "Refugio invernal fundamental para cientos de especies de aves de pastizal migratorias de América del Norte."
            }
        ],
        svgLayers: {
            layer4: `
                <polygon points="200,260 330,315 200,370 70,315" fill="#B5A482" stroke="#151515" stroke-width="1.6"/>
                <polygon points="70,315 200,370 200,396 70,341" fill="#8C7B5B" stroke="#151515" stroke-width="1.6"/>
                <polygon points="330,315 200,370 200,396 330,341" fill="#6E5F44" stroke="#151515" stroke-width="1.6"/>
                <!-- Raíces fibrosas profundas -->
                <path d="M150,346 L146,362 M175,356 L172,374 M200,366 L200,386 M228,354 L232,372" stroke="#151515" stroke-width="1" opacity="0.55"/>
            `,
            layer3: `
                <polygon points="200,218 322,270 200,322 78,270" fill="rgba(234,228,215,0.72)" stroke="#151515" stroke-width="1.3" stroke-dasharray="4 3"/>
                <!-- Montículo y perrito llanero -->
                <ellipse cx="186" cy="276" rx="16" ry="6" fill="#9A824C" stroke="#151515" stroke-width="1.2"/>
                <path d="M186,274 L186,261 C186,258 191,258 191,261 L191,274" fill="#B3945B" stroke="#151515" stroke-width="1.3"/>
                <!-- Silueta de bisonte -->
                <path d="M218,272 L224,256 L242,254 L248,262 L246,273 M224,265 L222,275 M238,265 L240,275" fill="none" stroke="#151515" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(154,130,76,0.08)" stroke="#151515" stroke-width="1.1"/>
                <!-- Macollos de zacate navajita -->
                <path d="M152,222 L144,198 M152,222 L152,194 M152,222 L160,198" stroke="#786B3B" stroke-width="2" stroke-linecap="round"/>
                <path d="M198,232 L188,202 M198,232 L198,196 M198,232 L208,202" stroke="#8F7E44" stroke-width="2.2" stroke-linecap="round"/>
                <path d="M244,220 L236,196 M244,220 L244,192 M244,220 L252,196" stroke="#786B3B" stroke-width="2" stroke-linecap="round"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <!-- Águila real planeando -->
                <path d="M174,134 Q188,122 200,134 Q212,122 226,134" fill="none" stroke="#151515" stroke-width="2.4" stroke-linecap="round"/>
            `
        }
    },
    {
        id: "manglar-arrecife",
        indexTag: "06",
        title: "Manglar y Arrecife.",
        subtitle: "Cuatro estratos. Frontera anfibia.",
        coverage: "Litorales del Golfo, Caribe y Pacífico mexicano",
        edition: "Edición Costera · Sian Ka'an y Arrecife Mesoamericano",
        accentColor: "#3B666B",
        botanicalColor: "#3D614B",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · DOSEL Y AVES COSTERAS",
                title: "Flamenco y fragata",
                shortDesc: "Colonias de anidación estuarina.",
                scientific: "Phoenicopterus ruber · Fregata magnificens",
                detail: "Las copas del manglar sirven de refugio y sitio de anidación para flamencos rosados, garzas, pelícanos y fragatas."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · BOSQUE HALÓFITO",
                title: "Mangle rojo, negro y blanco",
                shortDesc: "Raíces zancudas filtradoras de sal.",
                scientific: "Rhizophora mangle · Avicennia germinans",
                detail: "Árboles tolerantes a la salinidad que excretan sal por sus hojas y sostienen sus troncos mediante arcos de raíces aéreas."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · CRIADERO MARINO-ESTUARINO",
                title: "Cocodrilo, manatí y coral",
                shortDesc: "Guardería de peces y tortugas.",
                scientific: "Crocodylus moreletii · Trichechus manatus · Acropora",
                detail: "Entre las raíces sumergidas crecen larvas de camarón y peces arrecifales, conectando el manglar con los corales."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · TURBA Y PLATAFORMA CALCÁREA",
                title: "Carbono azul profundo",
                shortDesc: "Secuestro 4x mayor que selvas.",
                scientific: "Sedimento anaeróbico · Roca cárstica",
                detail: "Los sedimentos inundados almacenan carbono orgánico durante milenios, convirtiendo al manglar en el mayor sumidero costero."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · DINÁMICA MAREAL",
                title: "Interfaz agua dulce-mar",
                shortDesc: "Salinidad fluctuante de 0 a 40 ups.",
                scientific: "Aguas cálidas 26–29 °C · Mareas diurnas",
                detail: "Zona de transición donde desembocan ríos y cenotes hacia el mar, regulando la calidad del agua que llega al arrecife."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · DEFENSA COSTERA",
                title: "Escudo antihuracanes",
                shortDesc: "Disipa hasta 70% del oleaje.",
                scientific: "Atenuación hidráulica · Estabilización litoral",
                detail: "El entramado de raíces aéreas y arrecifes coralinos protege las costas mexicanas frente a marejadas ciclónicas y erosión."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · PATRIMONIO LITORAL",
                title: "Sian Ka'an y Marismas",
                shortDesc: "Cuarto lugar mundial en manglares.",
                scientific: "Ría Celestún · Arrecife Mesoamericano",
                detail: "México posee cerca de 905,000 hectáreas de manglar y el segundo sistema arrecifal más grande del mundo en el Caribe."
            }
        ],
        svgLayers: {
            layer4: `
                <polygon points="200,260 330,315 200,370 70,315" fill="#9BB0AE" stroke="#151515" stroke-width="1.6"/>
                <polygon points="70,315 200,370 200,396 70,341" fill="#6E8785" stroke="#151515" stroke-width="1.6"/>
                <polygon points="330,315 200,370 200,396 330,341" fill="#4E6664" stroke="#151515" stroke-width="1.6"/>
            `,
            layer3: `
                <polygon points="200,218 322,270 200,322 78,270" fill="rgba(59,102,107,0.22)" stroke="#151515" stroke-width="1.3"/>
                <!-- Estructuras coralinas y peces -->
                <path d="M156,274 L156,262 M156,268 L149,263 M156,266 L163,261" stroke="#C46B54" stroke-width="2.2" stroke-linecap="round"/>
                <path d="M224,268 Q232,262 240,268 Q232,274 224,268 M240,268 L245,264 L245,272 Z" fill="#3B666B" stroke="#151515" stroke-width="1.1"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(61,97,75,0.08)" stroke="#151515" stroke-width="1.1"/>
                <!-- Mangle rojo con raíces zancudas -->
                <path d="M200,192 Q182,206 176,226 M200,192 Q192,208 190,228 M200,192 Q208,208 210,228 M200,192 Q218,206 224,226" fill="none" stroke="#5A4634" stroke-width="2" stroke-linecap="round"/>
                <line x1="200" y1="194" x2="200" y2="168" stroke="#5A4634" stroke-width="3"/>
                <ellipse cx="200" cy="160" rx="36" ry="16" fill="#3D614B" stroke="#151515" stroke-width="1.5"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <!-- Flamenco rosado en vuelo -->
                <path d="M180,134 Q190,122 200,134 Q210,122 220,134" fill="none" stroke="#C86D63" stroke-width="2.3" stroke-linecap="round"/>
                <path d="M220,134 L228,132" stroke="#C86D63" stroke-width="1.8" stroke-linecap="round"/>
            `
        }
    }
];

let currentBiomeIndex = 0;
let isExploded = true;
let activeCalloutIndex = 0;

const elements = {
    pills: document.querySelectorAll(".biome-pill"),
    explodedIndexTag: document.getElementById("explodedIndexTag"),
    toggleExplodeBtn: document.getElementById("toggleExplodeBtn"),
    toggleExplodeLabel: document.getElementById("toggleExplodeLabel"),
    heroTitle: document.getElementById("heroTitle"),
    heroSubtitle: document.getElementById("heroSubtitle"),
    calloutsLeft: document.getElementById("calloutsLeft"),
    calloutsRight: document.getElementById("calloutsRight"),
    isometricCanvas: document.getElementById("isometricCanvas"),
    biomeCoverage: document.getElementById("biomeCoverage"),
    inspectorCode: document.getElementById("inspectorCode"),
    inspectorLayer: document.getElementById("inspectorLayer"),
    inspectorScientific: document.getElementById("inspectorScientific"),
    inspectorDetail: document.getElementById("inspectorDetail"),
    paginationDots: document.getElementById("paginationDots"),
    editionLabel: document.getElementById("editionLabel"),
    prevBiomeBtn: document.getElementById("prevBiomeBtn"),
    nextBiomeBtn: document.getElementById("nextBiomeBtn")
};

function renderPaginationDots() {
    elements.paginationDots.innerHTML = ECOSYSTEMS.map((eco, idx) => `
        <button
            type="button"
            class="dot-btn ${idx === currentBiomeIndex ? "active" : ""}"
            data-index="${idx}"
            aria-label="Ver ${eco.title.replace(".", "")}"
            title="${eco.title.replace(".", "")}"
        ></button>
    `).join("");

    elements.paginationDots.querySelectorAll(".dot-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            selectBiome(Number(btn.dataset.index));
        });
    });
}

function renderIsometricSVG(biome) {
    const { layer1, layer2, layer3, layer4 } = biome.svgLayers;
    elements.isometricCanvas.className = `isometric-canvas ${isExploded ? "is-exploded" : ""}`;
    elements.isometricCanvas.innerHTML = `
        <svg viewBox="0 0 400 440" role="img" aria-label="Diagrama en vista explotada de ${biome.title}">
            <defs>
                <filter id="layerShadow" x="-15%" y="-15%" width="130%" height="135%">
                    <feDropShadow dx="0" dy="10" stdDeviation="6" flood-color="#151515" flood-opacity="0.16"/>
                </filter>
            </defs>

            <!-- Eje vertical central de ensamblaje técnico -->
            <line x1="200" y1="68" x2="200" y2="412" stroke="#151515" stroke-width="0.9" stroke-dasharray="3 4" opacity="0.28"/>

            <!-- Estrato 04: Sustrato Geológico -->
            <g class="iso-layer iso-layer-4" data-layer="4" filter="url(#layerShadow)">
                ${layer4}
            </g>

            <!-- Estrato 03: Fauna Terrestre / Acuática -->
            <g class="iso-layer iso-layer-3" data-layer="3" filter="url(#layerShadow)">
                ${layer3}
            </g>

            <!-- Estrato 02: Flora Dominante -->
            <g class="iso-layer iso-layer-2" data-layer="2" filter="url(#layerShadow)">
                ${layer2}
            </g>

            <!-- Estrato 01: Dosel y Avifauna -->
            <g class="iso-layer iso-layer-1" data-layer="1" filter="url(#layerShadow)">
                ${layer1}
            </g>
        </svg>
    `;

    elements.isometricCanvas.querySelectorAll(".iso-layer").forEach((layerEl) => {
        layerEl.addEventListener("mouseenter", () => {
            const targetLayer = Number(layerEl.dataset.layer);
            const matchingIdx = biome.callouts.findIndex((c) => c.layer === targetLayer);
            if (matchingIdx !== -1) {
                highlightCallout(matchingIdx);
            }
        });
    });
}

function createCalloutHTML(callout, globalIdx) {
    return `
        <div
            class="callout-item ${globalIdx === activeCalloutIndex ? "is-active" : ""}"
            data-callout-idx="${globalIdx}"
            data-layer="${callout.layer}"
            tabindex="0"
            role="button"
        >
            <span class="callout-num">${callout.num}</span>
            <span class="callout-title">${callout.title}</span>
            <span class="callout-desc">${callout.shortDesc}</span>
        </div>
    `;
}

function highlightCallout(calloutIdx) {
    const biome = ECOSYSTEMS[currentBiomeIndex];
    const callout = biome.callouts[calloutIdx];
    if (!callout) return;

    activeCalloutIndex = calloutIdx;

    document.querySelectorAll(".callout-item").forEach((el) => {
        el.classList.toggle("is-active", Number(el.dataset.calloutIdx) === calloutIdx);
    });

    elements.isometricCanvas.classList.add("has-focus");
    elements.isometricCanvas.querySelectorAll(".iso-layer").forEach((layerEl) => {
        layerEl.classList.toggle("is-highlighted", Number(layerEl.dataset.layer) === callout.layer);
    });

    elements.inspectorCode.textContent = callout.num;
    elements.inspectorLayer.textContent = callout.layerName;
    elements.inspectorScientific.textContent = callout.scientific;
    elements.inspectorDetail.textContent = callout.detail;
}

function selectBiome(index) {
    currentBiomeIndex = (index + ECOSYSTEMS.length) % ECOSYSTEMS.length;
    activeCalloutIndex = 0;
    const biome = ECOSYSTEMS[currentBiomeIndex];

    elements.pills.forEach((pill, idx) => {
        pill.classList.toggle("active", idx === currentBiomeIndex);
    });

    elements.explodedIndexTag.innerHTML = `${biome.indexTag} &nbsp;·&nbsp; VISTA EXPLOTADA`;
    elements.heroTitle.textContent = biome.title;
    elements.heroSubtitle.textContent = biome.subtitle;
    elements.biomeCoverage.textContent = biome.coverage;
    elements.editionLabel.textContent = biome.edition;

    const leftHTML = biome.callouts
        .map((c, idx) => (c.side === "left" ? createCalloutHTML(c, idx) : ""))
        .join("");
    const rightHTML = biome.callouts
        .map((c, idx) => (c.side === "right" ? createCalloutHTML(c, idx) : ""))
        .join("");

    elements.calloutsLeft.innerHTML = leftHTML;
    elements.calloutsRight.innerHTML = rightHTML;

    renderIsometricSVG(biome);
    renderPaginationDots();

    document.querySelectorAll(".callout-item").forEach((item) => {
        const idx = Number(item.dataset.calloutIdx);
        item.addEventListener("mouseenter", () => highlightCallout(idx));
        item.addEventListener("click", () => highlightCallout(idx));
        item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                highlightCallout(idx);
            }
        });
    });

    highlightCallout(0);
}

elements.pills.forEach((pill) => {
    pill.addEventListener("click", () => {
        selectBiome(Number(pill.dataset.index));
    });
});

elements.toggleExplodeBtn.addEventListener("click", () => {
    isExploded = !isExploded;
    elements.isometricCanvas.classList.toggle("is-exploded", isExploded);
    elements.toggleExplodeBtn.setAttribute("aria-pressed", String(isExploded));
    elements.toggleExplodeLabel.textContent = isExploded ? "Estratos: Separados" : "Estratos: Compactos";
});

elements.prevBiomeBtn.addEventListener("click", () => {
    selectBiome(currentBiomeIndex - 1);
});

elements.nextBiomeBtn.addEventListener("click", () => {
    selectBiome(currentBiomeIndex + 1);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        selectBiome(currentBiomeIndex - 1);
    } else if (e.key === "ArrowRight") {
        selectBiome(currentBiomeIndex + 1);
    }
});

// Inicializar primer ecosistema
selectBiome(0);

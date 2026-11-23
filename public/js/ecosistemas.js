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
        coverage: "~30–35% del territorio nacional (Altiplano, Sonora y Baja California)",
        edition: "Edición Marfil · Desierto Chihuahuense y Sonorense",
        accentColor: "#8A6D46",
        botanicalColor: "#5A6648",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · DOSEL, AVIFAUNA Y POLINIZADORES",
                title: "Aves y polinización nocturna",
                shortDesc: "Correcaminos, halcón y murciélagos.",
                scientific: "Geococcyx californianus · Parabuteo unicinctus · Leptonycteris yerbabuenae",
                detail: "Aves rapaces como la aguililla rojinegra cazan en grupo desde cactus altos, mientras el murciélago magueyero migra de noche polinizando agaves y sahuaros."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · VEGETACIÓN XERÓFILA DOMINANTE",
                title: "Cactáceas, agaves y matorral",
                shortDesc: "Sahuaro, gobernadora, lechuguilla y ocotillo.",
                scientific: "Carnegiea gigantea · Larrea tridentata · Agave lechuguilla · Fouquieria splendens",
                detail: "Dominan plantas suculentas y arbustos micrófilos que pierden hojas en sequía. México concentra la mayor diversidad de cactáceas del mundo, con >60% de especies endémicas."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · FAUNA TERRESTRE Y RED TRÓFICA",
                title: "Fauna crepuscular y reptiles",
                shortDesc: "Berrendo, coyote, tortuga del bolsón y cascabel.",
                scientific: "Antilocapra americana · Canis latrans · Gopherus flavomarginatus · Crotalus atrox",
                detail: "Los roedores granulívoros sostienen a serpientes de cascabel, zorras del desierto y coyotes; la actividad se concentra al amanecer y anochecer para evitar el estrés térmico."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · BIOTOPO EDÁFICO Y ACUÍFEROS",
                title: "Suelo aluvial y caliche",
                shortDesc: "Suelos pedregosos con reservas profundas.",
                scientific: "Xerosol · Regosol · Litosol · Cuencas endorreicas",
                detail: "Suelos pobres en humus (<1%) con costras calcáreas (caliche) y drenaje rápido; freatofitas como el mezquite (Prosopis) desarrollan raíces de más de 15 m hacia mantos freáticos."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · BIOTOPO CLIMÁTICO",
                title: "Clima árido extremo",
                shortDesc: "Lluvias de 100–400 mm y oscilación >25 °C.",
                scientific: "Clima BW y BS · Altitud 0 a 2,200 m s. n. m.",
                detail: "Precipitación escasa y torrencial en verano con evapotranspiración muy superior a la lluvia anual y cambios bruscos entre días abrasadores y noches frías."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · FISIOLOGÍA DE SUPERVIVENCIA",
                title: "Metabolismo CAM y espinas",
                shortDesc: "Apertura estomática nocturna sin deshidratación.",
                scientific: "Fotosíntesis CAM · Cutícula cerosa · Tallos fotosintéticos",
                detail: "Las cactáceas fijan CO₂ durante la noche para evitar perder agua de día; las espinas reflejan radiación solar, condensan rocío matutino y disuaden herbívoros."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · BIOGEOGRAFÍA Y ANP",
                title: "Endemismo récord nacional",
                shortDesc: "Tehuacán-Cuicatlán, Vizcaíno y Cuatro Ciénegas.",
                scientific: "Región Neártica · Patrimonio Mundial UNESCO",
                detail: "Se extiende desde Baja California y Sonora hasta el Altiplano y el Valle de Tehuacán-Cuicatlán (Puebla-Oaxaca), funcionando como laboratorio evolutivo de zonas áridas."
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
                <ellipse cx="155" cy="268" rx="14" ry="7" fill="#7D7465" stroke="#151515" stroke-width="1.2"/>
                <ellipse cx="168" cy="272" rx="9" ry="5" fill="#9A8F7D" stroke="#151515" stroke-width="1.1"/>
                <path d="M214,274 L224,258 L236,258 L242,248 L247,250 L242,262 L244,274 M222,264 L220,275 M235,264 L237,275" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M178,292 C186,286 194,296 202,290 C208,286 213,291 218,289" fill="none" stroke="#8A6D46" stroke-width="2.1" stroke-linecap="round"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(21,21,21,0.04)" stroke="#151515" stroke-width="1.1"/>
                <path d="M200,224 L200,144 C200,138 208,138 208,144 L208,224 Z" fill="#4A5844" stroke="#151515" stroke-width="1.5"/>
                <path d="M200,184 L188,184 C184,184 184,180 184,176 L184,160 C184,155 190,155 190,160 L190,177 L200,177" fill="#4A5844" stroke="#151515" stroke-width="1.4"/>
                <path d="M208,172 L220,172 C224,172 224,168 224,164 L224,150 C224,145 218,145 218,150 L218,165 L208,165" fill="#4A5844" stroke="#151515" stroke-width="1.4"/>
                <path d="M148,218 L134,196 M148,218 L142,190 M148,218 L152,188 M148,218 L162,194 M148,218 L166,204" stroke="#5E6E54" stroke-width="2.3" stroke-linecap="round"/>
                <ellipse cx="252" cy="212" rx="13" ry="11" fill="#637356" stroke="#151515" stroke-width="1.4"/>
                <circle cx="252" cy="201" r="3" fill="#C98A3E"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <circle cx="246" cy="118" r="11" fill="#D4A656" opacity="0.75"/>
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
        coverage: "~4.8% del país (Lacandona, Calakmul, Chimalapas y Los Tuxtlas)",
        edition: "Edición Selva Alta · Bosque Tropical Perennifolio",
        accentColor: "#3D5A3C",
        botanicalColor: "#2F4A2E",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · DOSEL EMERGENTE (35–45 M)",
                title: "Dosel, guacamayas y rapaces",
                shortDesc: "Guacamaya roja, tucán real y águila arpía.",
                scientific: "Ara macao · Ramphastos sulfuratus · Harpia harpyja",
                detail: "La copa continua intercepta más del 90% de la luz solar; aves frugívoras y murciélagos dispersan semillas a kilómetros, mientras el águila arpía regula monos y perezosos."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · ESTRATO ARBÓREO Y EPÍFITAS",
                title: "Caoba, ceiba y bromelias",
                shortDesc: "Árboles gigantes con raíces tabulares.",
                scientific: "Swietenia macrophylla · Ceiba pentandra · Cedrela odorata · Bromeliaceae",
                detail: "Árboles perennifolios de maderas preciosas desarrollan contrafuertes para anclarse en suelos someros; sus ramas sostienen bromelias tanque que almacenan agua para ranas e insectos."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · SOTOBOSQUE Y CONTROL TRÓFICO",
                title: "Jaguar, tapir y mono araña",
                shortDesc: "Depredador tope y jardineros de la selva.",
                scientific: "Panthera onca · Tapirus bairdii · Ateles geoffroyi · Agalychnis callidryas",
                detail: "En el sotobosque umbrío (<2% de luz), el jaguar ejerce control trófico descendente sobre pecaríes y venados, mientras el tapir centroamericano regenera claros con su ramoneo."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · SUELO LATERÍTICO Y RECICLAJE",
                title: "Red micorrízica ultrarrápida",
                shortDesc: "Mineralización inmediata de hojarasca.",
                scientific: "Acrisol · Ferralsol · Hongos micorrízicos · Atta cephalotes",
                detail: "Las lluvias intensas lavan los minerales profundos, por lo que casi todos los nutrientes residen en la biomasa viva y son reciclados en semanas por hongos, termitas y hormigas arrieras."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · RÉGIMEN PLUVIAL ECUATORIAL",
                title: "Lluvia > 2,000–4,500 mm",
                shortDesc: "Humedad relativa >80% y temp. 24–27 °C.",
                scientific: "Clima Af y Am · Altitud 0 a 1,000 m s. n. m.",
                detail: "Precipitaciones abundantes durante todo el año sin estación seca marcada; la evapotranspiración del bosque genera ríos voladores que alimentan las lluvias del sureste."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · ARQUITECTURA FOLIAR",
                title: "Cinco pisos y hojas de goteo",
                shortDesc: "Ápices alargados contra hongos epífilos.",
                scientific: "Acumen foliar · Estratificación lumínica · Lianas",
                detail: "Las hojas presentan puntas alargadas (acumen) que escurren rápidamente el agua pluvial para evitar el crecimiento de algas y líquenes que bloquearían la fotosíntesis."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · BIODIVERSIDAD Y CONSERVACIÓN",
                title: "Corredor Mesoamericano",
                shortDesc: "Selva Lacandona, Calakmul y Los Tuxtlas.",
                scientific: "Región Neotropical · >20,000 especies vasculares",
                detail: "Abarca Chiapas, Campeche, Quintana Roo, Veracruz y Tabasco; concentra la mayor riqueza biológica por hectárea del país y funciona como sumidero crítico de carbono."
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
                <path d="M138,274 Q126,260 118,266 M138,274 Q136,256 130,256 M138,274 Q148,258 154,264" fill="none" stroke="#3D5A3C" stroke-width="2" stroke-linecap="round"/>
                <path d="M206,274 L218,263 L236,263 L244,257 L248,261 L240,269 L242,277 M216,269 L213,277 M232,269 L234,277 M206,268 Q196,262 194,270" fill="none" stroke="#151515" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(47,74,46,0.08)" stroke="#151515" stroke-width="1.1"/>
                <path d="M192,226 L196,162 L204,162 L208,226 L216,232 L184,232 Z" fill="#5A4634" stroke="#151515" stroke-width="1.4"/>
                <ellipse cx="200" cy="152" rx="44" ry="20" fill="#3D5A3C" stroke="#151515" stroke-width="1.5"/>
                <ellipse cx="164" cy="176" rx="28" ry="15" fill="#4E6E4B" stroke="#151515" stroke-width="1.4"/>
                <ellipse cx="238" cy="178" rx="28" ry="15" fill="#2F4A2E" stroke="#151515" stroke-width="1.4"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
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
        coverage: "~16% de México (Sierras Madre y Eje Neovolcánico Transversal)",
        edition: "Edición Pino-Encino · Alta Montaña Mexicana",
        accentColor: "#4A5844",
        botanicalColor: "#384734",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · COPAS DE CONÍFERAS Y REFUGIO",
                title: "Dosel de oyamel y monarca",
                shortDesc: "Hibernación de monarca, chara y búho moteado.",
                scientific: "Danaus plexippus · Cyanocitta stelleri · Strix occidentalis",
                detail: "Las densas copas de oyamel en Michoacán y Estado de México actúan como manta térmica contra heladas, resguardando millones de mariposas monarca cada invierno."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · ASOCIACIÓN PINO-ENCINO-MADROÑO",
                title: "Ocotes, oyameles y robles",
                shortDesc: "49 especies de pinos y >160 de encinos.",
                scientific: "Pinus montezumae · Abies religiosa · Quercus rugosa · Arbutus xalapensis",
                detail: "México es el principal centro mundial de diversificación de pinos y encinos; su asociación con madroños crea bosques mixtos de alta resiliencia."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · FAUNA FORESTAL Y ENDEMISMOS",
                title: "Venado, lince y teporingo",
                shortDesc: "Venado cola blanca y conejo de los volcanes.",
                scientific: "Odocoileus virginianus · Lynx rufus · Romerolagus diazi · Bassariscus astutus",
                detail: "Habitan mamíferos forestales como el lince rojo, zorra gris y cacomixtle, además del teporingo, lagomorfo endémico de los zacatonales subalpinos del Eje Neovolcánico."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · SUELO VOLCÁNICO Y RECARGA",
                title: "Andosol y mantillo de acículas",
                shortDesc: "Infiltración profunda hacia acuíferos urbanos.",
                scientific: "Andosol húmico · Basalto y andesita · Ectomicorrizas",
                detail: "Suelos derivados de cenizas volcánicas altamente porosos cubiertos de hojarasca que retienen la lluvia y recargan los mantos freáticos de los valles centrales."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · GRADIENTE ALTITUDINAL",
                title: "Clima templado subhúmedo",
                shortDesc: "10–18 °C con lluvias de verano y heladas.",
                scientific: "Clima Cw y Cb · Altitud 1,600 a 3,400 m s. n. m.",
                detail: "Precipitaciones entre 700 y 1,500 mm concentradas en verano, seguidas de una estación seca invernal con heladas nocturnas frecuentes en las cumbres."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · ECOLOGÍA DEL FUEGO",
                title: "Corteza ignífuga y micorrizas",
                shortDesc: "Adaptación a incendios superficiales periódicos.",
                scientific: "Corteza suberosa · Rebrote basal · Amanita · Boletus",
                detail: "Los pinos adultos poseen cortezas gruesas que aíslan el cambium del fuego superficial, mientras los encinos rebrotan desde la cepa y hongos ectomicorrízicos nutren sus raíces."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · SERVICIOS ECOSISTÉMICOS",
                title: "Fábrica de agua y carbono",
                shortDesc: "Bosque La Primavera, Tarahumara e Izta-Popo.",
                scientific: "Sierras Madre Occidental/Oriental · Eje Neovolcánico",
                detail: "Abastece de agua dulce a las mayores zonas metropolitanas de México (CDMX, Guadalajara y Monterrey) y almacena carbono forestal a largo plazo."
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
                <path d="M208,274 L218,260 L232,260 L238,248 M238,248 L234,241 M238,248 L243,242 M216,266 L214,276 M230,266 L232,276" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M154,274 L154,268 M148,268 Q154,261 160,268 Z" fill="#8A6D46" stroke="#151515" stroke-width="1.1"/>
                <path d="M166,277 L166,272 M161,272 Q166,266 171,272 Z" fill="#8A6D46" stroke="#151515" stroke-width="1.1"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(74,88,68,0.08)" stroke="#151515" stroke-width="1.1"/>
                <line x1="200" y1="226" x2="200" y2="144" stroke="#4D3B2C" stroke-width="3"/>
                <polygon points="200,136 178,166 222,166" fill="#384734" stroke="#151515" stroke-width="1.4"/>
                <polygon points="200,154 172,188 228,188" fill="#4A5844" stroke="#151515" stroke-width="1.4"/>
                <polygon points="200,174 166,210 234,210" fill="#384734" stroke="#151515" stroke-width="1.4"/>
                <line x1="146" y1="220" x2="146" y2="196" stroke="#4D3B2C" stroke-width="2.5"/>
                <circle cx="146" cy="186" r="16" fill="#63704D" stroke="#151515" stroke-width="1.4"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
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
        coverage: "<1% del país, pero alberga >10% de la flora nacional",
        edition: "Edición Mesófila · Bosque Mesófilo de Montaña",
        accentColor: "#586862",
        botanicalColor: "#3F544B",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · DOSEL ENVUELTO EN NUBES",
                title: "Quetzal, pavón y tucaneta",
                shortDesc: "Dispersores endémicos de aguacatillos.",
                scientific: "Pharomachrus mocinno · Oreophasis derbianus · Aulacorhynchus prasinus",
                detail: "Hogar del quetzal mesoamericano y el pavón cornudo (endémico de Chiapas y Guatemala), aves frugívoras indispensables para dispersar semillas de lauráceas."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · FLORA RELICTA Y EPÍFITAS",
                title: "Helechos arborescentes y orquídeas",
                shortDesc: "Liquidámbar, magnolias y >60% de orquídeas.",
                scientific: "Cyathea fulva · Liquidambar styraciflua · Magnolia · Orchidaceae",
                detail: "Conviven árboles de linaje boreal (liquidámbar, haya, encino) con helechos arborescentes jurásicos y más de la mitad de todas las especies de orquídeas de México."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · FAUNA DE ALTA HUMEDAD",
                title: "Salamandras, ranas y ocelote",
                shortDesc: "Anfibios de respiración cutánea y felinos.",
                scientific: "Bolitoglossa · Charadrahyla · Leopardus pardalis · Potos flavus",
                detail: "La saturación hídrica permite la respiración cutánea de salamandras pletodóntidas sin pulmones y ranas arborícolas con altísimo microendemismo por cañada."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · ESPONJA HÍDRICA DE MONTAÑA",
                title: "Mantillo ácido y briofitas",
                shortDesc: "Regula manantiales incluso en estiaje.",
                scientific: "Andosol ácido · Musgos y hepáticas · Captación oculta",
                detail: "Gruesas alfombras de musgo y hojarasca ácida absorben la humedad de la neblina y liberan agua cristalina de forma constante hacia las cuencas bajas."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · LLUVIA HORIZONTAL",
                title: "Condensación orográfica",
                shortDesc: "Niebla constante entre 800 y 2,500 m.",
                scientific: "Clima Cf y Cw · Lluvia > 1,800 mm + Niebla",
                detail: "Los vientos húmedos del Golfo y el Pacífico chocan contra las laderas de barlovento y condensan gotas directamente sobre el follaje (precipitación horizontal)."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · BIOGEOGRAFÍA Y FRAGILIDAD",
                title: "Refugio del Pleistoceno",
                shortDesc: "Fusión Neártica-Neotropical altamente vulnerable.",
                scientific: "Zona de transición mexicana · Ecosistema prioritario",
                detail: "Actuó como refugio climático durante las glaciaciones; al estar fragmentado en islas de montaña, es el ecosistema terrestre más amenazado de México."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · SANTUARIOS MEXICANOS",
                title: "El Triunfo, Oaxaca y Manantlán",
                shortDesc: "Máxima densidad de especies por hectárea.",
                scientific: "Sierra Madre de Chiapas · Sierra Norte · Veracruz",
                detail: "Destacan la Reserva El Triunfo (Chiapas), Sierra Norte de Oaxaca, Xalapa-Coatepec (Veracruz) y la Sierra de Manantlán (Jalisco-Colima)."
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
                <path d="M178,274 Q192,266 206,272 T230,268" fill="none" stroke="#151515" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M186,271 L182,278 M186,271 L184,264 M206,272 L204,279 M206,272 L209,265" stroke="#151515" stroke-width="1.5" stroke-linecap="round"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(63,84,75,0.08)" stroke="#151515" stroke-width="1.1"/>
                <line x1="200" y1="224" x2="200" y2="172" stroke="#4B3E33" stroke-width="3"/>
                <path d="M200,174 Q174,158 158,174 M200,174 Q226,158 242,174 M200,174 Q182,146 168,154 M200,174 Q218,146 232,154 M200,174 L200,144" fill="none" stroke="#3F544B" stroke-width="2.4" stroke-linecap="round"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.65)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <path d="M142,138 Q170,128 200,138 T258,138" fill="none" stroke="#6E685C" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
                <path d="M156,149 Q184,141 212,149 T248,147" fill="none" stroke="#6E685C" stroke-width="3" stroke-linecap="round" opacity="0.35"/>
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
        coverage: "~6% del país (Chihuahua, Coahuila, Durango, Zacatecas y Jalisco)",
        edition: "Edición Estepa · Llanuras del Norte y Altiplano",
        accentColor: "#9A824C",
        botanicalColor: "#786B3B",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · ESPACIO AÉREO Y AVES MIGRATORIAS",
                title: "Águila real y aves de estepa",
                shortDesc: "Cazadores de planicie y >300 aves migratorias.",
                scientific: "Aquila chrysaetos · Falco femoralis · Athene cunicularia · Ammodramus",
                detail: "Las corrientes térmicas sustentan al águila real y halcón aplomado; cada invierno arriban cientos de especies de aves de pastizal desde Canadá y Estados Unidos."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · TAPIZ DE GRAMÍNEAS AMACOLLADAS",
                title: "Zacate navajita y búfalo",
                shortDesc: "Meristemos basales resistentes a sequía y fuego.",
                scientific: "Bouteloua gracilis · Buchloe dactyloides · Aristida · Muhlenbergia",
                detail: "Gramíneas perennes nativas cuyos puntos de crecimiento se ubican a ras de suelo, permitiéndoles rebrotar rápidamente tras el pastoreo o incendios estacionales."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · ESPECIE CLAVE Y MEGAFAUNA",
                title: "Perrito llanero y bisonte",
                shortDesc: "Colonias subterráneas y manadas silvestres.",
                scientific: "Cynomys mexicanus · Bison bison · Taxidea taxus · Vulpes macrotis",
                detail: "El perrito llanero mexicano (endémico) es una especie clave: sus colonias mantienen el pasto corto y proveen refugio y alimento a tlalcoyotes, tecolotes y zorras norteñas."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · BIOMASA RADICULAR Y SUELO",
                title: "Suelo fértil y carbono oculto",
                shortDesc: "Hasta 70% de la biomasa vive bajo tierra.",
                scientific: "Phaeozem · Kastanozem · Red radicular fibrosa",
                detail: "Las raíces profundas forman un entramado denso que fija la tierra contra la erosión eólica y acumula grandes reservas de carbono orgánico en el subsuelo."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · CLIMA ESTEPARIO CONTINENTAL",
                title: "Clima semiárido templado",
                shortDesc: "Lluvias de 300–600 mm y vientos secos.",
                scientific: "Clima BS · Altitud 1,100 a 2,500 m s. n. m.",
                detail: "Se desarrolla en mesetas y llanuras de pendiente suave con inviernos fríos y secos, heladas frecuentes y lluvias concentradas entre julio y septiembre."
            },
            {
                num: "06",
                side: "right",
                layer: 3,
                layerName: "PARÁMETRO 06 · INGENIERÍA ECOSISTÉMICA",
                title: "Bioturbación e infiltración",
                shortDesc: "Galerías que recargan y fertilizan el suelo.",
                scientific: "Ingeniería de hábitat · Reciclaje mineral",
                detail: "Las madrigueras excavadas por roedores coloniales airean el suelo compactado, multiplican la infiltración del agua de lluvia y enriquecen los nutrientes superficiales."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · RESERVAS ESTRATÉGICAS",
                title: "Janos, Mapimí y Ojuelos",
                shortDesc: "Corredor biológico del norte y Altos de Jalisco.",
                scientific: "Reserva Biosfera Janos · Llanos de Ojuelos",
                detail: "Destacan Janos en Chihuahua (donde habita una manada silvestre de bisonte americano) y los Llanos de Ojuelos en el noreste de Jalisco y Zacatecas."
            }
        ],
        svgLayers: {
            layer4: `
                <polygon points="200,260 330,315 200,370 70,315" fill="#B5A482" stroke="#151515" stroke-width="1.6"/>
                <polygon points="70,315 200,370 200,396 70,341" fill="#8C7B5B" stroke="#151515" stroke-width="1.6"/>
                <polygon points="330,315 200,370 200,396 330,341" fill="#6E5F44" stroke="#151515" stroke-width="1.6"/>
                <path d="M150,346 L146,362 M175,356 L172,374 M200,366 L200,386 M228,354 L232,372" stroke="#151515" stroke-width="1" opacity="0.55"/>
            `,
            layer3: `
                <polygon points="200,218 322,270 200,322 78,270" fill="rgba(234,228,215,0.72)" stroke="#151515" stroke-width="1.3" stroke-dasharray="4 3"/>
                <ellipse cx="186" cy="276" rx="16" ry="6" fill="#9A824C" stroke="#151515" stroke-width="1.2"/>
                <path d="M186,274 L186,261 C186,258 191,258 191,261 L191,274" fill="#B3945B" stroke="#151515" stroke-width="1.3"/>
                <path d="M218,272 L224,256 L242,254 L248,262 L246,273 M224,265 L222,275 M238,265 L240,275" fill="none" stroke="#151515" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(154,130,76,0.08)" stroke="#151515" stroke-width="1.1"/>
                <path d="M152,222 L144,198 M152,222 L152,194 M152,222 L160,198" stroke="#786B3B" stroke-width="2" stroke-linecap="round"/>
                <path d="M198,232 L188,202 M198,232 L198,196 M198,232 L208,202" stroke="#8F7E44" stroke-width="2.2" stroke-linecap="round"/>
                <path d="M244,220 L236,196 M244,220 L244,192 M244,220 L252,196" stroke="#786B3B" stroke-width="2" stroke-linecap="round"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
                <path d="M174,134 Q188,122 200,134 Q212,122 226,134" fill="none" stroke="#151515" stroke-width="2.4" stroke-linecap="round"/>
            `
        }
    },
    {
        id: "manglar-arrecife",
        indexTag: "06",
        title: "Manglar y Arrecife.",
        subtitle: "Cuatro estratos. Frontera anfibia.",
        coverage: "~905,000 ha de manglar en Golfo, Caribe y Pacífico mexicano",
        edition: "Edición Costera · Sian Ka'an y Arrecife Mesoamericano",
        accentColor: "#3B666B",
        botanicalColor: "#3D614B",
        callouts: [
            {
                num: "01",
                side: "left",
                layer: 1,
                layerName: "ESTRATO 01 · DOSEL ESTUARINO Y AVES COSTERAS",
                title: "Flamenco, fragata y espátula",
                shortDesc: "Colonias de anidación en lagunas costeras.",
                scientific: "Phoenicopterus ruber · Fregata magnificens · Platalea ajaja",
                detail: "Las copas del manglar protegen colonias reproductivas de flamencos rosados, garzas, pelícanos y fragatas frente a depredadores terrestres."
            },
            {
                num: "02",
                side: "left",
                layer: 2,
                layerName: "ESTRATO 02 · ZONACIÓN DE BOSQUE HALÓFITO",
                title: "Mangle rojo, negro y blanco",
                shortDesc: "Raíces zancudas, neumatóforos y glándulas de sal.",
                scientific: "Rhizophora mangle · Avicennia germinans · Laguncularia racemosa",
                detail: "El mangle rojo ancla el borde marino con raíces zancudas; tierra adentro, el mangle negro respira mediante neumatóforos verticales y excreta sal por sus hojas."
            },
            {
                num: "03",
                side: "left",
                layer: 3,
                layerName: "ESTRATO 03 · CONECTIVIDAD MANGROVE-CORAL",
                title: "Cocodrilo, manatí y arrecife",
                shortDesc: "Guardería de peces, camarón y tortugas.",
                scientific: "Crocodylus moreletii · Trichechus manatus · Acropora palmata",
                detail: "Las raíces sumergidas funcionan como guardería para juveniles de pargos, langostas y camarones que al madurar migran hacia los arrecifes coralinos."
            },
            {
                num: "04",
                side: "left",
                layer: 4,
                layerName: "ESTRATO 04 · CARBONO AZUL Y SUSTRATO CÁRSTICO",
                title: "Turba anaeróbica profunda",
                shortDesc: "Secuestro 4 veces mayor que selvas terrestres.",
                scientific: "Sedimento anóxico · Plataforma calcárea · Carbono azul",
                detail: "La ausencia de oxígeno en los sedimentos inundados frena la descomposición, atrapando carbono orgánico en la turba durante miles de años."
            },
            {
                num: "05",
                side: "right",
                layer: 1,
                layerName: "PARÁMETRO 05 · INTERFAZ HIDROLÓGICA",
                title: "Filtro entre ríos, cenotes y mar",
                shortDesc: "Salinidad fluctuante de 0 a 40 ups.",
                scientific: "Agua cálida 26–29 °C · Mareas y descargas dulces",
                detail: "Retiene sedimentos y nutrientes procedentes de ríos y cenotes, garantizando que al arrecife coralino llegue agua cristalina y oligotrófica."
            },
            {
                num: "06",
                side: "right",
                layer: 2,
                layerName: "PARÁMETRO 06 · INGENIERÍA DE DEFENSA COSTERA",
                title: "Escudo vivo antihuracanes",
                shortDesc: "Disipa entre 70% y 90% de la energía del oleaje.",
                scientific: "Atenuación hidráulica · Estabilización de línea de costa",
                detail: "La barrera arrecifal rompe el oleaje oceánico y las raíces del manglar amortiguan marejadas ciclónicas, protegiendo comunidades costeras de la erosión."
            },
            {
                num: "07",
                side: "right",
                layer: 4,
                layerName: "PARÁMETRO 07 · PATRIMONIO MUNDIAL",
                title: "Sian Ka'an, Celestún y Marismas",
                shortDesc: "4.º lugar mundial en extensión de manglares.",
                scientific: "Sistema Arrecifal Mesoamericano · Nayarit a Quintana Roo",
                detail: "México ocupa el cuarto sitio global en superficie de manglar (Marismas Nacionales, Celestún, Sian Ka'an) y comparte el segundo arrecife más extenso del planeta."
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
                <path d="M156,274 L156,262 M156,268 L149,263 M156,266 L163,261" stroke="#C46B54" stroke-width="2.2" stroke-linecap="round"/>
                <path d="M224,268 Q232,262 240,268 Q232,274 224,268 M240,268 L245,264 L245,272 Z" fill="#3B666B" stroke="#151515" stroke-width="1.1"/>
            `,
            layer2: `
                <polygon points="200,168 318,218 200,268 82,218" fill="rgba(61,97,75,0.08)" stroke="#151515" stroke-width="1.1"/>
                <path d="M200,192 Q182,206 176,226 M200,192 Q192,208 190,228 M200,192 Q208,208 210,228 M200,192 Q218,206 224,226" fill="none" stroke="#5A4634" stroke-width="2" stroke-linecap="round"/>
                <line x1="200" y1="194" x2="200" y2="168" stroke="#5A4634" stroke-width="3"/>
                <ellipse cx="200" cy="160" rx="36" ry="16" fill="#3D614B" stroke="#151515" stroke-width="1.5"/>
            `,
            layer1: `
                <polygon points="200,98 296,138 200,178 104,138" fill="rgba(234,228,215,0.45)" stroke="#151515" stroke-width="1" stroke-dasharray="2 3"/>
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
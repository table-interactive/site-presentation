<template>
  <main class="min-h-screen bg-gray-200 py-10 px-6 sm:px-10 lg:px-20">
    <section
      class="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-12"
    >
      <h1 class="text-3xl font-bold text-gray-900 mb-10">
        Architecture Logicielle
      </h1>

      <article class="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
        >
          Stack Technologique
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6 border-2 border-blue-200">
            <h3 class="font-semibold text-xl text-blue-700 mb-4">Frontend</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-blue-600 font-bold">•</span>
                <div>
                  <strong>React 19.2.0</strong> - Framework JavaScript pour
                  l'interface utilisateur
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 font-bold">•</span>
                <div><strong>PixiJS 7.4.3</strong> - Moteur de rendu 2D</div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 font-bold">•</span>
                <div><strong>TypeScript</strong> - Langage typé</div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 font-bold">•</span>
                <div><strong>Vite 7.2.4</strong> - Outil de build</div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 font-bold">•</span>
                <div>
                  <strong>Axios</strong> - Client HTTP pour les requêtes API
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-6 border-2 border-green-200">
            <h3 class="font-semibold text-xl text-green-700 mb-4">Backend</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">•</span>
                <div>
                  <strong>FastAPI</strong> - Framework Python pour les API web
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">•</span>
                <div><strong>Render</strong> - Plateforme de déploiement</div>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-6 border-2 border-purple-200">
            <h3 class="font-semibold text-xl text-purple-700 mb-4">
              Pont Matériel
            </h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-purple-600 font-bold">•</span>
                <div>
                  <strong>Node.js</strong> - Runtime JavaScript pour le
                  Raspberry Pi
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-600 font-bold">•</span>
                <div>
                  <strong>SerialPort</strong> - Communication série avec
                  l'Arduino
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-600 font-bold">•</span>
                <div>
                  <strong>Axios</strong> - Envoi des événements vers l'API
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-6 border-2 border-orange-200">
            <h3 class="font-semibold text-xl text-orange-700 mb-4">Embarqué</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-orange-600 font-bold">•</span>
                <div>
                  <strong>Arduino C++</strong> - Code pour les microcontrôleurs
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600 font-bold">•</span>
                <div>
                  <strong>MFRC522</strong> - Bibliothèque pour les capteurs RFID
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article class="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
        >
          Justification des choix technologiques
        </h2>

        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg">
            <h3 class="font-semibold text-lg text-blue-700 mb-3">
              React + PixiJS pour le frontend
            </h3>
            <p class="text-gray-700 mb-3">
              React offre une gestion d'état simple et efficace pour l'interface
              utilisateur (HUD, scores, vies). PixiJS est un moteur de rendu 2D
              très performant utilisant WebGL, idéal pour créer un jeu fluide
              avec de nombreux sprites animés simultanément.
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-1">
              <li>Performance optimale avec WebGL</li>
              <li>Écosystème riche et documentation complète</li>
              <li>
                Facilite la séparation entre logique de jeu et interface
                utilisateur
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="font-semibold text-lg text-green-700 mb-3">
              FastAPI pour le backend
            </h3>
            <p class="text-gray-700 mb-3">
              FastAPI gère les requêtes HTTP des capteurs matériels et
              synchronise l'état du jeu entre plusieurs clients potentiels.
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-1">
              <li>Validation automatique des données</li>
              <li>Documentation API auto-générée</li>
              <li>Support natif des requêtes asynchrones</li>
              <li>Déploiement simple sur Render</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="font-semibold text-lg text-purple-700 mb-3">
              Node.js comme pont matériel
            </h3>
            <p class="text-gray-700 mb-3">
              Le Raspberry Pi exécute un script Node.js qui lit les données
              série de l'Arduino et les transmet à l'API.
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                Excellente bibliothèque SerialPort pour la communication USB
              </li>
              <li>Gestion asynchrone native des événements</li>
              <li>Consommation mémoire faible sur Raspberry Pi</li>
              <li>Facilité de maintenance</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="font-semibold text-lg text-orange-700 mb-3">
              Arduino C++ pour l'embarqué
            </h3>
            <p class="text-gray-700 mb-3">
              L'Arduino Uno gère directement les capteurs RFID et ultrasoniques.
              Le langage C++ offre un contrôle précis du matériel.
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-1">
              <li>Accès direct aux pins GPIO et protocoles (SPI, I2C)</li>
              <li>Bibliothèques pour tous les capteurs utilisés</li>
            </ul>
          </div>
        </div>
      </article>

      <article class="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
        >
          Flux de données et architecture
        </h2>

        <div class="bg-white p-6 rounded-lg mb-6">
          <h3 class="font-semibold text-lg text-gray-900 mb-4">
            Chaîne de communication
          </h3>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div
                class="bg-orange-100 px-4 py-2 rounded-lg font-semibold text-orange-700 min-w-fit"
              >
                Arduino
              </div>
              <span class="text-2xl text-gray-400">→</span>
              <div class="text-gray-600 text-sm">
                Détection RFID/Ultrasonique via ports série (115200 baud)
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="bg-purple-100 px-4 py-2 rounded-lg font-semibold text-purple-700 min-w-fit"
              >
                Raspberry Pi
              </div>
              <span class="text-2xl text-gray-400">→</span>
              <div class="text-gray-600 text-sm">
                Script Node.js lit USB (/dev/ttyUSB1) et envoie HTTP POST
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="bg-green-100 px-4 py-2 rounded-lg font-semibold text-green-700 min-w-fit"
              >
                API FastAPI
              </div>
              <span class="text-2xl text-gray-400">→</span>
              <div class="text-gray-600 text-sm">
                Reçoit événements, met à jour game_state en mémoire
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="bg-blue-100 px-4 py-2 rounded-lg font-semibold text-blue-700 min-w-fit"
              >
                Frontend React
              </div>
              <span class="text-2xl text-gray-400">→</span>
              <div class="text-gray-600 text-sm">
                Polling GET /state toutes les 900ms, affiche le jeu avec PixiJS
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p class="text-sm text-gray-700">
            <strong>Note :</strong> L'architecture est volontairement simple et
            sans base de données. Tout l'état du jeu est conservé en mémoire
            côté serveur (FastAPI), ce qui assure une latence minimale et
            facilite le débogage pendant le développement du prototype.
          </p>
        </div>
      </article>

      <article class="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
        >
          Captures d'écran de l'application
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-4">
            <img
              src="../../public/attente.png"
              alt="Écran d'attente"
              class="rounded-lg mb-3"
            />
            <p class="text-sm text-gray-600">
              Écran d'attente affiché avant la détection d'un joueur par les
              capteurs
            </p>
          </div>

          <div class="bg-white rounded-lg p-4">
            <img
              src="../../public/jeu.png"
              alt="Partie en cours avec HUD"
              class="rounded-lg mb-3"
            />
            <p class="text-sm text-gray-600">
              Partie en cours avec HUD affichant les statistiques et le terrain
              de jeu
            </p>
          </div>

          <div class="bg-white rounded-lg p-4">
            <img
              src="../../public/fini.png"
              alt="Écran de game over"
              class="rounded-lg mb-3"
            />
            <p class="text-sm text-gray-600">
              Écran de game over affiché quand les vies atteignent zéro
            </p>
          </div>
        </div>
      </article>

      <article class="bg-gray-50 border border-gray-200 rounded-xl p-8">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
        >
          Extraits de code
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="font-semibold text-lg text-gray-900 mb-3">
              API Backend (FastAPI)
            </h3>
            <details class="bg-white rounded-lg overflow-hidden">
              <summary
                class="cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700"
              >
                Voir le code main.py
              </summary>
              <pre
                class="bg-gray-900 text-gray-100 text-xs p-4 overflow-x-auto"
              ><code>@app.post("/tower/place")
def handle_game_event(request: GameEventRequest):
    device_id = request.towerId.strip()

    # Gestion du mouvement (déclenchement de vague)
    if "MOUVEMENT" in device_id.upper():
        event = {"type": "START_WAVE", "source": device_id}
        game_state["events"].append(event)
        return {"status": "wave_started"}

    # Placement de tour selon le tag RFID
    if device_id in BORNE_CONFIG:
        config = BORNE_CONFIG[device_id]
        tower_type = TAG_MAPPING.get(rfid, "Healer")
        
        new_tower = {
            "towerId": device_id,
            "towerType": tower_type,
            "x": config["x"],
            "y": config["y"],
        }
        game_state["towers"].append(new_tower)
        return {"status": "tower_placed"}</code></pre>
            </details>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-gray-900 mb-3">
              Frontend React + PixiJS
            </h3>
            <details class="bg-white rounded-lg overflow-hidden">
              <summary
                class="cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700"
              >
                Voir le code App.tsx (extrait)
              </summary>
              <pre
                class="bg-gray-900 text-gray-100 text-xs p-4 overflow-x-auto"
              ><code>// Initialisation PixiJS
const app = new PIXI.Application({
    width: 1200,
    height: 700,
    backgroundColor: 0x0a0e27,
    antialias: true,
});

// Polling de l'état du jeu
async function fetchStateOnce() {
    const res = await fetch(`${API_URL}/state`);
    const json = await res.json();
    
    const towers = json?.towers ?? [];
    reconcileTowers(towers);
    
    const events = json?.events ?? [];
    const waveEvt = events.some(e => 
        e.type.includes("WAVE")
    );
    
    if (waveEvt && !gameStarted) {
        gameStarted = true;
        waitOverlay.visible = false;
    }
}</code></pre>
            </details>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-gray-900 mb-3">
              Arduino (Détection RFID et Ultrasonique)
            </h3>
            <details class="bg-white rounded-lg overflow-hidden">
              <summary
                class="cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700"
              >
                Voir le code detection_rfid.cpp (extrait)
              </summary>
              <pre
                class="bg-gray-900 text-gray-100 text-xs p-4 overflow-x-auto"
              ><code>void loop() {
    // Lecture RFID
    if (rfid.PICC_IsNewCardPresent() && 
        rfid.PICC_ReadCardSerial()) {
        String content = "";
        for (byte i = 0; i < rfid.uid.size; i++) {
            content.concat(String(rfid.uid.uidByte[i], HEX));
        }
        Serial.print("RFID:");
        Serial.println(content);
        rfid.PICC_HaltA();
    }

    // Mesure distance ultrasonique
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIG_PIN, LOW);
    
    long duration = pulseIn(ECHO_PIN, HIGH);
    int distance = duration * 0.034 / 2;
    
    if (distance > 0 && distance < 50) {
        Serial.println("MOVE:DETECTED");
    }
}</code></pre>
            </details>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-gray-900 mb-3">
              Pont Node.js (Raspberry Pi)
            </h3>
            <details class="bg-white rounded-lg overflow-hidden">
              <summary
                class="cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700"
              >
                Voir le code pont_pi.js
              </summary>
              <pre
                class="bg-gray-900 text-gray-100 text-xs p-4 overflow-x-auto"
              ><code>const port = new SerialPort({ 
    path: '/dev/ttyUSB1', 
    baudRate: 115200 
});

const parser = port.pipe(
    new ReadlineParser({ delimiter: '\r\n' })
);

parser.on('data', (line) => {
    let payload = null;

    if (line.startsWith("RFID:")) {
        payload = { towerId: "LECTEUR_PORTE_1" };
    } else if (line.startsWith("MOVE:")) {
        payload = { towerId: "LECTEUR_PORTE_2" };
    }

    if (payload) {
        axios.post(`${API_URL}/tower/place`, payload)
            .catch(err => console.error(err.message));
    }
});</code></pre>
            </details>
          </div>
        </div>

        <div class="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4">
          <p class="text-sm text-gray-700">
            <strong>Dépôt GitHub :</strong> Le code complet du projet est
            disponible sur
            <a
              href="hhttps://github.com/table-interactive"
              target="_blank"
              class="text-blue-600 underline hover:text-blue-800"
            >
              github.com/table-interactive/tower-defense-app
            </a>
          </p>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup></script>

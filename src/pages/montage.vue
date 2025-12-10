<template>
  <main class="min-h-screen bg-gray-200 py-10 px-6 sm:px-10 lg:px-20">
    <section
      class="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-12"
    >
      <header class="mb-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-3">
          Guide de montage du prototype
        </h1>
        <p class="text-base text-gray-600">
          Instructions complètes pour assembler la table de jeu interactive.
        </p>
      </header>

      <!-- Section Ingrédients/Matériel -->
      <article class="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-10">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
        >
          Matériel requis (Ingrédients)
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-5">
            <h3 class="font-semibold text-lg text-gray-900 mb-4">
              Composants électroniques
            </h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• 1x Raspberry Pi 4 ou 5</li>
              <li>• 1x Arduino Uno</li>
              <li>• 1x Capteurs ultrasoniques</li>
              <li>• 1x Capteurs RFID cartes</li>
              <li>• 1x Projecteur</li>
              <li>• Câbles USB</li>
              <li>• Fils de connexion</li>
              <li>• Breadboard</li>
              <li>• Carte microSD pour Raspberry Pi</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-5">
            <h3 class="font-semibold text-lg text-gray-900 mb-4">
              Matériel de construction
            </h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• Table de jeu (surface plane)</li>
              <li>
                • Support pour projecteur (trépied ou fixation au plafond)
              </li>
              <li>• Rallonges électriques</li>
              <li>• Câble HDMI</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-5">
            <h3 class="font-semibold text-lg text-gray-900 mb-4">Logiciels</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• Raspberry Pi OS</li>
              <li>• Arduino IDE</li>
              <li>• Python 3</li>
              <li>
                • Logiciel du jeu Tower Defense (le site développé pour le
                projet)
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article class="space-y-8 mb-10">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
        >
          Instructions de montage (Recette)
        </h2>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl font-bold text-blue-600">01</span>
            <h3 class="text-2xl font-bold text-gray-900">
              Préparation du Raspberry Pi
            </h3>
          </div>
          <div class="bg-white p-6 rounded-lg mb-4">
            <p class="text-base text-gray-700 mb-4">
              Installez Raspberry Pi OS sur la carte microSD en utilisant
              Raspberry Pi Imager. Insérez la carte dans le Raspberry Pi et
              effectuez la configuration initiale.
            </p>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl font-bold text-blue-600">02</span>
            <h3 class="text-2xl font-bold text-gray-900">
              Câblage des capteurs ultrasoniques sur Arduino
            </h3>
          </div>
          <div class="bg-white p-6 rounded-lg mb-4">
            <p class="text-base text-gray-700 mb-4">
              Connectez le capteur HC-SR04 à l'Arduino Uno.
            </p>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl font-bold text-blue-600">03</span>
            <h3 class="text-2xl font-bold text-gray-900">
              Câblage des capteurs RFID sur Arduino
            </h3>
          </div>
          <div class="bg-white p-6 rounded-lg mb-4">
            <p class="text-base text-gray-700 mb-4">
              Connectez le capteur RC522 à l'Arduino. Utilisez les pins suivants
              :
            </p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p class="text-sm text-gray-700">
                Les capteurs RFID fonctionnent en 3.3V. Ne jamais connecter à 5V
                sous peine de les endommager.
              </p>
            </div>
            <br />
            <p class="text-base text-gray-700 mb-4">
              Le capteur RFID RC522 doit être connecté à l’Arduino Uno en
              utilisant l’interface SPI. Le tableau ci-dessous indique
              précisément le branchement des broches du module RFID vers les
              broches correspondantes de l’Arduino.
            </p>
            <table
              class="w-full border border-black mt-4 text-sm text-gray-800"
            >
              <thead>
                <tr>
                  <th
                    class="border border-black px-4 py-2 text-left font-semibold"
                  >
                    Signal
                  </th>
                  <th
                    class="border border-black px-4 py-2 text-left font-semibold"
                  >
                    Arduino / Valeur
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-black px-4 py-2">VCC</td>
                  <td class="border border-black px-4 py-2">3.3V</td>
                </tr>
                <tr>
                  <td class="border border-black px-4 py-2">GND</td>
                  <td class="border border-black px-4 py-2">GND</td>
                </tr>
                <tr>
                  <td class="border border-black px-4 py-2">RST</td>
                  <td class="border border-black px-4 py-2">D9</td>
                </tr>
                <tr>
                  <td class="border border-black px-4 py-2">MOSI</td>
                  <td class="border border-black px-4 py-2">D11</td>
                </tr>
                <tr>
                  <td class="border border-black px-4 py-2">MISO</td>
                  <td class="border border-black px-4 py-2">D12</td>
                </tr>
                <tr>
                  <td class="border border-black px-4 py-2">SCK</td>
                  <td class="border border-black px-4 py-2">D13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl font-bold text-blue-600">04</span>
            <h3 class="text-2xl font-bold text-gray-900">
              Programmation de l'Arduino
            </h3>
          </div>
          <div class="bg-white p-6 rounded-lg mb-4">
            <p class="text-base text-gray-700 mb-4">
              Téléversez le code Arduino qui lit les capteurs et envoie les
              données via port série au Raspberry Pi. Le code doit intégrer la
              lecture du capteur ultrasonique et du capteur RFID.
            </p>
            <ol class="list-decimal pl-6 text-base text-gray-700 space-y-2">
              <li>Ouvrez Arduino IDE sur votre ordinateur</li>
              <li>
                Installez la bibliothèque MFRC522 via le gestionnaire de
                bibliothèques
              </li>
              <li>Copiez le code du prototype dans l'IDE</li>
              <li>Sélectionnez le port série correct et téléversez le code</li>
              <li>
                Vérifiez dans le moniteur série que les données s'affichent
                correctement
              </li>
              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p class="text-sm text-gray-700">
                  Attention : Assurez-vous que le code fonctionne correctement
                  avec le câblage. Les broches du modules RFID doivent
                  correspondre à celles définies dans le code. (Exemple :
                  #define RST_PIN 9)
                </p>
              </div>
            </ol>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl font-bold text-blue-600">05</span>
            <h3 class="text-2xl font-bold text-gray-900">
              Connexion Arduino → Raspberry Pi
            </h3>
          </div>
          <div class="bg-white p-6 rounded-lg mb-4">
            <p class="text-base text-gray-700 mb-4">
              Connectez l'Arduino au Raspberry Pi via câble USB. Le Raspberry Pi
              recevra les données des capteurs par USB Serial.
            </p>
            <ul class="list-disc pl-6 text-base text-gray-700 space-y-2">
              <li>
                Branchez le câble USB de l'Arduino dans un port USB du Raspberry
                Pi
              </li>
              <li>Sur le Raspberry Pi, identifiez le port série</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl font-bold text-blue-600">06</span>
            <h3 class="text-2xl font-bold text-gray-900">
              Installation du projecteur
            </h3>
          </div>
          <div class="bg-white p-6 rounded-lg mb-4">
            <p class="text-base text-gray-700 mb-4">
              Positionnez le projecteur au-dessus de la table de jeu pour
              projeter l'interface du jeu directement sur la surface.
            </p>
            <ol
              class="list-decimal pl-6 text-base text-gray-700 space-y-2 mb-4"
            >
              <li>Installez le projecteur sur un support stable</li>
              <li>Ajustez la hauteur pour couvrir toute la surface de jeu</li>
              <li>Connectez le projecteur au Raspberry Pi via câble HDMI</li>
              <li>Réglez la mise au point pour une image nette</li>
              <li>
                Au besoin, inverser l'écran du Pi
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Cliquer sur Menu Raspberry (en haut à gauche)</li>
                  <li>Aller dans Preferences / Préférences</li>
                  <li>Ouvrir Screen Configuration</li>
                  <li>Faire un clic droit sur ton écran (HDMI-1)</li>
                  <li>Orientation → Inverted / 180°</li>
                  <li>Appliquer</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl font-bold text-blue-600">07</span>
            <h3 class="text-2xl font-bold text-gray-900">
              Positionnement du capteur sur la table
            </h3>
          </div>
          <div class="bg-white p-6 rounded-lg mb-4">
            <p class="text-base text-gray-700 mb-4">
              Fixez le capteur autour de la table selon sa fonction :
            </p>
            <ul class="list-disc pl-6 text-base text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Capteur ultrasonique :</strong> Placez-le sur le coté de
                la table, dirigés vers le devant pour détecter la présence du
                joueur assis. Une fois bien positionné, assurez vous qu'il ne
                bouge pas et qu'il capte si un joueur est présent ou non devant
                la table.
              </li>
              <li>
                <strong>Capteur RFID :</strong> Fixez-le sur la surface de jeu
                en dessous du tapis de jeu a l'emplacement stratégique où les
                joueurs placeront leurs cartes rfid. Si nécessaire, allongez les
                Fils reliant le capteur au Arduino pour atteindre la position
                désirée.
              </li>
            </ul>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
              <p class="text-sm text-gray-700">
                <strong>Important :</strong> Les capteurs RFID doivent être
                alignés parfaitement avec les zones de placement des cartes pour
                une détection optimale. Si le capteur se trouve trop loin, il
                est possible que les cartes ne soient pas détectées correctement
                ou même pas du tout.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl font-bold text-blue-600">08</span>
            <h3 class="text-2xl font-bold text-gray-900">
              Ouverture de l'application de jeu
            </h3>
          </div>
          <div class="bg-white p-6 rounded-lg mb-4">
            <p class="text-base text-gray-700 mb-4">
              Préparation du site et des scripts pour jouer.
            </p>
            <ol class="list-decimal pl-6 text-base text-gray-700 space-y-2">
              <li>
                Rendez-vous sur
                <a
                  href="https://table-interactive.github.io/tower-defense-app/"
                  target="_blank"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  table-interactive.github.io/tower-defense-app/
                </a>
              </li>
              <li>
                Projetez le site web via le projecteur connecté au Raspberry Pi
              </li>
              <li>
                Lancez les scripts sur le Raspberry Pi pour démarrer la
                communication avec l'Arduino et le serveur FastAPI
              </li>
            </ol>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
              <p class="text-sm text-gray-700">
                <strong>Astuce :</strong> Assurez-vous que la surface où le jeu
                sera projetée est propre et exempte de reflets pour une
                meilleure visibilité.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article class="bg-gray-50 border border-gray-200 rounded-xl p-8">
        <h2
          class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
        >
          Photos du montage
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-4">
            <div
              class="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center"
            >
              <img
                src="../../public/IMG_0458.JPG"
                alt="Photo 1: Vue d'ensemble de la table montée"
                class="rounded-lg"
              />
            </div>
            <p class="text-sm text-gray-600">
              Vue complète de la table avec tous les composants installés et le
              projecteur en position
            </p>
          </div>

          <div class="bg-white rounded-lg p-4">
            <div
              class="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center"
            >
              <img
                src="../../public/IMG_0455.JPG"
                alt="Photo 2: Connexions Arduino et capteurs"
                class="rounded-lg"
              />
            </div>
            <p class="text-sm text-gray-600">
              Détail des connexions entre l'Arduino, le capteur ultrasonique et
              RFID
            </p>
          </div>

          <div class="bg-white rounded-lg p-4">
            <div
              class="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center"
            >
              <img
                src="../../public/IMG_0452.JPG"
                alt="Photo 3: Positionnement du projecteur"
                class="rounded-lg"
              />
            </div>
            <p class="text-sm text-gray-600">
              Positionnement du projecteur Epson au-dessus de la table de jeu
            </p>
          </div>

          <div class="bg-white rounded-lg p-4">
            <div
              class="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center"
            >
              <img
                src="../../public/IMG_0453.JPG"
                alt="Photo 4: Capteur RFID sur la surface de jeu"
                class="rounded-lg"
              />
            </div>
            <p class="text-sm text-gray-600">
              Vue du capteur RFID fixés sur la surface de jeu
            </p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup></script>

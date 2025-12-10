<template>
    <div class="flex flex-col text-white bg-gray-800">
        <header class="shadow-sm">
            <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 class="text-xl font-semibold">
                    <RouterLink to="/" class="hover:text-gray-300 transition">
                        Projet Veille
                    </RouterLink>
                </h1>
                <ul class="flex space-x-6 text-sm font-medium items-center">
                    <li>
                        <RouterLink to="/" class="hover:text-gray-300 transition">
                            Accueil
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/tp4/montage" class="hover:text-gray-300 transition">
                            Montage
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/tp4/logiciel" class="hover:text-gray-300 transition">
                            Logiciel
                        </RouterLink>
                    </li>
                    <!-- Menu déroulant Archives -->
                    <li class="relative group">
                        <button class="hover:text-gray-300 transition flex items-center gap-1">
                            Archives
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <ul
                            class="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-gray-700 text-white rounded-md mt-2 w-36 shadow-lg z-50">
                            <li>
                                <RouterLink to="/tp2" class="block px-4 py-2 hover:bg-gray-600 transition rounded-t-md">
                                    TP2
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/materiel"
                                    class="block px-4 py-2 hover:bg-gray-600 transition rounded-b-md">
                                    Matériel
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/experimentation"
                                    class="block px-4 py-2 hover:bg-gray-600 transition rounded-b-md">
                                    Expérimentations
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="flex-1">
            <RouterView />
        </main>
        <footer class="text-center py-4 text-xs text-gray-500 border-t border-gray-700">
            Projet réalisé dans le cadre du cours de Veille Technologique —
            Antoine Boudreau, Samuel Dussault-Gagnon, Gabriel Gingras, Fabio
            Mora Gonzalez
        </footer>
    </div>
</template>

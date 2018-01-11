# assistant-launch

Ce plugin de [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/) permet de lancer un programme sur la machine hôte.

## Installation

Si vous n'avez pas installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), alors il faut le faire, et sélectionner **launch** comme plugin.

Si vous avez déjà installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), et que vous souhaitez ajouter ce plugin, alors :
  - Pour Windows, télécharger [`install_launch.bat`](https://github-proxy.kodono.info/?q=https://raw.githubusercontent.com/Aymkdn/assistant-launch/master/install_launch.bat&download=install_launch.bat) dans le répertoire `assistant-plugins`, puis l'exécuter en double-cliquant dessus.  
  - Pour Linux/MacOS, ouvrir une console dans le répertoire `assistant-plugins` et taper :  
  `npm install assistant-launch@latest --save --loglevel error && npm run-script postinstall`

## Configuration

Aucune configuration requise.

## Utilisation

Exemple avec le lancement du programme [Kodi](https://kodi.tv) sur une machine-hôte Windows.

  1) Créer une nouvelle *applet* dans IFTTT : [https://ifttt.com/create](https://ifttt.com/create)  
  2) Cliquer sur **this** puis choisir **Google Assistant**  
  3) Choisir la carte **Say a simple phrase** (ou autre, selon votre cas)  
  4) Dans *« What do you want to say? »* mettre la phrase qui va déclencher l'action (par exemple : *lance Kodi*)  
  5) Remplir les autres champs de la carte  
  6) Maintenant, cliquer sur **that** puis choisir **Pushbullet**  
  7) Choisir la carte **Push a Note**  
  8) Dans le champs *« Title »*, mettre `Assistant`  
  9) Dans le champs *« Message »*, mettre `launch_` suivi par le chemin d'accès au programme (par exemple : *launch_"C:/Program Files (x86)/Kodi/Kodi.exe"* ou *launch_"C:\\Program Files (x86)\\Kodi\\Kodi.exe"*, et ne pas oublier les guillemets)  
  10) Enregistrer puis cliquer sur **Finish**  
  11) Dites : « OK Google » suivi de votre phrase spéciale du point 4)  
  12) Et le programme se lance sur la machine hôte
  
Pour en savoir sur comment lancer un programme, vous pouvez consulter [la documentation de NodeJS](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback).


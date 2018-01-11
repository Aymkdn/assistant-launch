var AssistantLaunch = function(configuration) {}

/**
 *
 * @param  {Object} plugins Un objet représentant les autres plugins chargés
 * @return {Promise}
 */
AssistantLaunch.prototype.init = function(plugins) {
  this.plugins = plugins;
  return Promise.resolve(this);
};

/**
 * Fonction appelée par le système central
 *
 * @param {String} commande La commande envoyée depuis IFTTT par Pushbullet
 * @return {Promise}
 */
AssistantLaunch.prototype.action = function(commande) {
  var exec = require('child_process').exec;
  return new Promise(function(prom_res) {
    exec(commande, function(error, stdout, stderr) {
      console.log("[assistant-launch] Lancement du programme : "+commande);
      prom_res();
    })
  })
};

/**
 * Initialisation du plugin
 *
 * @param  {Object} configuration La configuration
 * @param  {Object} plugins Un objet qui contient tous les plugins chargés
 * @return {Promise} resolve(this)
 */
exports.init=function(configuration, plugins) {
  return new AssistantLaunch(configuration).init(plugins)
  .then(function(resource) {
    console.log("[assistant-launch] Plugin chargé et prêt.");
    return resource;
  })
}

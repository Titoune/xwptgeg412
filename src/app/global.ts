export const GLOBAL = {
  defaultFlashErrors : {
    "0": "Erreur de réseau Internet",
    "400": "Erreur de requete",
    "401": "Erreurs d'autorisation",
    "402": "Erreur de données",
    "500": "Erreur interne",
    "999": "Erreur du Serveur"
  },
  nowDatetime: new Date().toISOString().slice(0, 19).replace('T', ' '),
  cloudSettings: {
    'core': {
      'app_id': 'xxxxxxxxxxxxxxx'
    },
    'push': {
      'sender_id': 'xxxxxxxxxxx',
      'pluginConfig': {
        'ios': {
          'badge': true,
          'sound': true
        },
        'android': {
          'iconColor': '#343434'
        }
      }
    }
  },
  socketIoConfig: {
    url: 'http://socket.deliryades.fr:3101'
  },
  cacheDuration: 500000, //seconds
  apiBase: 'http://localhost/deliryades_api/',
  apiUrl: 'http://localhost/deliryades_api/api/',
  websiteUrl: 'http://deliryades.com'
}

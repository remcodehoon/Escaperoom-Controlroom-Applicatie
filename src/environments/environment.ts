// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  WS_ENDPOINT_URL: 'ws://localhost:8081/escaperoom',
  SERVER_ENDPOINT_URL: 'http://localhost:8081',
  WS_MESSAGE_TOPIC: '/topic/berichten',
  WS_SESSION_TOPIC: '/topic/sessie',
  WS_TIME_TOPIC: '/topic/tijd',
  WS_BUIT_TOPIC: '/topic/buit',
  WS_LOG_TOPIC: '/topic/logs',
  WS_PINSLOT_TOPIC: '/topic/pinslot',
  WS_LASER_TOPIC: '/topic/laser',
  WS_IOSTATS_TOPIC: '/topic/iostats',
  API_PINSLOT_GET: 'http://localhost:8081/pinslot',
  API_SESSION_GET: 'http://localhost:8081/session',
  API_SESSION_NEW: 'http://localhost:8081/session/new/',
  API_SESSION_START: 'http://localhost:8081/session/start',
  API_SESSION_RESUME: 'http://localhost:8081/tijdscherm/tijd/hervatten',
  API_SESSION_PAUSE: 'http://localhost:8081/tijdscherm/tijd/pauzeren',
  API_SESSION_STOP: 'http://localhost:8081/session/stop',
  API_IOSTATS_GET: 'http://localhost:8081/iostats',
  API_TIME_SET: 'http://localhost:8081/tijdscherm/tijd/set/',
  API_TIME_PLUS: 'http://localhost:8081/tijdscherm/tijd/plus/',
  API_TIME_MINUS: 'http://localhost:8081/tijdscherm/tijd/minus/',
  API_SHOW_MESSAGE: 'http://localhost:8081/message/show/',
  API_HIDE_MESSAGE: 'http://localhost:8081/message/hide',
  API_OPEN_LOCK: 'http://localhost:8081/pinslot/open',
  API_CLOSE_LOCK: 'http://localhost:8081/pinslot/close',
  API_LASERS_ON: 'http://localhost:8081/lasers/aan',
  API_LASERS_OFF: 'http://localhost:8081/lasers/uit',
  API_LIGHTS_ON: 'http://localhost:8081/verlichting/hoofdverlichting/aan',
  API_LIGHTS_OFF: 'http://localhost:8081/verlichting/hoofdverlichting/uit',
  API_ROOK_ON: 'http://localhost:8081/rook/aan',
  API_ROOK_OFF: 'http://localhost:8081/rook/uit',
  API_ROOK_TOGGLE: 'http://localhost:8081/rook/toggle',
  API_DRUKKNOP_PRESS: 'http://localhost:8081/session/drukknop'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

import mapSenderFormats from '../common/map-sender-formats'
import mapInitialSenderState from './map-sender-initial-state'
import mapSenderRoutedState from '../common/map-sender-routed-state'
import addUnique from './add-unique'

export default (data, senders) => {
  addUnique(data, 'senders', senders)
  mapSenderFormats(data)
  mapInitialSenderState(data)
  mapSenderRoutedState(data)
  data.senders.sort(window.nmos.defaultSort)
}

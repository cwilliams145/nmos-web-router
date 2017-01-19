import mapState from './common/map-state'
import stateToString from './common/state-to-string'

export default (data) => {
  function expanded (senders) {
    let expanded = {}
    let expandedSender = senders.filter(sender => {
      return sender.state && sender.state.includes('expanded')
    })[0] || { state: ['contracted'] }

    let mapExpandedState = mapState(expanded).contract().unroute()
    if (expandedSender.state.includes('expanded')) mapExpandedState.expand()
    if (expandedSender.state.includes('routed')) mapExpandedState.route()
    expanded.state = mapExpandedState.state()
    expanded.stateString = stateToString(expanded.state)
    expanded.id = expandedSender.id
    expanded.label = expandedSender.label
    expanded.description = expandedSender.description
    expanded.format = expandedSender.format

    return expanded
  }

  return {
    view () {
      data.expanded = expanded(data.senders)
      return data
    }
  }
}

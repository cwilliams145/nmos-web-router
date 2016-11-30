import fuzzysearch from 'fuzzysearch'
import ChangeState from './change-state'

function updateSenderFormat (senders, flows) {
  senders.forEach(sender => {
    let flow = flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0] || {format: 'no'}
    sender.format = flow.format
  })
}

function updateWithChangeState (routables) {
  return routables.forEach(routable => {
    routable.changeState = ChangeState(routable)
    return routable
  })
}

function isSenderRouted (sender, receivers) {
  return receivers.some(receiver => {
    return receiver.subscription.sender_id === sender.id
  })
}

function updateSenderInitialState (senders) {
  senders.forEach(sender => {
    sender.changeState.check().contract().selectable()
  })
}

function updateSenderRoutedState (senders, receivers) {
  senders.forEach(sender => {
    if (isSenderRouted(sender, receivers)) sender.changeState.route()
    else sender.changeState.unroute()
  })
}

function updateReceiverInitialState (receivers) {
  receivers.forEach(receiver => {
    receiver.changeState.check().contract().notSelectable()
  })
}

function updateReceiverRoutedState (receivers) {
  receivers.forEach(receiver => {
    if (receiver.subscription.sender_id !== null) receiver.changeState.route()
    else receiver.changeState.unroute()
  })
}

function fuzzymatch (term, routables) {
  routables.forEach(routable => {
    let fuzzymatch = fuzzysearch(term.toLowerCase(), routable.label.toLowerCase()) || fuzzysearch(term.toLowerCase(), routable.id.toLowerCase())
    if (fuzzymatch) routable.changeState.fuzzymatch()
    else routable.changeState.fuzzymissmatch()
  })
}

function check (routables, id) {
  let routable = routables.filter(routable => {
    return routable.id === id
  })[0]
  if (routable.state.includes('checked')) routable.changeState.uncheck()
  else routable.changeState.check()
}

export default () => {
  let expanded = {}
  expanded.changeState = ChangeState(expanded)
  expanded.changeState.contract().unroute()
  let senders = []
  let receivers = []
  let flows = []
  let routes = []

  let routables = {
    insert: {
      senders (data) {
        senders = data
        updateSenderFormat(senders, flows)
        updateWithChangeState(senders)
        updateSenderInitialState(senders)
        updateSenderRoutedState(senders, receivers)
      },
      receivers (data) {
        receivers = data
        updateWithChangeState(receivers)
        updateReceiverInitialState(receivers)
        updateSenderRoutedState(senders, receivers)
        updateReceiverRoutedState(receivers)
      },
      flows (data) {
        flows = data
        updateSenderFormat(senders, flows)
      }
    },
    filter (term) {
      fuzzymatch(term, senders)
      fuzzymatch(term, receivers)
    },
    check: {
      receiver (id) {
        check(receivers, id)
      },
      sender (id) {
        check(senders, id)
      }
    },
    expand (id) {
      expanded.changeState.contract()
      delete expanded.id
      delete expanded.label
      delete expanded.description
      delete expanded.format

      senders.forEach(sender => {
        sender.changeState.contract()
        if (sender.id === id) {
          sender.changeState.expand()
          expanded.changeState.expand()

          expanded.id = sender.id
          expanded.label = sender.label
          expanded.description = sender.description
          expanded.format = sender.format
        }
      })
    },
    route (receiverId, sender) {},
    unroute () {},
    update: {
      senders (grains) {},
      receivers (grains) {},
      flows (grains) {},
      devices (grains) {},
      nodes (grains) {}
    },
    view () {
      return {
        senders,
        receivers,
        routes,
        expanded
      }
    }
  }

  return routables
}

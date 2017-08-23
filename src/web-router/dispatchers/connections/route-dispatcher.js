import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (receiver, senders) => {
    let sender = senders.filter(sender => {
      return sender.state.includes('expanded')
    })[0]

    sender = Object.assign({}, sender)
    delete sender.format
    delete sender.state
    delete sender.stateString
    window.nmos.route(receiver.id, sender)
      .then(() => {
        actions.route({ receiver, sender })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Unable to connect to server, cannot route ${sender.label} to ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}

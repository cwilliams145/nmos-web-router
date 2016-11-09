const MAX_RETRIES = 3
const RETRY_TIMEOUT = 1000

export default (actions) => {
  let retries = {
    receivers: 0,
    senders: 0,
    flows: 0
  }

  function dispatchError (error) {
    console.error(error)
    let timeout = setTimeout(function () {
      actions.allClear()
    }, 30 * 1000)
    actions.alert({
      message: error.message,
      timeout
    })
  }

  function initialise (name) {
    window.nmos[name]()
      .then(response => {
        let data = {}
        data[name] = response
        actions.initialise(data)
      })
      .catch(error => {
        dispatchError(error)
        retries[name] += 1
        if (retries[name] >= MAX_RETRIES) actions.initialiseError({ error, name })
        else setTimeout(function () {
          initialise(name)
        }, RETRY_TIMEOUT)
      })
  }

  function subscribe (name) {
    window.nmos.subscribe[name](data => {
      let update = {}
      update[name] = data
      actions.update({ update })
    })
  }

  return () => {
    initialise('receivers')
    initialise('senders')
    initialise('flows')
    subscribe('receivers')
    subscribe('senders')
  }
}

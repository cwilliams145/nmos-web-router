import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables.deployChange(action.receiver.id, action.sender.id, 'unroute').view()
  let view = Object.assign({}, state.view, updatedView)

  return merge({view})
}
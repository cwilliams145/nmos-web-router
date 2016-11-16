import React, {PropTypes} from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Route from './route-component'

class Routes extends React.Component {
  componentDidMount () {
    this.props.actions.routesRendered(document.querySelector('.routes'))
  }
  render () {
    return <LayoutItem
      className='routes'
      gels='2/10'>
      <div className='routes-container'>{
      this.props.receivers.filter(receiver => {
        let checked = false
        let removed = false
        let expanded = false
        let routed = receiver.subscription.sender_id !== null && receiver.subscription.sender
        if (routed) {
          let receiverChecked = receiver.state.includes('checked') && !receiver.state.includes('unchecked')
          let senderChecked = receiver.subscription.sender.state.includes('checked') && !receiver.subscription.sender.state.includes('unchecked')
          checked = receiverChecked && senderChecked

          let receiverRemoved = receiver.state.includes('removed')
          let senderRemoved = receiver.subscription.sender.state.includes('removed')
          removed = receiverRemoved || senderRemoved

          if (this.props.expandedSender.state.includes('expanded') && this.props.expandedSender.id === receiver.subscription.sender.id) expanded = true
        }
        return routed && checked && !removed && !expanded
      }).map((receiver, index) => {
        return <Route
          routesEl={this.props.routesEl}
          key={`route-${index}`}
          receiver={receiver}
          />
      })
    }</div>
    </LayoutItem>
  }
}

Routes.propTypes = {
  expandedSender: PropTypes.object.isRequired,
  routesEl: PropTypes.any,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Routes

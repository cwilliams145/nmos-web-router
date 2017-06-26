/*
"ClearConfirm" returns a pair of buttons for the bottom of the 'Confirm' view
These buttons either delete all staged changes (clear) or deploy all
  staged changes (confirm)
*/

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import ClearButton from './clear-button-component'
import ConfirmButton from './confirm-button-component'

let ClearConfirm = ({changes, actions, senders}) => {
  let confirmEnabled = 'disabled'
  let clearEnabled = 'disabled'
  if (changes.length !== 0) {
    clearEnabled = 'enabled'
    let availableCount = 0
    changes.forEach(change => {
      if (change.state === 'staged') availableCount++
    })
    if (availableCount > 0) confirmEnabled = 'enabled'
  }

  return <Layout gels='1/1' layouts='right' className='clear-confirm-container'>
    <ClearButton
      changes={changes}
      actions={actions}
      state={clearEnabled} />
    <ConfirmButton
      changes={changes}
      actions={actions}
      senders={senders}
      state={confirmEnabled} />
  </Layout>
}

ClearConfirm.propTypes = {
  changes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired
}

export default ClearConfirm
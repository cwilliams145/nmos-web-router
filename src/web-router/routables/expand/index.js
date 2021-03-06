/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
Expand functions deal with the expanding of a sender when it is clicked
  A copy of the sender is made and added to state.view.expanded
  expandReceivers uses functions in /filter-receivers to grey out receivers
    that can't be connected to the expanded sender. The filtering is based
    on format, transport and media_type (where available)
*/

import View from '../view'
import expandSenders from './expand-senders'
import expandReceivers from './expand-receivers'
import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import checkForUnicast from './check-for-unicast'

export default (data) => {
  function expanded (senders) {
    let expanded = {}
    let expandedSender = senders.filter(sender => {
      return sender.state && sender.state.includes('expanded')
    })[0] || { state: ['contracted'] }

    let mapExpandedState = mapState(expanded).contract().unroute()
    if (expandedSender.state.includes('expanded')) mapExpandedState.expand()
    if (expandedSender.state.includes('routed')) mapExpandedState.route()
    if (expandedSender.state.includes('stagedRoute')) mapExpandedState.stageRoute()
    if (expandedSender.state.includes('stagedUnroute')) mapExpandedState.stageUnroute()

    expanded.state = mapExpandedState.state()
    expanded.stateString = stateToString(expanded.state)
    expanded.id = expandedSender.id
    expanded.label = expandedSender.label
    expanded.description = expandedSender.description
    expanded.format = expandedSender.format
    expanded.transport = expandedSender.transport

    return expanded
  }

  let unicast = {inUse: false, routed: false, subscription_id: ''}

  return (id) => {
    expandSenders(data, id)
    checkForUnicast(data, id, unicast)
    expandReceivers(data, id, unicast)
    data.expanded = expanded(data.senders)
    return View(data)
  }
}

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

var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-cooking-ingredients', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M15 19h2v4.025h-2z' }),
    react.createElement('path', { d: 'M26 14l-1-1H7l-1 1v17l1 1h18l1-1V14zM16 29c-3.534 0-6.5-2.965-6.5-6.5S12.466 16 16 16s6.5 2.965 6.5 6.5S19.534 29 16 29zM31 0c-.77 5.438-7.219 10-15 10C8.227 10 1.78 5.43 1 0c4.688 0 23 .021 30 0z' })
  )
}

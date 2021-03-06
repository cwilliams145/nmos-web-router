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
    { className: 'gel-icon gel-icon-rugby-sevens', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M29.7 2.3C28.2.8 26.1 0 23.5 0c-1.1 0-2.3.1-3.5.4-4.2 1-8.6 3.6-12.3 7.3C4 11.4 1.4 15.8.4 20c-1 4.1-.3 7.6 1.8 9.7C3.8 31.2 5.9 32 8.5 32c1.1 0 2.3-.1 3.5-.4 4.2-1 8.6-3.6 12.3-7.3 3.7-3.7 6.3-8 7.3-12.3.9-4.1.3-7.6-1.9-9.7zm.4 9.4c-.9 3.9-3.4 8-6.9 11.5s-7.6 5.9-11.5 6.9c-1.1.3-2.2.4-3.2.4-1.9 0-3.5-.5-4.7-1.4l4.1-8.2-1.1-1.1-4.1 8.1c-1.3-1.8-1.6-4.4-.8-7.6.9-3.9 3.4-8 6.9-11.5 3.5-3.5 7.6-5.9 11.5-6.9 1.1-.3 2.2-.4 3.2-.4 1.7 0 3.2.4 4.4 1.2L20 7l1.1 1.1 8-4.3c1.4 1.8 1.8 4.6 1 7.9z' }),
    react.createElement('path', { d: 'M17.2 14.6c-.8.3-1.6.8-2.3 1.3s-1.4 1.1-2.1 1.7c-.6.6-1.2 1.2-1.6 1.8l-2-1.4c1.1-1.3 2.4-2.4 3.8-3.2 1.4-.9 3-1.5 4.6-1.9l-4.3-3.1 1.2-1.7 6.2 4.5-1.1 1.4c-.8.1-1.6.3-2.4.6z' })
  )
}

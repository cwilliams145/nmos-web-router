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
    { className: 'gel-icon gel-icon-iplayer-radio', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M21.5 6.2l-1.6 1.6c4.2 4.6 4.2 11.7 0 16.3l1.6 1.6c5.1-5.5 5.1-13.9 0-19.5z' }),
    react.createElement('path', { d: 'M26.2 1.5l-1.6 1.6c6.8 7.3 6.8 18.6 0 25.8l1.6 1.6c7.7-8.1 7.7-20.9 0-29zM5.7 3.7H0v5.7h5.7V7l9.8 9-9.8 9V13.2H0v15.1h5.7L19 16z' })
  )
}

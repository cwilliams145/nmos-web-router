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
    { className: 'gel-icon gel-icon-listen', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M21.4 4.8L20 6.2c2.5 2.5 4 6 4 9.8s-1.5 7.3-4 9.8l1.4 1.4C24.2 24.3 26 20.4 26 16c0-4.4-1.8-8.3-4.6-11.2z' }),
    react.createElement('path', { d: 'M25.6.5L24.2 2c3.6 3.6 5.8 8.6 5.8 14s-2.2 10.4-5.8 14l1.4 1.4C29.6 27.5 32 22 32 16S29.6 4.5 25.6.5zM16 4l-6 6H0v12h10l6 6z' })
  )
}

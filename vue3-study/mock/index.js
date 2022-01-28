/*
 * @Date: 2022-01-27 14:07:50
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-27 14:27:23
 * @FilePath: /vue3-study/mock/index.js
 */
// import Mock from 'mockjs'
const Mock = require('mockjs')
const good = require('./api/good')

const mocks = [
  ...good
]

function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
module.exports.mockXHR = () => {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap (respond) {
    return function (options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
    // Mock.mock(`/${i.url}/`, i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${url}`),
    type: type || 'get',
    response (req, res) {
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

module.exports = mocks.map(route => {
  return responseFake(route.url, route.type, route.response)
})

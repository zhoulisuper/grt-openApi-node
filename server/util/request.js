/*
 * @Author: Bing Xu
 * @Date: 2020-03-30 10:06:10
 * @LastEditTime: 2020-03-30 11:04:35
 * @LastEditors: Bing Xu
 * @Description:
 * @FilePath: /ad-api-nodejs/utils/request.js
 */
const request = require('request')

function post(url, data, isJson = true) {
  let options = {
    url,
    method: 'POST',
    json: true,
    body: JSON.stringify(data),
  }
  return new Promise((resolve, reject) => {
    request(options, (err, res, data) => {
      if (err) return reject(err)
      if (res.statusCode == 200) resolve(data)
    })
  })
}

function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    request(
      url,
      {
        method: 'GET',
        qs: params,
      },
      (err, res, body) => {
        if (err) return reject(err)
        else if (res.statusCode == 200) resolve(body)
      }
    )
  })
}

module.exports = {
  post,
  get,
}
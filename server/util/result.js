/*
 * @Description: 返回结果模版
 * @Author: 周丽
 * @Date: 2022-6-7
 */
const output = {
  success: function (res) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      isBase64Encoded: false,
      isSuccess: true,
      body: JSON.stringify(res),
    }
  },
  error: function (res) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      isBase64Encoded: false,
      isSuccess: false,
      body: res,
    }
  },
}

module.exports = output

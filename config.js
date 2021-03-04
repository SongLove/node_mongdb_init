const isDev = process.env.NODE_ENV === 'development' ? false : true

console.log('isDev', isDev)
const config = {
  serverUrl: isDev ? '3330' : '3300',
  DB_URL: isDev ? 'mongodb://127.0.0.1:27017/admin' : 'mongodb://admin:520.mnbx@www.tanggeek.top/test?authSource=admin'
}

module.exports = config
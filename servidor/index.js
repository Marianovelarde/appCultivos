const server = require('./src/app')
const {conn} = require('./src/db')

const PORT = process.env.PORT || 3001;

conn.sync({alter: true}).then(async () => {})
server.listen(PORT, () => {
    console.log('Servidor listo en puerto 3001')
})


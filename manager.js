const fs = require('fs')

class ManagerUser {

    constructor(filename) {
        this.filename = filename
        this.format = 'utf-8'
    }

    crearUsuario = async (nombre, apellido, edad, curso) => {
        return this.consultarUsuarios()
            .then(users => {
                users.push({nombre, apellido, edad, curso})
                return users
            })
            .then(usersNew => fs.promises.writeFile(this.filename, JSON.stringify(usersNew)))
    }

    consultarUsuarios = async () => {
        return fs.promises.readFile(this.filename, this.format)
            .then(content => JSON.parse(content))
            .catch(e => {
                console.log('ERROR', e);
                return []
            })
    }

}

async function run() {
    const manager = new ManagerUser('Usuarios.json')
    await manager.crearUsuario('Imanol', 'Valenzuela', 18, 'Programación Backend')
    await manager.crearUsuario('Zoe', 'Valenzuela', 16, 'Secundaria')
    console.log( await manager.consultarUsuarios() );
}

run()
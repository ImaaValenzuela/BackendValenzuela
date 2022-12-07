const crypto = require('crypto')

const DB = []
class UserManager {

    getUsers = () => {
        return DB
    }

    

    inserUser = user => {

        user.salt = crypto.randomBytes(128).toString('base64')
        user.contrasenia = crypto.createHmac('sha256', user.salt).update(user.contrasenia).digest('hex')

        DB.push(user)

        return user
    }
    
    

    validateUser = (username, contrasenia) => {
        const user = DB.find(u => u.username == username)
        if(!user) {
            console.log('User not found');
            return
        }

        const newHash = crypto.createHmac('sha256', user.salt).update(contrasenia).digest('hex')

        if(newHash == user.contrasenia) console.log('Logged!');
        else console.log('Invalid pass');
    }

}

const manager = new UserManager('')

manager.inserUser({
    nombre: 'Imanol',
    apellido: 'Valenzuela',
    username: 'enltd',
    contrasenia: '123456'
})

manager.inserUser({
    nombre: 'Zoe',
    apellido: 'Valenzuela',
    username: 'matraca',
    contrasenia: '654321'
})
console.log(manager.getUsers());


manager.validateUser('enltd', '123456')
console.log("-------------------------------")
manager.validateUser('matraca', '123456')
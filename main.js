/* Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.
Debe contar con un método “agregarUsuario” El cual recibirá:
id del evento (debe existir, agregar validaciones)
id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)
 */

class TicketManager {

    #precioBaseDeGanancia
    constructor() {
        this.events = []
        this.#precioBaseDeGanancia = 0.15
    }

    getEvents = () => {return this.events}
    
    getNextID = () => {
        const count = this.events.length
        if (count == 0) return 1

        const lastEvent = this.events[count-1]
        const lastID = lastEvent.id
        const nextID = lastID + 1

        return nextID

    }

    addEvent = (nombre, lugar, precio, capacidad, fecha) => {
        const id = this.getNextID()

        const event = {
            id,
            nombre,
            lugar,
            precioBase: precio,
            precio: precio * (1 + this.#precioBaseDeGanancia),
            capacidad: capacidad ?? 50000,
            fecha: fecha ?? new Date().toLocaleDateString(),
            participants: []
        }

        this.events.push(event)
    }

    addParticipant = (eventID, userID) => {
        const event = this.events.find(event => event.id == eventID)
        if(event == undefined) return -1

        if(!event.participants.includes(userID)) {
            event.participants.push(userID)
            return 1
        }

        return -1
    }

    ponerEventoEnGira = (eventID, lugarNew, fechaNew) => {
        const event = this.events.find(event => event.id == eventID)
        const { nombre, precioBase, capacidad } = event

        this.addEvent(nombre, lugarNew, precioBase, capacidad, fechaNew)
    }

}

const manager = new TicketManager()
manager.addEvent("Bad Bunny", "Estadio Velez", 120, null, null)
manager.addEvent("Duki", "Estadio Velez", 1000, null, null)

manager.addParticipant(1, "Zoe")
manager.addParticipant(1, "Imanol")
manager.addParticipant(2, "Federico")
manager.addParticipant(2, "Imanol")

manager.ponerEventoEnGira(1, "Miami", null)

console.log(manager.events);
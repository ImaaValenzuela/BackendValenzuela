/*Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
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
    
    // Consigue el siguiente ID
    getNextID = () => {
        const count = this.events.length
        if (count == 0) return 1

        const lastEvent = this.events[count-1]
        const lastID = lastEvent.id
        const nextID = lastID + 1
        // const nextID = (amount > 0) ? this.products[amount - 1].id + 1 : 1; 

        return nextID

    }

    addEvent = (name, place, price, capacity, date) => {
        const id = this.getNextID()

        const event = {
            id,
            name,
            place,
            priceBase: price,
            price: price * (1 + this.#precioBaseDeGanancia),
            capacity: capacity ?? 50,
            date: date ?? new Date().toLocaleDateString(),
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

    ponerEventoEnGira = (eventID, placeNew, dateNew) => {
        const event = this.events.find(event => event.id == eventID)
        const { name, priceBase, capacity } = event

        this.addEvent(name, placeNew, priceBase, capacity, dateNew)
    }

}

const manager = new TicketManager()
manager.addEvent("Koino", "Gran Rex", 15000, 12000, new Date("9/11/2023"))
manager.addEvent("Duki", "River", 23000, 100000, new Date("2/12/2023"))

manager.addParticipant(1, "Ima");
manager.addParticipant(1, "Jose");
manager.addParticipant(2, "Ima");
manager.addParticipant(2, "Jose");
manager.addParticipant(2, "Brian");
manager.addParticipant(2, "Martu");

console.log(manager.events);
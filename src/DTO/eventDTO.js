function eventDTO( event ) {

    return {
        "id": event._id,
        "name": event.name,
        "date": event.date,
        "place": event.place,
        "description": event.description,
        "minimumAge": event.minimumAge
    }

}

export default eventDTO
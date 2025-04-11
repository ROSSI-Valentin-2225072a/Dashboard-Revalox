export class Event {
  constructor(EventJSON) {
    this._id = EventJSON.id;
    this._nomEvent = EventJSON.nomEvent;
    this._description = EventJSON.description;
    this._lieu = EventJSON.lieu;
    this._dateEvent = EventJSON.dateEvent;
    this._type = EventJSON.type.libelle;
  }

  get id() {
    return this._id;
  }

  get nomEvent() {
    return this._nomEvent;
  }

  get description() {
    return this._description;
  }

  get lieu() {
    return this._lieu;
  }

  get dateEvent() {
    return this._dateEvent;
  }

  get type() {
    return this._type;
  }
}

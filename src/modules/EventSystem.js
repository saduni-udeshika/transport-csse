// OBSERVER PATTERN EVENT HANDLER
export default class EventSystem {
  // SINGLETON
  static instance;
  static getInstance() {
    if (EventSystem.instance == null) EventSystem.instance = new EventSystem();
    return EventSystem.instance;
  }

  _handlers = new Map();

  addListener(event, callback) {
    if (this._handlers.has(event)) {
      this._handlers.get(event).push(callback);
    } else {
      this._handlers.set(event, [callback]);
    }
  }

  removeListener(event, callback) {
    if (!this._handlers.has(event)) return;
    this._handlers.set(
      event,
      this._handlers.get(event).filter((e) => e !== callback)
    );
  }

  fire(event, data) {
    if (!this._handlers.has(event)) return;
    this._handlers
      .get(event)
      .forEach((callback) => (data != null ? callback(data) : callback()));
  }
}

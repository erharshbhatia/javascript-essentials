class Emitter {
    constructor () {
        this.eventMap = new Map();
    }
 
    on (eventName, callback) {
        if (this.eventMap.has(eventName)) {
            this.eventMap.get(eventName).push(callback);
        } else {
            this.eventMap.set(eventName, [callback]);
        }
    }

    remove (eventName, callback) {
        if (this.eventMap.has(eventName)) {
            let index = this.eventMap.get(eventName).indexOf(callback);
            if (index > -1) {
                this.eventMap.get(eventName).splice(index, 1);
            }
        } else {
            console.log('No such event');
        }
    }

    emit (eventName, ...args) {
        if (this.eventMap.has(eventName)) {
            this.eventMap.get(eventName).forEach(callback => {
                callback(...args);
            });
        } else {
            console.log('No such event');
        }
    }

    once (eventName, callback) {
        this.on(eventName, (...args) => {
            callback(...args);
            this.remove(eventName, callback);
        });
    }

    removeAllListeners (eventName) {
        if (this.eventMap.has(eventName)) {
            this.eventMap.delete(eventName);
        } else {
            console.log('No such event');
        }
    }

    listeners (eventName) {
        if (this.eventMap.has(eventName)) {
            return this.eventMap.get(eventName);
        } else {
            console.log('No such event');
        }
    }

    listenerCount (eventName) {
        if (this.eventMap.has(eventName)) {
            return this.eventMap.get(eventName).length;
        } else {
            console.log('No such event');
        }
    }

    rawListeners (eventName) {
        if (this.eventMap.has(eventName)) {
            return this.eventMap.get(eventName);
        } else {
            console.log('No such event');
        }
    }

    eventNames () {
        return Array.from(this.eventMap.keys());
    }

}


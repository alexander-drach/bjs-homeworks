'use strict';

class AlarmClock {
    constructor () {
        this.alarmCollection  = [];
        this.timerId  = null;
    }

    addClock (time, callback, id) {
        if (!id) {
            throw new Error('id  не передан');
        }

        this.alarmCollection.push({id, time, callback});

    }

    removeClock (id) {
        this.alarmCollection.filter (item => {
            if (item.id === id) {
                return delete item.id;
            }
        });

        return false;
    }

    getCurrentFormattedTime () {
        return new Date().toTimeString().substr(0, 5);
    }

    start () {
        function checkClock (call) {
            
        }

    }

    stop () {

    }

    printAlarms () {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach( (item, index) => console.log(`Будильник №: ${item.id} заведен на ${item.time}`));
    }

    clearAlarms () {
        this.alarmCollection  = [];
    }
}

/*

// проверка печати будильников

const alarm = new AlarmClock();

alarm.addClock('21:00', () => console.log('спать'), 1);
alarm.addClock('08:00', () => console.log('подъем'), 2);

alarm.printAlarms();
*/

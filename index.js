'usestrict';
let fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,

    start: function () {
        if (this.fuel === 0) {
            alert('The car is on empty, fill up before starting!');
        } else {
            this.started = true;

            if (this.fuel === 1) {
                alert('The fuel is running out! You need to fill up the car.');
            }
        }
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + ' ' +
                    this.model + ' goes zoom zoom!');
                this.fuel--;

                if (this.fuel === 1) {
                    alert('The fuel is running out! You need to fill up the car.');
                } else if (this.fuel === 0) {
                    alert('Uh oh, out of fuel.');
                    this.stop();
                }
            }
        } else {
            alert('You need to start the engine first.');
        }
    },

    addFuel: function (amount) {
        this.fuel += amount;
    }
};

fiat.start();
fiat.addFuel(2);
fiat.drive();
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.start();
fiat.addFuel(3);
fiat.start();
fiat.drive();
fiat.drive();
fiat.stop();
fiat.start();
fiat.addFuel(4);
alert(fiat.fuel);
fiat.drive();
fiat.stop();
alert(fiat.fuel);

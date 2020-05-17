// task - 1
function parseCount(num) {
    num = Number.parseInt(num);
    if(isNaN(num))     {
        const error = new Error('Невалидное значение');
        throw error;
    }
    return num;
}

function validateCount(num) {
    try {
        return parseCount(num);
    }catch(e) {
        return e;
    }
}

// task - 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if( ( (this.a + this.b) < this.c) || 
            ( (this.c + this.b) < this.a) || 
            ( (this.a + this.c) < this.b)) {
                const error = new Error('Треугольник с такими сторонами не существует');
                throw error;
        }
    }

    getPerimeter () {
        return parseFloat(this.a + this.b + this.c);
    }

    getArea () {
        let p = this.getPerimeter() / 2;
        let s = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c) ) ).toFixed(3);
        return parseFloat(s);
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    }catch(e) {
        return {
            getPerimeter () {
                return 'Ошибка! Неправильный треугольник';
            },
            getArea () {
                return 'Ошибка! Неправильный треугольник';
            }
        }
    }
}
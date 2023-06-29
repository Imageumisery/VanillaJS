let calculator = {
    num1: 0,
    num2: 0,
    sum() {
        return +this.num1 + +this.num2;
    },
    multiple() {
        return +this.num1 * +this.num2;
    },
    read() {
        this.num1 = prompt('Write the number to calculate', 0);
        this.num2 = prompt('Write the number to calculate', 0);
    }
}

calculator.read();
alert(calculator.multiple());
alert(calculator.sum());



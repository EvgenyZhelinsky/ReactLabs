class Calc extends React.Component {

    constructor(props) {
        super();
        this.state = {
            show: '...',
        };
    }
    pm = '';
    result = 0;
    stopped = false;
    final = function () {
        if (this.pm === '-') {
            this.input = this.input * (-1);
        }
        if (this.operationValue === ' + ' || this.operationValue === ' + -') {
            this.result = this.second + this.input;
        }
        else if (this.operationValue === ' - ' || this.operationValue === ' - -') {
            this.result = this.second - this.input;
        }
        else if (this.operationValue === ' * ' || this.operationValue === ' * -') {
            this.result = this.second * this.input;
        }
        else if (((this.operationValue === ' / ') || (this.operationValue === ' / -')) && (this.input != 0)) {
            this.result = this.second / this.input;
        }
        else {
            this.result = 'Error!!!!!';
            this.stopped = true;
        }
        this.second = this.result;
        this.setState({ show: this.result });
        this.input = 0;
    }
    operationValue = '';
    input = 0;
    second = '';
    number = function (inputNumber) {
        if (this.stopped == false) {
            this.input = this.input * 10 + inputNumber;

            this.setState({ show: this.second + this.operationValue + this.pm + this.input });
        }
    }

    operation = function (inputValue) {
        if (this.stopped == false) {
            if (this.pm === '-') {
                this.input = this.input * (-1);
            }
            this.operationValue = inputValue;
            this.second = this.input + this.result;
            this.input = 0;
            this.setState({ show: this.second + this.operationValue });
            this.pm = '';
        }
    }
    clear = function () {
        this.second = '';
        this.input = 0;
        this.operationValue = '';
        this.pm = '';
        this.result = 0;
        this.stopped = false;
        this.setState({ show: '...' });
    }
    plusMinus = function () {
        if (this.pm === '-') {
            this.pm = '';
            this.setState({ show: this.second + this.operationValue });
        }
        else {
            this.pm = '-';
            //this.operationValue = this.operationValue + '-';
            this.setState({ show: this.second + this.operationValue + this.pm });
        }
    }
    render() {
        var stay = this.state;
        var self = this;
        return React.createElement('div', {},
                React.createElement('h1', { id: 'main' }, stay.show),
                React.createElement('tr', {},
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.clear(); }, type: 'button', }, 'C'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.plusMinus(); }, type: 'button', }, '±'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.operation(' / '); }, type: 'button', }, '/'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.operation(' * '); }, type: 'button', }, '*')),

                ),
                React.createElement('tr', {},
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(7); }, type: 'button', }, '7'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(8); }, type: 'button', }, '8'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(9); }, type: 'button', }, '9'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.operation(' - '); }, type: 'button', }, '-')),
                ),
                React.createElement('tr', {},
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(4); }, type: 'button', }, '4'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(5); }, type: 'button', }, '5'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(6); }, type: 'button', }, '6')),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.operation(' + '); }, type: 'button', }, '+')),
                ),
                React.createElement('tr', {},
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(1); }, type: 'button', }, '1'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(2); }, type: 'button', }, '2'),),
                    React.createElement('tb', {}, React.createElement('button', { onClick: function () { self.number(3); }, type: 'button', }, '3'),),
                    React.createElement('tb', {}, React.createElement('button', { id: 'final', onClick: function () { self.final(); }, type: 'button', }, '=')),
                ),
                React.createElement('button', { id: 'oo', onClick: function () { self.number(0); }, type: 'button', }, '0'),
                React.createElement('button', {}, '.'),
        )
    }
}

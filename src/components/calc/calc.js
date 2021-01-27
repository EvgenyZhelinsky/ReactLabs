class Calc extends React.Component {

    constructor(props) {
        super();
        Logger.consoleMessage('constructor');
        this.state = {
            show: '...',
        };
    }

    componentDidMount() {
        //Logger.consoleMessage('componentDidMount');
        // var _this = this;
        // var intervalId = setInterval(function () {
        //     _this.setState({text: new Date()})

        // }, 10);
        // setTimeout(()=> {
        //     clearInterval (intervalId);
        //     _this.setState({text: 'stopped'})

        // }, 5000);



    }

    //onButtonClick = (buttonName) => {

    // Logger.consoleMessage(buttonName);
    //}
    final = function () {
        if (this.znak === ' + ') {
            this.setState({ show: this.first + this.res });
        }
        else if (this.znak === ' - ') {
            this.setState({ show: this.first - this.res });
        }
        else if (this.znak === ' * ') {
            this.setState({ show: this.first * this.res });
        }
        else if ((this.znak === ' / ') && (this.res != 0)) {
            this.setState({ show: this.first / this.res });
        }
        else {
            this.setState({ show: 'Error!!!!!'});  
        }
    }
    znak = 0;
    res = 0;
    operationValue = '';
    first = '';
    number = function (inputNumber) {
        this.res = this.res * 10 + inputNumber;
        this.setState({ show: this.first + this.operationValue + this.res });
    }
    
    operation = function (inputValue) {
        this.znak = inputValue;
        this.operationValue = inputValue;
        this.first = this.res;
        this.res = 0;
        this.setState({ show: this.first + this.operationValue });
    }
    restart = function () {
        this.first = '';
        this.res = 0;
        this.operationValue = '';
        this.setState({ show: '...' });
    }

    render() {
        var stay = this.state;
        var self = this;
        //Logger.consoleMessage('render');
        return React.createElement('div', {},
            React.createElement('h1', { id: 'main' }, stay.show),
            React.createElement('button', { onClick: function () { self.number(1); }, type: 'button', }, '1'),
            React.createElement('button', { onClick: function () { self.number(2); }, type: 'button', }, '2'),
            React.createElement('button', { onClick: function () { self.number(3); }, type: 'button', }, '3'),
            React.createElement('button', { onClick: function () { self.number(4); }, type: 'button', }, '4'),
            React.createElement('button', { onClick: function () { self.number(5); }, type: 'button', }, '5'),
            React.createElement('button', { onClick: function () { self.number(6); }, type: 'button', }, '6'),
            React.createElement('button', { onClick: function () { self.number(7); }, type: 'button', }, '7'),
            React.createElement('button', { onClick: function () { self.number(8); }, type: 'button', }, '8'),
            React.createElement('button', { onClick: function () { self.number(9); }, type: 'button', }, '9'),
            React.createElement('button', { onClick: function () { self.number(0); }, type: 'button', }, '0'),
            React.createElement('button', { onClick: function () { self.operation(' + '); }, type: 'button', }, '+'),
            React.createElement('button', { onClick: function () { self.operation(' - '); }, type: 'button', }, '-'),
            React.createElement('button', { onClick: function () { self.operation(' * '); }, type: 'button', }, '*'),
            React.createElement('button', { onClick: function () { self.operation(' / '); }, type: 'button', }, '/'),
            React.createElement('button', { onClick: function () { self.final(); }, type: 'button', }, '='),
            React.createElement('button', { onClick: function () { self.restart(); }, type: 'button', }, 'restart')
        )
    }
}

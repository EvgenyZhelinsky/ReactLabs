class Logger {
    static consoleMessage(massage) {
        var d = new Date();
        var y = d.getFullYear();
        var mon = d.getMonth();

        var month = Logger.getNumberString(mon++);
        var day = Logger.getNumberString(d.getDate(), 2);
        var hours = Logger.getNumberString(d.getHours(), 2);
        var minutes = Logger.getNumberString(d.getMinutes(), 2);
        var seconds = Logger.getNumberString(d.getSeconds(), 2);
        var ms = Logger.getNumberString(d.getMilliseconds(), 3);

        var date = '[' + y + month + day + '_' + hours + ':' + minutes + ':' + seconds + ':' + ms + ']' + ' ' + massage;
        console.log(date);
    }


    static getNumberString(num, digits) {
        num = num == null ? null : num;
        digits = digits > 1 ? digits : 1;
        var result = '';
        if (num != null) {
            result = num.toString();
            if (num < 10 ** (digits - 1)) {
                for (var i = result.length; i < digits; i++) {
                    result = '0' + result;
                }

            }
        }

        return result;
    }
}
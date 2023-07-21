let result;
        const convert_temp = () => {
            let temp = document.getElementById('temp').value;
            console.log(temp);
            let selector = document.getElementById('select_type');
            let n = selector.options.selectedIndex;
            let selectionis = selector.options[n].value;
            if (selectionis == 'Celsius') {
                result = ((temp * 1.8) + 32)
                document.getElementById('result_final').innerHTML = `  ${result.toFixed(3)}  Fahrenheit`
            }
            else if(selectionis == 'Fahrenheit') {
                result = ((temp - 32) / 1.8);
                document.getElementById('result_final').innerHTML = ` ${result.toFixed(3)} Celcius`
            }
        }
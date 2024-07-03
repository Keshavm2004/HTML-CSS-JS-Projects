let screen1 = '';
let screen2 = '';
let temp_result = '';
let i = 0;
let decimal = false;
let buttons = document.querySelectorAll('.commonbtn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            screen1 = screen2;
            screen2 = eval(screen2);
            document.querySelector('.screen1')
            document.querySelector('.screen1').value = screen1;
            document.querySelector('.screen2').value = screen2;
            i = 0;
            screen1 = '';
            screen2 = '';
            temp_result = '';
        }
        else if (e.target.innerHTML == 'Delete') {
            i = i - 1;
            screen2 = screen2.slice(0, i);
            document.querySelector('.screen2').value = screen2;
            temp_result = eval(screen2);
            document.querySelector('.temp-result').value = temp_result;
        }
        else if (e.target.innerHTML == 'C') {
            i = 0;
            screen1 = '';
            screen2 = '';
            temp_result = '';
            document.querySelector('.screen1').value = screen1;
            document.querySelector('.screen2').value = screen2;
            document.querySelector('.temp-result').value = temp_result;
        }
        else {
            i = i + 1;
            screen2 = screen2 + e.target.innerHTML;
            document.querySelector('.screen1').value = screen1;
            document.querySelector('.screen2').value = screen2;
            temp_result = eval(screen2);
            document.querySelector('.temp-result').value = temp_result;
        }
    })
})
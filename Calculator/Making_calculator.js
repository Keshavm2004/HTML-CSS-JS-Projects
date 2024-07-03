// let string = '';
// // console.log(string.length)
// let i = 0;
// let operator = document.getElementsByClassName('op');
// console.log(operator)
// let buttons = document.querySelectorAll('.commonbtn');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//             i = 0;
//             string = '';
//         }
//         else if (e.target.innerHTML == 'C') {
//             string = '';
//             i = 0;
//             document.querySelector('input').value = string;
//         }
//         else if (e.target.innerHTML == 'Delete') {
//             if (i > 0) {
//                 string = string.slice(0, i - 1);
//                 i = i - 1;
//             }
//             if (i == 0) {
//                 i = 0;
//                 string = '';
//             }
//             document.querySelector('input').value = string;
//         }
//         // else if ((e.target.innerHTML == 'num') || (e.target.innerHTML == 'op')) {
//         //     if ((string[i] == 'op') && (e.target.innerHTML == 'op')) {
//         //         operator = operator + 'Full';
//         //     }
//         // }
//         if ((e.target.innerHTML != 'C') && (e.target.innerHTML != 'Delete') && (e.target.innerHTML != '=')) {
//             // if ((string[i - 1] == '+') || (string[i - 1] == '-') || (string[i - 1] == '*') || (string[i - 1] == '/') || (string[i - 1] == '%')) {
//             //     if ((e.target.innerHTML == '+') || (e.target.innerHTML == '-') || (e.target.innerHTML == '*') || (e.target.innerHTML == '/') || (e.target.innerHTML == '%')) {
//             //         string[i - 1] = e.target.innerHTML;
//             //         document.querySelector('input').value = string;
//             //     }
//             // }
//             // else {
//             //     i = i + 1;
//             //     console.log(string);
//             //     string = string + e.target.innerHTML;
//             //     document.querySelector('input').value = string;
//             // }
//             i = i + 1;
//             console.log(string);
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })



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
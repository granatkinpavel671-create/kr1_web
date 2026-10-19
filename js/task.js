// Задача 1006: разменять сумму купюрами 500, 100, 10 и монетой 2 руб.
function verify() {
    let sum = parseFloat(elementSum.value);
    console.log("sum", sum);

    if (sum > 0) {
        if (sum == parseInt(sum)) {
            if (sum % 2 == 0) {
                let rest = sum;
                let n500 = parseInt(rest / 500);
                rest = rest - n500 * 500;
                let n100 = parseInt(rest / 100);
                rest = rest - n100 * 100;
                let n10 = parseInt(rest / 10);
                rest = rest - n10 * 10;
                let n2 = rest / 2;
                console.log(n500, n100, n10, n2);
                result = "Размен возможен: 500 руб. - " + n500 + " шт., 100 руб. - " + n100 +
                    " шт., 10 руб. - " + n10 + " шт., 2 руб. - " + n2 + " шт.";
                check = true;
            }
            else {
                result = "Размен невозможен: сумма нечётная, а все купюры и монета чётные";
                check = true;
            }
        }
        else {
            result = "Ошибка: сумма должна быть целым числом рублей";
            check = false;
        }
    }
    else {
        result = "Ошибка: введите сумму больше нуля";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    verify();
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

let result;
let check;

const elementSum = document.getElementById("sum");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener("click", verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener("click", send);

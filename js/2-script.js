let balance = 20000;
const payment = 2000;
console.log (`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступых средств на счету.`);

if (balance >= payment) {
    balance = balance - payment;
    console.log(`На счету осталось ${balance} кредитов.`);
} else {
    let dif = payment - balance;
    console.log(`На счету недостаточно средств для проведения операции! Пополните счет на ${dif} кредитов`);
}

console.log('Операция завершена');
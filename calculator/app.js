const heading = document.querySelector('.heading')
const loading = document.querySelector('loading')


document.getElementById('loan').addEventListener('submit', e => {
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthly_payment = document.getElementById('monthly-payment')
    const total_interest = document.getElementById('total-interest')
    const total_payment = document.getElementById('total-payment')


    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const caculatedPayment = parseFloat(years.value) * 12


    // monthly payment

    const x = Math.pow(1 + calculatedInterest, caculatedPayment)
    const monthly = (principal * x * calculatedInterest) / (x - 1)

    if (isFinite(monthly)) {
        monthly_payment.value = monthly.toFixed(2)
        total_payment.value = (monthly * caculatedPayment).toFixed(2)
        total_interest.value = ((monthly * caculatedPayment) - principal).toFixed(2)
    } else {
        showErro('Please check your numbers')
    }



    e.preventDefault()
})

const showErro = (message) => {
    const res = document.querySelector('#res')
    const card = document.querySelector('.card')

    const erroDive = document.createElement('div')
    erroDive.className = 'alert alert-danger'
    erroDive.appendChild(document.createTextNode(message))
    card.insertBefore(erroDive, heading)

    setTimeout(() => {
        //erroDive.style.display = 'none'
        erroDive.remove()
    }, 1000);

}
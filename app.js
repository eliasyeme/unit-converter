let inputValue = 0

function convertUnit(val) {
    val = Number(val)
    if (isNaN(val)) {
        val = 0
    }
    const converted = {
        meter: (val * 3.281).toFixed(3),
        feet: (val / 3.281).toFixed(3),
        liter: (val * 0.264).toFixed(3),
        gallon: (val / 0.264).toFixed(3),
        kilogram: (val * 2.204).toFixed(3),
        pounds: (val / 2.204).toFixed(3)
    }
    return converted
}

function render() {
    inputEl.placeholder = inputValue
    const numEl = document.querySelectorAll('.num-el')
    const converted = convertUnit(inputValue)
    document.getElementById('feet-el').textContent = converted.feet
    document.getElementById('meter-el').textContent = converted.meter
    document.getElementById('gallon-el').textContent = converted.gallon
    document.getElementById('litter-el').textContent = converted.liter
    document.getElementById('pound-el').textContent = converted.pounds
    document.getElementById('kilo-el').textContent = converted.kilogram

    numEl.forEach(el => {
        el.textContent = inputValue
    })
}

const inputEl = document.getElementById('input-el')

inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        inputValue = e.target.value
        inputEl.blur()
        inputEl.value = ""
        render()
    }
})

inputEl.addEventListener('input', (e) => {
    console.log(e.target.value)
    inputValue = e.target.value
    render()
})

render()
// Cleaking The heart Icon

const hearts = document.getElementsByClassName('blank-heart');

let heartIconValue = 0;

for (const heart of hearts) {
    heart.addEventListener('click', function () {
        heartIconValue++
        document.getElementById('heart-count').innerText = heartIconValue


    })
}


// Call Button Funtionalities 

const serviceCards = document.querySelectorAll('.all-card');
const historyList = document.getElementById('call-history')
const callhistory = []

for (const card of serviceCards) {
    const serviceName = card.querySelector('.service-name').innerText
    const serviceNumber = card.querySelector('.service-number').innerText

    const callButton = card.querySelector('.call-btn')

    callButton.addEventListener('click', function () {
        const availableCoin = parseInt(document.getElementById('coins').innerText)
        const cutCoin = 20;

        if (availableCoin < 20) {
            alert('Please Recharge Your Coin')
            return;
        }

        const totalAvailableCoin = availableCoin - cutCoin

        document.getElementById('coins').innerText = totalAvailableCoin

        alert(serviceName + ", " + serviceNumber);

        const historydata = {
            name: serviceName,
            number: serviceNumber,
            date: new Date().toLocaleTimeString()
        }
        callhistory.push(historydata);

        const historyContainer = document.getElementById('call-history')
        historyContainer.innerText = ""
        

        for (const data of callhistory) {
            
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="flex justify-between items-center mt-4 mb-2 bg-[#FAFAFA] p-4 rounded-lg">
                        <div>
                            <h1 class=" text-xl font-bold" >${data.name}</h1>
                            <p>${data.number}</p>
                        </div>
                         <p>${data.date}</p>
                    </div>

            `
            historyContainer.appendChild(div);
            
            
        }

    })
}

document.getElementById('clear')
.addEventListener('click', function(){
    const historyClear = document.getElementById('call-history');
    historyClear.innerHTML = ""

})


// Copy button Funtionalities

const copyButtons = document.getElementsByClassName('copy-button')

let copyCountValue = 2

for(const button of copyButtons){
    button.addEventListener('click', function (){
        const allCard = button.closest('.all-card')
        const copyText = allCard.querySelector('.service-number').innerText
        
        navigator.clipboard.writeText(copyText)
        alert('Service Number Coppied')
        copyCountValue++
        document.getElementById('copy-count').innerText = copyCountValue
    })
}




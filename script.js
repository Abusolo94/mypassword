

const storedPassword = document.querySelector('.stored-passwords');
const deletedPassword = document.querySelector('.deleted-passwords');
const cardPassword = document.querySelector('.card-passwords');

const storedBtn = document.getElementById('stored');
const deletedBtn = document.getElementById('deleted');
const cardBtn = document.getElementById('cardimfo');
const closeBtn = document.querySelectorAll('.closeBtn')

storedBtn.addEventListener('click', ()=>{
    storedPassword.classList.add('active')
    storeData()
})
deletedBtn.addEventListener('click', ()=>{
    deletedPassword.classList.add('active')
})
cardBtn.addEventListener('click', ()=>{
    cardPassword.classList.add('active')
})

closeBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.target.parentElement.parentElement.classList.remove('active')

    })
})
const addBtn = document.getElementById('add')
const siteInput = document.getElementById('siteAddress')
const passInput = document.getElementById('passwords')
const selectInput= document.getElementById('category')

const storedList = document.querySelector('.list-items')
const cardList = document.querySelector('.c-list-items')
const deleteList = document.querySelector('.d-list-items')

// <===================notifications============>
const storedNote = document.querySelector('.stored')
const deleteddNote = document.querySelector('.deleted')
const newNote = document.querySelector('.new')
const cardNote = document.querySelector('.cards')
const notificationBody = document.querySelector('.notifications')



addBtn.addEventListener('click', ()=>{
    if(siteInput.value === '' && passInput.value === "" && selectInput.value===""){
        error("all input field are required")
    }
    else if(selectInput.value === "site" || selectInput.value === "device" && selectInput.value != 'card' ){
        addItemsToStored()
        siteInput.value = ''
        passInput.value = ''
   
       
    }else if(selectInput.value === "card"){
        addItemToCard()
        siteInput.value = ''
        passInput.value = ''
    }else{
        return
    }


 
    storeData()


}

)

let storedInfo = [];
let deletedInfo = [];
let cardImfo = [];
let storedCount = 0;
let deletedCount= 0;
let cardCount= 0;
let newCount = 0;

function showingNotications(){
    storedNote.innerText = storedCount
    deleteddNote.innerText = deletedCount
    newNote.innerText = newCount
    cardNote.innerText =cardCount

   
}
showingNotications()

function addItemsToStored(){

    if(siteInput.value === '' && passInput.value === "" && selectInput.value===""){
        error("all input field are required")
    }else{
        const stored ={
            scount: storedCount + 1,
            siteName: siteInput.value,
            password: passInput.value,
        }

        storedCount++
        newCount++
           
   
        
        storedInfo.push(stored)
        renderingItem(stored)
        showingNotications()
       
        showingNotications()
     
      

    }
    

    storeData()
}


 function addItemToCard(){
    if(siteInput.value === '' && passInput.value === "" && selectInput.value===""){
        console.log('input feilds rquired')
    }else{
        const cards ={
            scount: cardCount,
            siteName: siteInput.value,
            password: passInput.value,
        }
       cardCount++
       newCount++
        
        cardImfo.push(cards)
        renderingcards(cards)
        showingNotications()
       
    }
    storeData()


 }


 function renderingItem(rendered){
    let item = `
    <li>
                    <div class="id-itemName">
                        <h3>${rendered.scount}</h3>
                        <p>${rendered.siteName}</p>
                    </div>
                    <div class="passInfo">
                        <p>${rendered.password}</p>
                    </div>
                    <div class="btns">
                        <button id="show">Show</button>
                        <button id="edit">Edit</button>
                        <button class="del" id="delete">Delete</button>
                    </div>
                </li>
    `
    storedList.insertAdjacentHTML('beforeend',item )
    storeData()
 }
 function renderingcards(rendered){
    let item = `
    <li>
                    <div class="id-itemName">
                        <h3>${rendered.scount}</h3>
                        <p>${rendered.siteName}</p>
                    </div>
                    <div class="passInfo">
                        <p>${rendered.password}</p>
                    </div>
                    <div class="btns">
                        <button id="show">Show</button>
                        <button class="del" id="delete">Delete</button>
                    </div>
                </li>
    `
    cardList.insertAdjacentHTML('beforeend',item )
    storeData()
 }


storedList.addEventListener('click', (e)=>{
    if(e.target.id ==='delete'){
        e.target.parentElement.parentElement.remove()
        deletedCount++
        storedCount--
        showingNotications()
        let iditem = e.target.parentElement.parentElement.children[0].children[0].innerText
        let web = e.target.parentElement.parentElement.children[0].children[1].innerText
        let passwords = e.target.parentElement.parentElement.children[1].children[0].innerText

       
        const deletes = {
            id: iditem ,
            webName: web,
            pass: passwords
        }
        deletedInfo.push(deletes)
       
     
        renderingDeletedItem(deletes)
        storeData()
       
    }

})

cardList.addEventListener('click', (e)=>{
    if(e.target.id ==='delete'){
        e.target.parentElement.parentElement.remove()
        deletedCount++
        cardCount--
        showingNotications()
        let iditem = e.target.parentElement.parentElement.children[0].children[0].innerText
        let web = e.target.parentElement.parentElement.children[0].children[1].innerText
        let passwords = e.target.parentElement.parentElement.children[1].children[0].innerText

       
        const deletes = {
            id: iditem ,
            webName: web,
            pass: passwords
        }
        deletedInfo.push(deletes)
       
     
        renderingDeletedItem(deletes)
        storeData()
       
    }


})

function renderingDeletedItem(rand){
    item = `
    <li>
    <div class="id-itemName">
        <h3>${rand.id}</h3>
        <p >${rand.webName}</p>
    </div>
    <div class="passInfo">
        <p >${rand.pass}</p>
    </div>
    <div class="btns">
        <button id="potroy">Show</button>
        <button id="restore">Restore</button>
        <button class="rem" id="remove">Delete</button>
    </div>



    <div class="deletingMessage">
    <div class="top">
        <h1>Information</h1>
        <button class="back">back</button>
      
    </div>
    <div class="message">
        <p class="messagePara">Are you sure, please to press confirm to comfirm your request</p>
    </div>
    <button class="conf">Comfirm</button>

</div>
</li>
    
    `

    deleteList.insertAdjacentHTML('beforeend', item)
    // storeData()
}

    deleteList.addEventListener( "click", (e)=>{

        if(e.target.id === 'remove'){
            deletedCount--
            e.target.parentElement.parentElement.remove()
            // deletingComfirmation('This will parmently delete your imformation')
         
            storeData()
        }
       
    
    })



const errorOk = document.querySelector('.okk')
const errorBody = document.querySelector('.error-message')
function error(messege){
    
    const messageText = document.querySelector('.message-text')
    errorBody.classList.add('active')
    messageText.textContent = messege

    // setTimeout(()=>{
    //     errorBody.classList.remove('active')

    // },2000)

}

errorOk.addEventListener('click', ()=>{
    errorBody.classList.remove('active')
})
const deletingBody = document.querySelector('.deletingMessage')
const backBtn = document.querySelector('.back')
const confirmBtn = document.querySelector('.conf')

function deletingComfirmation(errormessage){
    const deleteMess  = document.querySelector('.messagePara')
    deletingBody.classList.add('active')
    deleteMess.textContent = errormessage
    
}

backBtn.addEventListener('click', ()=>{
    deletingBody.classList.remove('active')

})
confirmBtn.addEventListener('click', ()=>{



})
 



function storeData(){
    localStorage.setItem('data', storedList.innerHTML);
    localStorage.setItem('cards', cardList.innerHTML)
    localStorage.setItem('erased', deleteList.innerHTML)
    
    localStorage.setItem('storenote', storedNote.textContent)
    localStorage.setItem('delnote', deleteddNote.textContent)
    localStorage.setItem('newnot', newNote.textContent)
    localStorage.setItem('cardnot', cardNote.textContent)
  

}

function showStoredData(){
    storedList.innerHTML = localStorage.getItem("data")
    cardList.innerHTML = localStorage.getItem('cards')
    deleteList.innerHTML = localStorage.getItem('erased')
   
    storedNote.innerHTML = localStorage.getItem('storenote')
    deleteddNote.innerHTML = localStorage.getItem('delnote')
    newNote.innerHTML = localStorage.getItem('newnot')
    cardNote.innerHTML = localStorage.getItem('cardnot')
    

}
showStoredData()
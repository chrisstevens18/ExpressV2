
console.log('hi')
$.get("http://localhost:5001/api/mvp",(data)=>{
    for (let i = 0; i < data.length; i++) {
    $('#hobbieList').append(`<li class="list"> ${data[i].hobbies + " -"} ${data[i].description} </li>`)
    }
})

const formSub = document.querySelector('.form1');
 //selects the form and puts it in a variable

 // post from submit form
formSub.addEventListener('submit', event => { //adds event listener
    event.preventDefault(); 
    const formData = new FormData(formSub); //takes all data from form
    const formInput = Object.fromEntries(formData); //puts that dat into a 
    const textArea = document.getElementById('textBox')
    console.log(textArea.value)
    fetch('http://localhost:5001/api/mvp', {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formInput)})
        console.log(formInput) //turns the form data into a string
       $('#hobbieList').append(`<li class ="list"> ${formInput.hobbies + " -"} ${textArea.value} </li>`)
    
})
    // .then(response => {
    // $('#display').append(formInput.description) //appends stringified form data to display div

    console.log(formInput)
    // location.reload()



// })



console.log('hello-world-detail')

const backBtn = document.getElementById('back-btn')
const updateBtn = document.getElementById('delete-btn')
const deleteBtn = document.getElementById('update-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')

backBtn.addEventListener('click', ()=>{
    history.back()
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response)
        const data = response.data
        if (data.logged_in !== data.author){
            console.log('diffent')
        } else {
            console.log('thesame')
            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')
        }

        spinnerBox.classList.add('not-visible')
    },
    error: function(error){
        console.log(error)
    }
})
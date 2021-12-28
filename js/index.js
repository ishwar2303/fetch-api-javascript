let apiContent = document.getElementById('api-content')
const getApiData = () => {
    let url = "localhost:8082/Highradius/fetch-invoice"
    fetch(url, {
        method : 'GET',
        mode : 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
    })
    .then(response => response.text())
    .then((data) => {
        apiContent.innerHTML = data
        // let entries = data.entries
        // entries.forEach(el => {
        //     apiContent.innerHTML += el.API + "<br/>"
        // });
    })
}

// getApiData()


const postApiData = () => {
    let url = "https://dummy.restapiexample.com/api/v1/create"
    let formData = prepareFormData()
    let setOptions = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body : formData 
    }
    fetch(url, setOptions)
    .then(response => response.text())
    .then(data => console.log(data))
}
import { renderResults } from './APIresponse'

function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById('url').value
    console.log('creating post', JSON.stringify(url));
    fetch('http://localhost:8080/analyse', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: url}),
    })
    .then(res => res.json())
    .then(data => {
        Client.renderResults(data)
    })
}

export { handleSubmit }

export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('https://api.aylien.com/api/v1')
    fetch("https://aylien-text.p.rapidapi.com/extract?url=http%253A%252F%252Ftechcrunch.com%252F2014%252F02%252F27%252Faylien-launches-text-analysis-api-to-help-developers-extract-meaning-from-documents%252F", {
        method : 'GET',
        // body: JSON.stringify({text: url[0].value})
        body: JSON.stringify()
    })
    .then(res => res.json())
    // console.log(json())
    .then(function(res) {
        console.log(res); // for debugging
        document.querySelector('section.url-results #polarity').innerHTML = res.polarity
        document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
        document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
        document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
        document.querySelector('section.url-results #excerpt').innerHTML = res.text
    })
}

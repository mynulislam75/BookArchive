
//getting search result data

const searchResult = () => {
    const searchFieldInput = document.getElementById('search-feild');
    const searchFieldValue = searchFieldInput.value;
    const url = ` http://openlibrary.org/search.json?q=${searchFieldValue}`

    //fetch data
    fetch(url)
        .then(res => res.json())
        .then(data => singleResult(data.docs))

    //clear search field input
    searchFieldInput.value = '';
    getDiv.innerHTML='';
}

const getDiv = document.getElementById('show-result')

//getting single data by using forEach loop
const singleResult = singleData => {
    singleData.forEach(singleInfo => {
        const div = document.createElement('div');
        div.innerHTML = `
       <div>

    <h4>Name:${singleInfo.author_name}</h4>
    <p>Published Date:${singleInfo.first_publish_year}</p>
    <p>Author Name:${singleInfo.title}</p>
    
    </div>

       `
       getDiv.appendChild(div)
    });
}
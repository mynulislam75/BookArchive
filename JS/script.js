
//getting,catching and fetching search input value
const searchResult = () => {
    const searchFieldInput = document.getElementById('search-feild');
    const searchFieldValue = searchFieldInput.value;

    //creating dymanic url using search feild input
    const url = ` http://openlibrary.org/search.json?q=${searchFieldValue}`

    //fetch data
    fetch(url)
        .then(res => res.json())
        .then(data => singleResult(data))

    //clear search field input
    searchFieldInput.value = '';

    getDiv.innerHTML = '';

    //clear total number of result  
    numberShow.innerText = '';

    //clear nothing found error warning
    errorFound.innerText = '';

    //clear emty search error warning
    emtySearch.innerText = '';
}

const getDiv = document.getElementById('show-result')
const numberShow = document.getElementById('total-result')
const resultShowA = document.getElementById('alart-result')
const errorFound = document.getElementById('not-find-error')
const emtySearch = document.getElementById('emty-error')
const mainId = document.getElementById('main-id')

//getting single data by using forEach loop
const singleResult = books => {

    //catching emty search input result error
    if (books.num_found === 0 && books.q === "") {
        emtySearch.innerText = `SEARCH FEILD CANN'T BE EMTY,PLEASE WRITE SOMETHING`
        return;
    }

    //catching finding no result according search input value error
    else if (books.num_found === 0) {
        errorFound.innerText = `OPPS,SORRY!!NO RESULT FOUND.PLEASE SEARCH ACCURATE`
        return;
    }

    // console.log(singleResult)
    const numberIs = books.numFound;
    numberShow.innerText = `Total Result Found of is ${numberIs}`
    // console.log(numberIs)
    resultShowA.innerText = `Your Search Result`
    const docsIs = books.docs;

    docsIs.forEach(singleInfo => {
        console.log(singleInfo.cover_i)
        const div = document.createElement('div');
        div.classList.add('col-lg-2','col-md-3','col-6', 'mb-4', 'ms-3', 'shadow', 'rounded', 'Book-details-container')
        div.innerHTML = `

        <div>
        <div class="text-center p-1 rounded mt-1 mb-1">
        <img src="https://covers.openlibrary.org/b/id/${singleInfo.cover_i}-M.jpg" class="img-fluid" alt="images not found" >
        </div>
        <div class="card-details mt-2 mx-auto">
            <h5>Name of the Book:</h5>
            <p>${singleInfo.title}</P>
            <h6>Author By:</h6>
            <p>${singleInfo.author_name}</p>
            <p>First Published in:${singleInfo.first_publish_year}</p>
        </div>
        </div>
       `
        getDiv.appendChild(div)
    });
}



//getting,catching and fetching search input value
const searchInput = () => {
    const searchFieldInput = document.getElementById('search-feild');
    const searchFieldValue = searchFieldInput.value;

    //creating dymanic url using search feild input
    const url = ` https://openlibrary.org/search.json?q=${searchFieldValue}`

    //fetch data
    fetch(url)
        .then(res => res.json())
        .then(data => fetchedData(data))

    //clear previous search field input
    searchFieldInput.value = '';

    //clear all previous result
    resultContainerDiv.innerHTML = '';

    //clear previous total number of result  
    totalNumofResult.innerText = '';

    //clear nothing found error warning
    errorFound.innerText = '';

    //clear emty search error warning
    emtySearch.innerText = '';

    simpleResultShowMessage.innerText='';
    // errorSection.innerHTML='';
}

const resultContainerDiv = document.getElementById('show-result')
const totalNumofResult = document.getElementById('total-result')
const simpleResultShowMessage = document.getElementById('result-message')
const errorFound = document.getElementById('not-find-error')
const emtySearch = document.getElementById('emty-error')
const mainId = document.getElementById('main-id')
const errorSection=document.getElementById('error-contaoner-section')

//declare an arrow function
const fetchedData = books => {

    //catching emty search input result error
    if (books.num_found === 0 && books.q === "") {
        emtySearch.innerText = `SEARCH FEILD CANN'T BE EMTY,PLEASE WRITE SOMETHING`
        return;
    }

    //catching finding no result according search input value error
    else if (books.num_found === 0) {
        errorFound.innerText = `No Result Found`
        return;
    }

   //total result found based on search input
    const totalResultFound = books.numFound;
    totalNumofResult.innerText = `Total ${totalResultFound} result is founded of your search`

   //showing a simple message which will
    simpleResultShowMessage.innerText = `All Search Result`

    //getting an array from fething data
    const arrayListOfData = books.docs;

    //using forEach to get all single object from given array
    arrayListOfData.forEach(singleBookInfo => {
        console.log(singleBookInfo.publisher)
        const div = document.createElement('div');
        div.classList.add('col-lg-2','col-md-3','col-6', 'mb-4', 'ms-3', 'shadow', 'rounded', 'Book-details-container')
        div.innerHTML = `

        <div>
        <div class="text-center p-1 rounded mt-1 mb-1">
        <img src="https://covers.openlibrary.org/b/id/${singleBookInfo.cover_i}-M.jpg" class="img-fluid" alt="images not found" >
        </div>
        <div class="card-details mt-2 mx-auto">
            <h5>Book Name:</h5>
            <p>${singleBookInfo.title}</P>
            <h6>Author By:</h6>
            <p>${singleBookInfo.author_name}</p>
            <h6>Publisher:</h6>
            <p class="overflow-visible">${singleBookInfo.publisher}</p>
            <p>First Published in:${singleBookInfo.first_publish_year}</p>
        </div>
        </div>
       `
        resultContainerDiv.appendChild(div)
    });
}


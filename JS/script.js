
//getting search result data

const searchResult = () => {
    const searchFieldInput = document.getElementById('search-feild');
    const searchFieldValue = searchFieldInput.value;
    const url = ` http://openlibrary.org/search.json?q=${searchFieldValue}`

    //fetch data
    fetch(url)
        .then(res => res.json())
        .then(data => singleResult(data))

    //clear search field input
    searchFieldInput.value = '';
    getDiv.innerHTML = '';
    numberShow.innerText = '';
    errorFound.innerText='';
    emtyResult.innerText='';
}

const getDiv = document.getElementById('show-result')
const numberShow = document.getElementById('number')
const resultShowA=document.getElementById('alart-result')
const errorFound=document.getElementById('error')
const emtyResult=document.getElementById('emty')

//getting single data by using forEach loop
const singleResult = singleData => {
    if (singleData.num_found === 0) {
        errorFound.innerText=`OPPS,SORRY!!NO RESULT FOUND`
        return;
    }

    console.log(singleResult)
    const numberIs = singleData.numFound;
    numberShow.innerText = `total found is ${numberIs}`
    // console.log(numberIs)
    resultShowA.innerText=`Your Search Result`
    const docsIs = singleData.docs;
    // const img=docsIs.cover_i;
    // console.log(img)

    docsIs.forEach(singleInfo => {
        console.log(singleInfo.cover_i)
        const div = document.createElement('div');
        div.classList.add('col-lg-2', 'm-3', 'p-3', 'shadow-lg-2', 'col-md-3', 'col-sm-6', 'rounded')
        div.innerHTML = `
        <div class="card w-100 h-100">
        <img src="https://covers.openlibrary.org/b/id/${singleInfo.cover_i}-M.jpg" class="img-fluid" alt="images not found">
        <div class="card-body m-3">
            <h4 class="book-title">Book Name:${singleInfo.title}</h4>
            <h5 class="author-title">Author:${singleInfo.author_name}</h5>
            <p class="card-text">First Published:${singleInfo.first_publish_year}</p>
        </div>
        </div>
       `
        getDiv.appendChild(div)
    });
}

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
    getDiv.innerHTML='';
    numberShow.innerText='';
}

const getDiv = document.getElementById('show-result')
const numberShow=document.getElementById('number')

//getting single data by using forEach loop
const singleResult = singleData => {
    const numberIs=singleData.numFound;
numberShow.innerText=`'total found is' ${numberIs}`
    // console.log(numberIs)
    const docsIs=singleData.docs;
    // console.log(docsIs)

    docsIs.forEach(singleInfo => {
        console.log(singleInfo)
        const div = document.createElement('div');
        // div.classList.add.apply('col-lg-4')
        div.innerHTML = `

        <div class="card w-50 h-100 col col-md-4 col-lg4 col-sm-4">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">Book Name:${singleInfo.title}</h4>
            <h5 class="card-title">Author:${singleInfo.author_name[0]}</h5>
            <p class="card-text">First Published:${singleInfo.first_publish_year}</p>
        </div>
        </div>

       `
       getDiv.appendChild(div)
    });
}
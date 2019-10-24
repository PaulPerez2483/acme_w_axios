const companies = 'https://acme-users-api-rev.herokuapp.com/api/companies';
const products = 'https://acme-users-api-rev.herokuapp.com/api/products';

axios.get(companies)
.then(response => renderCompanies(response.data))
.catch(error => console.log(error));

axios.get(products)
.then(response => renderProducts(response.data))
.catch(error => error);

function renderProducts(data){
    let insert = document.getElementById('insertProducts');
    let finalData = data.map(el => {
        const { id, name, description, suggestedPrice, createdAt, updatedAt } = el;
        // console.log(id, name, description, suggestedPrice, createdAt, updatedAt)
        return `<tr>
                <th scope="row">${id}</th>
                <td>${name}</td>
                <td>${description}</td>
                <td>${suggestedPrice}</td>
                <td>${createdAt}</td>
                <td>${updatedAt}</td>
                </tr>`
    }).join('');
    console.log(data)
    insert.innerHTML = finalData;
}

function renderCompanies(data){
    let insert = document.getElementById('insertCompanies');
    let finalData = data.map(el => {
        const { id, name, phone, state, catchPhrase, createdAt } = el;
        // console.log(id, name, description, suggestedPrice, createdAt, updatedAt)
        return `<tr>
                <th scope="row">${id}</th>
                <td>${name}</td>
                <td>${phone}</td>
                <td>${state}</td>
                <td>${catchPhrase}</td>
                <td>${createdAt}</td>
                </tr>`
    }).join('');
    console.log(data)
    insert.innerHTML = finalData;
}

function links() {
    let aTags = [...document.getElementsByTagName('a')];
        aTags.forEach(el => {
             if(!el.className.includes('active')) {
                 document.getElementById('$products').style.display = 'none';
             }

             el.addEventListener('click', ()=>{
                 if(el.attributes.id.nodeValue === 'products') {
                     el.classList.add('active');
                     document.getElementById('$companies').style.display = 'none';
                     document.getElementById('$products').style.display = 'block';
                 }else if(el.attributes.id.nodeValue === 'company'){
                    el.classList.add('active');
                    document.getElementById('$companies').style.display = 'block';
                    document.getElementById('$products').style.display = 'none';

                    // document.getElementById('$products').style.display = 'none';
                 }
             })
        });

}

links();

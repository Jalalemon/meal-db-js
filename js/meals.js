const loadMeals = () =>{
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data.meals))
    .catch(error => console.log(error))
}

const displayUsers = users =>{
// console.log(meals)
    const divContainer = document.getElementById('card-container');
    users.forEach(meal => {
    const postDiv = document.createElement('div');
        postDiv.classList.add('col');
        postDiv.innerHTML = `
             <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text text-warning text-bold">$: ${meal.idMeal}</p>
                        <button onclick="showModal('${meal.strMeal}','${meal.strMealThumb}')" class="btn btn-primary modal-button">Buy now</button>
                    </div>
                </div>
        `;
        divContainer.appendChild(postDiv);
    });

}
loadMeals ();

const showModal = (strMeal,strMealThumb) =>{
    console.log(strMeal, strMealThumb);
    const modalbody = document.getElementById('showModal');
   modalbody.innerHTML = `
   <p> ${meal.strMeal}</p>
   
   `
}
showModal();
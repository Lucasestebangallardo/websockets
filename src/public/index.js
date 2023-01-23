const socket = io();
socket.on('init-products', (products) => {
  const main = document.getElementById('tiemporeal');
  main.innerHTML = ' ';
  products.forEach((product) => {
    main.innerHTML +=  `<div class="card col-3 m-2 border border-4 id="${product.id}">
     <div class="card-body">
       <h5 class="card-title text-center">${product.title}</h5>
       <img src="${product.thumbnail}" class="card-img-top">
       <p class="card-text text-center">${product.description}</p>
       <h3 class="card-text text-center ">$ ${product.price}</h3>
       <p class="card-text text-center ">cantidad: ${product.stock}</p>
       <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary">Agregar</button>
       </div>
   </div>
  </div>`
  });
});

socket.on('delete-products'),(id)=>{
    const product = document.getElementById('id');
    product.remove
}

socket.on('add-products',(products)=>{
    const main = document.getElementById('tiemporeal');
    main.innerHTML = `<div class="card col-3 m-2 border border-4 id="${products.id}">
    <img src="" class="card-img-top" alt="">
     <div class="card-body">
       <h5 class="card-title text-center">${products.title}</h5>
       <img src="${products.thumbnail}" class="card-img-top">
       <p class="card-text text-center">${products.description}</p>
       <h3 class="card-text text-center ">$ ${products.price}</h3>
       <p class="card-text text-center ">cantidad: ${products.stock}</p>
       <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary">Agregar</button>
       </div>
      </div>`;
})
const productos = [
  {
    name: "Fifa 22",
    category: "ps4",
    pricePrincipal: "79.00",
    priceSecundaria: "Agotado",
    image: "https://i.postimg.cc/xdvxHDKM/Frame-18-9.jpg",
    description:
      "<li>Peso del Juego : 45 GB</li><li>Jugadores: 1-4</li><li>Instalacion : 1 Consola</li>"
  },
  {
    name: "Spider-Man Miles Morales",
    category: "ps5",
    pricePrincipal: "89.00",
    priceSecundaria: "Agotado",
    image: "https://i.ibb.co/svhyJWd/spiderman3.jpg",
    description:
      "<li>Peso del Juego : 53 GB</li><li>Jugadores: 1</li><li>Instalacion : 1 Consola</li>"
  },
  {
    name: "God Of War",
    category: "ps4",
    pricePrincipal: "39.00",
    priceSecundaria: "Agotado",
    image: "https://i.postimg.cc/wTCN2Vgd/gow.jpg",
    description:
      "<li>Peso del Juego : 40 GB</li><li>Jugadores: 1</li><li>Instalacion : 1 Consola</li>"
  },
  {
    name: "Devil May Cry 5",
    category: "ps5",
    pricePrincipal: "49.00",
    priceSecundaria: "Agotado",
    image: "https://i.postimg.cc/d0xwRWc2/dmc5.jpg",
    description:
      "<li>Peso del Juego : 32 GB</li><li>Jugadores: 1</li><li>Instalacion : 1 Consola</li>"
  },
  {
    name: "Crash Team Racing",
    category: "ps4",
    pricePrincipal: "39.00",
    priceSecundaria: "Agotado",
    image: "https://i.postimg.cc/7Yqx1JTZ/crashracing.jpg",
    description:
      "<li>Peso del Juego : 15 GB</li><li>Jugadores: 1-4</li><li>Instalacion : 1 Consola</li>"
  },
  {
    name: "God Of War Ragnarok",
    category: "ps5",
    pricePrincipal: "179.00",
    priceSecundaria: "Agotado",
    image: "https://i.ibb.co/mH97Db4/god-of-war.jpg",
    description:
      "<li>Peso del Juego : 190 GB</li><li>Jugadores: 1</li><li>Instalacion : 1 Consola</li>"
  },
  {
    name: "God Of War Ragnarok",
    category: "ps4",
    pricePrincipal: "139.00",
    priceSecundaria: "Agotado",
    image: "https://i.postimg.cc/7LhdM040/gowragnarok.jpg",
    description:
      "<li>Peso del Juego : 100 GB</li><li>Jugadores: 1</li><li>Instalacion : 1 Consola</li>"
  },
  {
    name: "Super mario 3D World",
    category: "nintendo",
    pricePrincipal: "159.00",
    priceSecundaria: "Agotado",
    image: "https://i.postimg.cc/G2K6RKbB/mario3dworld.jpg",
    description: "<li>Peso del Juego : 3 GB</li><li>Jugadores: 1-4</li><li>Instalacion : 1 Consola</li>"
  },
];

const cardsContainer = document.querySelector("#cards-container");

//metodo 2
function renderizarProductos(array) {
  for (producto of array) {
    const { name, pricePrincipal, priceSecundaria, image, description } =
      producto;

    const card = document.createElement("div");
    card.classList.add(
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "w-full",
      "max-w-lg",
      "mx-auto",
      "bg-white",
      "px-2",
      "py-2",
      "xl:px-4",
      "xl:py-4",
      "rounded-lg",
      "drop-shadow-md"
    );

    const div = document.createElement("div");

    const enlaceImg = document.createElement("a");
    enlaceImg.setAttribute(
      "href",
      `./detalleProducto.html?name=${name}&pricePrincipal=${pricePrincipal}&priceSecundaria=${priceSecundaria}&image=${image}&description=${description}`
    );

    const imagen = document.createElement("img");
    imagen.setAttribute("src", image);
    imagen.classList.add(
      "mx-auto",
      "object-cover",
      "h-36",
      "md:h-52",
      "xl:h-48",
      "ease-in-out",
      "duration-500",
      "hover:scale-105"
    );
    //imagen.addEventListener("click", openProductDetail.bind(this, producto));
    enlaceImg.appendChild(imagen);

    const contenedorNombre = document.createElement("div");
    contenedorNombre.classList.add(
      "flex",
      "items-center",
      "w-full",
      "h-[42px]",
      "xl:h-[50px]"
    );

    const nombre = document.createElement("h4");
    nombre.classList.add(
      "text-sm",
      "xl:text-base",
      "font-semibold",
      "text-gray-700"
    );
    nombre.innerText = name;
    contenedorNombre.appendChild(nombre);

    const precio = document.createElement("p");
    precio.classList.add("text-red-500", "font-bold");
    precio.innerText = "S/ " + pricePrincipal;

    const enlaceBoton = document.createElement("a");
    enlaceBoton.setAttribute(
      "href",
      `./detalleProducto.html?name=${name}&pricePrincipal=${pricePrincipal}&priceSecundaria=${priceSecundaria}&image=${image}&description=${description}`
    );
    enlaceBoton.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "w-full",
      "px-2",
      "py-1",
      "mt-2",
      "font-medium",
      "text-white",
      "bg-lime-400",
      "rounded-full",
      "hover:bg-lime-300",
      "hover:cursor-pointer"
    );

    const span = document.createElement("span");
    span.classList.add("mx-1", "text-sm");
    span.innerText = "Ver producto";
    enlaceBoton.appendChild(span);

    div.append(enlaceImg, contenedorNombre, precio, enlaceBoton);
    //div.append(imagen, contenedorNombre, precio, enlaceBoton);
    card.appendChild(div);
    cardsContainer.appendChild(card);
  }
}

renderizarProductos(productos);

//buscar productos
var inputBuscar = document.querySelector("#inputBuscar");
var btnBuscar = document.querySelector("#buscar");
inputBuscar.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      //buscarProducto();
      buscarProducto();
  }
});
btnBuscar.addEventListener("click", buscarProducto);
function buscarProducto() {
  //limpiar elementos creados
  document.getElementById("cardsBusqueda").innerHTML='';
  //obtenemos el valor del input
  var palabra = inputBuscar.value;
  //recorremos el array
  for (indice in productos) {
    //guardamos en item el indice de cada elemento del array
    var item = productos[indice];
    //guardamosel nombre de cada indice
    var name = item.name;
    var pricePrincipal = item.pricePrincipal;
    var priceSecundaria = item.priceSecundaria;
    var image = item.image;
    var description = item.description;

    if (palabra.length != 0 && name.length != 0) {
      if (name.toLowerCase().search(palabra.toLowerCase()) != -1) {
        const card = document.createElement("div");
        card.classList.add(
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "w-full",
          "max-w-lg",
          "mx-auto",
          "bg-white",
          "px-2",
          "py-2",
          "xl:px-4",
          "xl:py-4",
          "rounded-lg",
          "drop-shadow-md"
        );

        const div = document.createElement("div");

        const enlaceImg = document.createElement("a");
        enlaceImg.setAttribute(
          "href",
          `./detalleProducto.html?name=${name}&pricePrincipal=${pricePrincipal}&priceSecundaria=${priceSecundaria}&image=${image}&description=${description}`
        );

        const imagen = document.createElement("img");
        imagen.setAttribute("src", image);
        imagen.classList.add(
          "mx-auto",
          "object-cover",
          "h-36",
          "md:h-52",
          "xl:h-48",
          "ease-in-out",
          "duration-500",
          "hover:scale-105"
        );
        //imagen.addEventListener("click", openProductDetail.bind(this, producto));
        enlaceImg.appendChild(imagen);

        const contenedorNombre = document.createElement("div");
        contenedorNombre.classList.add(
          "flex",
          "items-center",
          "w-full",
          "h-[42px]",
          "xl:h-[50px]"
        );

        const nombre = document.createElement("h4");
        nombre.classList.add(
          "text-sm",
          "xl:text-base",
          "font-semibold",
          "text-gray-700"
        );
        nombre.innerText = name;
        contenedorNombre.appendChild(nombre);

        const precio = document.createElement("p");
        precio.classList.add("text-red-500", "font-bold");
        precio.innerText = "S/ " + pricePrincipal;

        const enlaceBoton = document.createElement("a");
        enlaceBoton.setAttribute(
          "href",
          `./detalleProducto.html?name=${name}&pricePrincipal=${pricePrincipal}&priceSecundaria=${priceSecundaria}&image=${image}&description=${description}`
        );
        enlaceBoton.classList.add(
          "flex",
          "items-center",
          "justify-center",
          "w-full",
          "px-2",
          "py-1",
          "mt-2",
          "font-medium",
          "text-white",
          "bg-lime-400",
          "rounded-full",
          "hover:bg-lime-300",
          "hover:cursor-pointer"
        );

        const span = document.createElement("span");
        span.classList.add("mx-1", "text-sm");
        span.innerText = "Ver producto";
        enlaceBoton.appendChild(span);

        div.append(enlaceImg, contenedorNombre, precio, enlaceBoton);
        //div.append(imagen, contenedorNombre, precio, enlaceBoton);
        card.appendChild(div);
        document.getElementById("cardsBusqueda").appendChild(card);
      }
    }
  }
}

//Categorias
function filtrarPorCategoria(categoria) {
  //limpiar elementos creados
  document.getElementById("cardsBusqueda").innerHTML='';
  //obtenemos el valor del input
  var palabra = categoria;
  console.log(palabra);
  //recorremos el array
  for (indice in productos) {
    //guardamos en item el indice de cada elemento del array
    var item = productos[indice];
    //guardamosel nombre de cada indice
    var name = item.name;
    var category = item.category;
    var pricePrincipal = item.pricePrincipal;
    var priceSecundaria = item.priceSecundaria;
    var image = item.image;
    var description = item.description;

    if (palabra.length != 0 && category.length != 0) {
      if (category.toLowerCase().search(palabra.toLowerCase()) != -1) {
        const card = document.createElement("div");
        card.classList.add(
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "w-full",
          "max-w-lg",
          "mx-auto",
          "bg-white",
          "px-2",
          "py-2",
          "xl:px-4",
          "xl:py-4",
          "rounded-lg",
          "drop-shadow-md"
        );

        const div = document.createElement("div");

        const enlaceImg = document.createElement("a");
        enlaceImg.setAttribute(
          "href",
          `./detalleProducto.html?name=${name}&pricePrincipal=${pricePrincipal}&priceSecundaria=${priceSecundaria}&image=${image}&description=${description}`
        );

        const imagen = document.createElement("img");
        imagen.setAttribute("src", image);
        imagen.classList.add(
          "mx-auto",
          "object-cover",
          "h-36",
          "md:h-52",
          "xl:h-48",
          "ease-in-out",
          "duration-500",
          "hover:scale-105"
        );
        //imagen.addEventListener("click", openProductDetail.bind(this, producto));
        enlaceImg.appendChild(imagen);

        const contenedorNombre = document.createElement("div");
        contenedorNombre.classList.add(
          "flex",
          "items-center",
          "w-full",
          "h-[42px]",
          "xl:h-[50px]"
        );

        const nombre = document.createElement("h4");
        nombre.classList.add(
          "text-sm",
          "xl:text-base",
          "font-semibold",
          "text-gray-700"
        );
        nombre.innerText = name;
        contenedorNombre.appendChild(nombre);

        const precio = document.createElement("p");
        precio.classList.add("text-red-500", "font-bold");
        precio.innerText = "S/ " + pricePrincipal;

        const enlaceBoton = document.createElement("a");
        enlaceBoton.setAttribute(
          "href",
          `./detalleProducto.html?name=${name}&pricePrincipal=${pricePrincipal}&priceSecundaria=${priceSecundaria}&image=${image}&description=${description}`
        );
        enlaceBoton.classList.add(
          "flex",
          "items-center",
          "justify-center",
          "w-full",
          "px-2",
          "py-1",
          "mt-2",
          "font-medium",
          "text-white",
          "bg-lime-400",
          "rounded-full",
          "hover:bg-lime-300",
          "hover:cursor-pointer"
        );

        const span = document.createElement("span");
        span.classList.add("mx-1", "text-sm");
        span.innerText = "Ver producto";
        enlaceBoton.appendChild(span);

        div.append(enlaceImg, contenedorNombre, precio, enlaceBoton);
        //div.append(imagen, contenedorNombre, precio, enlaceBoton);
        card.appendChild(div);
        document.getElementById("cardsBusqueda").appendChild(card);
      }
    }
  }
}

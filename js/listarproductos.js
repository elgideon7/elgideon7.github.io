const productos = [
  {
    name: "Spider-Man Miles Morales",
    category: "ps4",
    pricePrincipal: "89.00",
    priceSecundaria: "49.00",
    image: "https://i.ibb.co/svhyJWd/spiderman3.jpg",
    description:
      "Servicios:*Simple	20.00 S/.*Doble		40.00 S/.*Matrimonial	50.00 S/.Horario:*De domingo a Sábado* De 8.00am -3.00 pm",
  },
  {
    name: "COD Modern Warfare 2",
    category: "ps5",
    pricePrincipal: "129.00",
    priceSecundaria: "49.00",
    image: "https://i.ibb.co/DRJV0pW/call-of-duty.jpg",
    description:
      "<li>Voces: Español</li><li>Textos: Español</li><li>Peso del Juego : 53.84 GB</li><li>Requerido en Consola : 117.68 GB</li><li>instalacion : 1 Consola</li>",
  },
  {
    name: "God Of War Ragnarok",
    category: "ps5",
    pricePrincipal: "139.00",
    priceSecundaria: "49.00",
    image: "https://i.ibb.co/mH97Db4/god-of-war.jpg",
    description:
      "<li>Hazte con la edición Juego del Año y juega los capítulos de la historia de Marvels Spider-Man: La ciudad que nunca duerme, con misiones y desafíos adicionales, nuevas facciones de enemigos del universo de Spider-Man y trajes que desbloquear.</li>",
  },
  {
    name: "Perfil Netflix 1 mes",
    category: "streaming",
    pricePrincipal: "13.00",
    image: "https://i.ibb.co/FH4xL1k/netflix.jpg",
    description:
      "<li>Hazte con la edición Juego del Año y juega los capítulos de la historia de Marvels Spider-Man: La ciudad que nunca duerme, con misiones y desafíos adicionales, nuevas facciones de enemigos del universo de Spider-Man y trajes que desbloquear.</li>",
  },
  {
    name: "Super mario 3D World",
    category: "nintendo",
    pricePrincipal: "79.00",
    priceSecundaria: "49.00",
    image: "https://i.ibb.co/QNSkd2G/mortal-kombat.jpg",
    description: "hola"
  },
  {
    name: "Fifa 23",
    category: "pc",
    pricePrincipal: "129.00",
    priceSecundaria: "49.00",
    image: "https://i.ibb.co/D99Wrz3/fifa-23.jpg",
    description: "hola"
  },
  {
    name: "The Last Of Us",
    category: "ps5",
    pricePrincipal: "89.00",
    image: "https://i.ibb.co/ChtPL2W/the-last-of-us.jpg",
    description: "hola"
  },
  {
    name: "Dragon Ball FighterZ",
    category: "ps4",
    price: "35.00",
    image: "https://i.ibb.co/SyRV0P7/db-fighterz.jpg",
    description: "hola"
  },
  {
    name: "Fifa 22",
    category: "ps4",
    price: "89.00",
    image: "https://i.ibb.co/nfZQp1B/fifa-22.jpg",
    description: "hola"
  },
  {
    name: "Plants vs Zombies",
    category: "ps4",
    price: "39.00",
    image: "https://i.ibb.co/X8SLZ95/plants-vs-zombies.jpg",
    description: "hola"
  },
  {
    name: "Minicraft",
    category: "ps4",
    price: "39.00",
    image: "https://i.ibb.co/6wv1WT6/minicraft.jpg",
    description: "hola"
  },
  {
    name: "Crash Team Racing",
    category: "ps4",
    price: "29.00",
    image: "https://i.ibb.co/MCdS9mS/crash-team-racing.jpg",
    description: "hola"
  },
  {
    name: "God Of War Ragnarok",
    category: "ps4",
    pricePrincipal: "139.00",
    priceSecundaria: "49.00",
    image: "https://i.ibb.co/mH97Db4/god-of-war.jpg",
    description:
      "<li>Hazte con la edición Juego del Año y juega los capítulos de la historia de Marvels Spider-Man: La ciudad que nunca duerme, con misiones y desafíos adicionales, nuevas facciones de enemigos del universo de Spider-Man y trajes que desbloquear.</li>",
  },
  {
    name: "Mortal Kombat 11",
    category: "ps5",
    pricePrincipal: "79.00",
    priceSecundaria: "49.00",
    image: "https://i.ibb.co/QNSkd2G/mortal-kombat.jpg",
  },
  {
    name: "Fifa 23",
    category: "ps5",
    pricePrincipal: "129.00",
    priceSecundaria: "49.00",
    image: "https://i.ibb.co/D99Wrz3/fifa-23.jpg",
  },
  {
    name: "The Last Of Us",
    category: "ps5",
    pricePrincipal: "89.00",
    image: "https://i.ibb.co/ChtPL2W/the-last-of-us.jpg",
  },
  {
    name: "Dragon Ball FighterZ",
    category: "ps5",
    price: "35.00",
    image: "https://i.ibb.co/SyRV0P7/db-fighterz.jpg",
  },
  {
    name: "Fifa 22",
    category: "ps4",
    price: "89.00",
    image: "https://i.ibb.co/nfZQp1B/fifa-22.jpg",
  },
  {
    name: "Plants vs Zombies",
    category: "ps4",
    price: "39.00",
    image: "https://i.ibb.co/X8SLZ95/plants-vs-zombies.jpg",
  },
  {
    name: "Minicraft",
    category: "ps4",
    price: "39.00",
    image: "https://i.ibb.co/6wv1WT6/minicraft.jpg",
  },
  {
    name: "Crash Team Racing",
    category: "ps4",
    category: "pc",
    price: "29.00",
    image: "https://i.ibb.co/MCdS9mS/crash-team-racing.jpg",
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

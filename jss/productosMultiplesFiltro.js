function GetProductos() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('listado');

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            $lista.innerHTML = '';

            for (var p in json) {
                json[p].forEach((el) => {
                    $lista.innerHTML += `
                    <div class="tarjeta bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between items-center">
                        <img class="w-full h-auto object-cover rounded-lg mb-4" src="${el.img}" alt="${el.titulo}">
                        <h2 class="titulo text-2xl font-bold text-blue-600 capitalize mb-2">${el.titulo}</h2>
                        <p class="precio text-lg font-semibold text-green-500">
                          <span class="text-gray-500 font-medium">Precio:</span> $${el.precio}
                        </p>
                        <button class="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">Comprar</button>
                    </div>`;
                });
            }
        } else {
            $lista.innerHTML = `
            <div class="tarjeta">
                <h2>Error: no se encontraron datos</h2>
                <p>${xhr.status}: ${xhr.statusText}</p>
            </div>`;
        }
    });

    xhr.open("GET", '../jss/productosJuegos.json');
    xhr.send();
}

function BuscarProductos() {
    var desde = parseInt(document.getElementById('desde').value) || 0;
    var hasta = parseInt(document.getElementById('hasta').value) || Infinity;
    var cat = document.getElementById('categoria').value;

    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('listado');

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            $lista.innerHTML = '';
            let found = false;

            if (!cat) {
                for (const p in json) {
                    json[p].forEach((el) => {
                        if (desde <= el.precio && el.precio <= hasta) {
                            $lista.innerHTML += `
                            <div class="tarjeta bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between items-center">
                                <img class="w-full h-auto object-cover rounded-lg mb-4" src="${el.img}" alt="${el.titulo}">
                                <h2 class="titulo text-2xl font-bold text-blue-600 capitalize mb-2">${el.titulo}</h2>
                                <p class="precio text-lg font-semibold text-green-500">
                                  <span class="text-gray-500 font-medium">Precio:</span> $${el.precio}
                                </p>
                                <button class="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">Comprar</button>
                            </div>`;
                            found = true;
                        }
                    });
                }
            } else {
                json[cat]?.forEach((el) => {
                    if (desde <= el.precio && el.precio <= hasta) {
                        $lista.innerHTML += `
                        <div class="tarjeta bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between items-center">
                            <img class="w-full h-auto object-cover rounded-lg mb-4" src="${el.img}" alt="${el.titulo}">
                            <h2 class="titulo text-2xl font-bold text-blue-600 capitalize mb-2">${el.titulo}</h2>
                            <p class="precio text-lg font-semibold text-green-500">
                              <span class="text-gray-500 font-medium">Precio:</span> $${el.precio}
                            </p>
                            <button class="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">Comprar</button>
                        </div>`;
                        found = true;
                    }
                });
            }

            if (found) {
                $lista.classList.remove('hidden');
            } else {
                $lista.innerHTML = '<p>No se encontraron productos</p>';
                $lista.classList.remove('hidden');
            }
        } else {
            $lista.innerHTML = `
            <div class="tarjeta">
                <h2>Error: no se encontraron datos</h2>
                <p>${xhr.status}: ${xhr.statusText}</p>
            </div>`;
            $lista.classList.remove('hidden');
        }
    });

    xhr.open("GET", '../jss/productosJuegos.json');
    xhr.send();
}

document.addEventListener('DOMContentLoaded', GetProductos);
document.getElementById('buscar').addEventListener('click', BuscarProductos);
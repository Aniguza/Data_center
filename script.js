document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalFeatures = document.getElementById('modalFeatures');
    const closeModal = document.getElementsByClassName('close')[0];
    const applyFiltersButton = document.getElementById('applyFilters');
    const priceRangeMin = document.getElementById('priceRangeMin');
    const priceRangeMax = document.getElementById('priceRangeMax');
    const minPriceLabel = document.getElementById('minPriceLabel');
    const maxPriceLabel = document.getElementById('maxPriceLabel');
    const typeCheckboxes = document.querySelectorAll('input[name="type"]');

    const products = [
        {
            id: 1,
            img: "img/P112P110005.jpg",
            nombre: "UPS MONOF OFFLINE 230V 650VA 4H ENCHUFE IEC BACK-UPS AVR BX650LI",
            marca: "SCHNEIDER ELECTRIC",
            categoria: "Offline",
            precio: 329.04,
            potencia: "650VA",
            tension_salida: "230V",
            tension_entrada: "230VAC",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id: 2,
            img: "img/P1116QD0002.jpg",
            nombre: "UPS MONOF ONLINE SRV 230V CAB USB 3000VA 4H APC EASY SRV3KI",
            marca: "SCHNEIDER ELECTRIC",
            categoria: "Online",
            precio: 3716.86,
            potencia: "3000VA",
            tension_salida: "220-240V",
            tension_entrada: "230VAC",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id:3,
            img: "img/145324.jpg",
            nombre: "UPS 800VA(360W) CENTRALION BLAZER VISTA",
            marca: "Centralion",
            categoria: "Line-Interactive",
            precio: 400.00,
            potencia: "800VA",
            tension_salida: "220V",
            tension_entrada: "220V",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id:4,
            img: "img/14532480.jpg",
            nombre: "Ups Interactivo Elise Fase Aur-1000-lcd-usb 1000va / 600w",
            marca: "Elise",
            categoria: "Line-Interactive",
            precio: 605.00,
            potencia: "1000VA",
            tension_salida: "220 / 230 / 240V AC",
            tension_entrada: "220 / 230 / 240V AC",
            frecuencia: "45-55 Hz / 55 - 65 Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id: 5,
            img: "img/1453249090.jpg",
            nombre: "UPS Online APC Smart SRT3000XLI 3kVA 2.7kW 230V RJ45 Serial USB",
            marca: "SCHNEIDER ELECTRIC",
            categoria: "Online",
            precio: 6708.00,
            potencia: "3000VA",
            tension_salida: "230V",
            tension_entrada: "230V",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id: 6,
            img: "img/145324909012.jpg",
            nombre: "UPS OnLine Elise URT-3K 3000VA 2700W 230V USB RS232",
            marca: "ELICE",
            categoria: "Online",
            precio: 4934.00,
            potencia: "3000VA",
            tension_salida: "230V",
            tension_entrada: "230V",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id: 7,
            img: "img/1453249090579.jpg",
            nombre: "UPS Online Forza FDC-1002T 1000VA 800W AC 220V",
            marca: "FORZA",
            categoria: "Online",
            precio: 1467.00,
            potencia: "1000VA",
            tension_salida: "220V",
            tension_entrada: "220V",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id: 8,
            img: "img/1453241090579.jpg",
            nombre: "UPS Interactivo TrippLite SMX1500LCDT 1500VA 900W 8 Tomas",
            marca: "TRIPP-LITE",
            categoria: "Line-Interactive",
            precio: 862.00,
            potencia: "1500VA",
            tension_salida: "220V / 230V / 240V",
            tension_entrada: "230V",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id: 9,
            img: "img/P111CF20015.jpg",
            nombre: "UPS MONOF OFFLINE 120V CAB USB 3KVA/2.7KW TIPO TORRE 9103-80187",
            marca: "EATON",   
            categoria: "Offline",
            precio: 8622.94,
            potencia: "3000VA / 2700W",
            tension_salida: "120V",
            tension_entrada: "120V",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "UPS"
        },
        {
            id: 10,
            img: "img/8435325426365.jpg",
            nombre: "SAI OFF-LINE 1500VA/900W Entrada 220-240 Vac x4 Shcuko x2 RJ11 x1 USB tipo B x1 VGA",
            marca: "OEM",
            categoria: "Offline",
            precio: 614.97,
            potencia: "1500VA / 900W",
            tension_salida: "230V",
            tension_entrada: "220-240VAC",
            tipo: "UPS"
        },
        {
            id: 11,
            img: "img/FP800W.jpg",
            nombre: "Fuente De Poder Para Servidor Hpe 80plus Platinum 800w",
            marca: "HP",
            categoria: "ATX",
            precio: 550.71,
            potencia: "800W",
            tension_salida: "800W",
            tension_entrada: "100-240VAC",
            frecuencia: "Refrigeración por aire",
            numero_fases: "Monofásico",
            tipo: "Fuente de poder"
        },
        {
            id: 12,
            img: "img/FP1600W.jpg",
            nombre: "ASUS ROG Thor 1600W Titanium",
            marca: "ASUS",
            categoria: "ATX",
            precio: 672.99,
            potencia: "1600W",
            tension_salida: "1600W",
            tension_entrada: "110V",
            frecuencia: "Refrigeración por aire",
            numero_fases: "Monofásico",
            tipo: "Fuente de poder"
        },
        {
            id: 13,
            img: "img/FPRM1200X.jpg",
            nombre: "Corsair Fuente de alimentación ATX totalmente modular RM1200x Shift ",
            marca: "CORSAIR",
            categoria: "ATX,EPS",
            precio: 300.63,
            potencia: "1200W",
            tension_salida: "1200W",
            tension_entrada: "240V",
            frecuencia: "Refrigeración por aire",
            numero_fases: "Monofásico",
            tipo: "Fuente de poder"
        },
        {
            id: 14,
            img: "img/FP1200W.jpg",
            nombre: "Fuente Poder Dell Poweredge T710 R810 R910 R510 1100w Server",
            marca: "DELL",
            categoria: "L1100A-S0",
            precio: 664,
            potencia: "1100W",
            tension_salida: "1100W",
            tension_entrada: "100-240V, 12A-6.7A",
            frecuencia: "50/60Hz",
            numero_fases: "Monofásico",
            tipo: "Fuente de poder"
        }
    ];

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.nombre}">
            <h2>${product.nombre}</h2>
            <p>${product.marca}</p>
            <p>${product.tipo} - ${product.categoria}</p>
            <p>$${product.precio.toFixed(2)}</p>
        `;
        card.addEventListener('click', () => showModal(product));
        return card;
    }

    function displayProducts(productsToDisplay) {
        resultsContainer.innerHTML = '';
        if (productsToDisplay.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            productsToDisplay.forEach(product => {
                resultsContainer.appendChild(createProductCard(product));
            });
        }
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const minPrice = parseFloat(priceRangeMin.value);
        const maxPrice = parseFloat(priceRangeMax.value);
        const selectedTypes = Array.from(typeCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const filteredProducts = products.filter(product => {
            const matchesSearch = product.nombre.toLowerCase().includes(searchTerm) ||
                                  product.marca.toLowerCase().includes(searchTerm) ||
                                  product.tipo.toLowerCase().includes(searchTerm);
            const matchesPrice = product.precio >= minPrice && product.precio <= maxPrice;
            const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.tipo);

            return matchesSearch && matchesPrice && matchesType;
        });

        displayProducts(filteredProducts);
    }

    function showModal(product) {
        modalImage.src = product.img;
        modalImage.alt = product.nombre;
        modalTitle.textContent = product.nombre;
        modalDescription.textContent = `${product.marca} - ${product.categoria}`;
        modalPrice.textContent = `Precio: $${product.precio.toFixed(2)}`;
        modalFeatures.innerHTML = `
            <li>Potencia: ${product.potencia}</li>
            <li>Tensión de salida: ${product.tension_salida}</li>
            <li>Tensión de entrada: ${product.tension_entrada}</li>
            <li>Frecuencia: ${product.frecuencia}</li>
            <li>Número de fases: ${product.numero_fases}</li>
        `;
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    function hideModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    function updatePriceLabels() {
        minPriceLabel.textContent = `$${priceRangeMin.value}`;
        maxPriceLabel.textContent = `$${priceRangeMax.value}`;
    }

    function setMinMax() {
        if (parseInt(priceRangeMin.value) > parseInt(priceRangeMax.value)) {
            priceRangeMin.value = priceRangeMax.value;
        }
        updatePriceLabels();
        filterProducts();
    }

    // Mostrar todos los productos al cargar la página
    displayProducts(products);

    // Eventos para filtrar productos
    searchInput.addEventListener('input', filterProducts);
    applyFiltersButton.addEventListener('click', filterProducts);
    priceRangeMin.addEventListener('input', setMinMax);
    priceRangeMax.addEventListener('input', setMinMax);
    typeCheckboxes.forEach(checkbox => checkbox.addEventListener('change', filterProducts));

    closeModal.addEventListener('click', hideModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    // Inicializar las etiquetas de precio
    updatePriceLabels();
});
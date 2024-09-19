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
  const productTypeRadios = document.querySelectorAll('input[name="productType"]');
  const brandSelect = document.getElementById('brandSelect');
  const categorySelect = document.getElementById('categorySelect');

  const products = [
    {
      id: 1,
      img: "img/P112P110005.jpg",
      nombre:
        "UPS MONOF OFFLINE 230V 650VA 4H ENCHUFE IEC BACK-UPS AVR BX650LI",
      marca: "SCHNEIDER ELECTRIC",
      categoria: "Offline",
      precio: 329.04,
      potencia: "650VA",
      tension_salida: "230V",
      tension_entrada: "230VAC",
      frecuencia: "50/60Hz",
      numero_fases: "Monofásico",
      tipo: "UPS",
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
      tipo: "UPS",
    },
    {
      id: 3,
      img: "img/145324.jpg",
      nombre: "UPS 800VA(360W) CENTRALION BLAZER VISTA",
      marca: "Centralion",
      categoria: "Line-Interactive",
      precio: 400.0,
      potencia: "800VA",
      tension_salida: "220V",
      tension_entrada: "220V",
      frecuencia: "50/60Hz",
      numero_fases: "Monofásico",
      tipo: "UPS",
    },
    {
      id: 4,
      img: "img/14532480.jpg",
      nombre: "Ups Interactivo Elise Fase Aur-1000-lcd-usb 1000va / 600w",
      marca: "Elise",
      categoria: "Line-Interactive",
      precio: 605.0,
      potencia: "1000VA",
      tension_salida: "220 / 230 / 240V AC",
      tension_entrada: "220 / 230 / 240V AC",
      frecuencia: "45-55 Hz / 55 - 65 Hz",
      numero_fases: "Monofásico",
      tipo: "UPS",
    },
    {
      id: 5,
      img: "img/1453249090.jpg",
      nombre: "UPS Online APC Smart SRT3000XLI 3kVA 2.7kW 230V RJ45 Serial USB",
      marca: "SCHNEIDER ELECTRIC",
      categoria: "Online",
      precio: 6708.0,
      potencia: "3000VA",
      tension_salida: "230V",
      tension_entrada: "230V",
      frecuencia: "50/60Hz",
      numero_fases: "Monofásico",
      tipo: "UPS",
    },
    {
      id: 6,
      img: "img/145324909012.jpg",
      nombre: "UPS OnLine Elise URT-3K 3000VA 2700W 230V USB RS232",
      marca: "ELICE",
      categoria: "Online",
      precio: 4934.0,
      potencia: "3000VA",
      tension_salida: "230V",
      tension_entrada: "230V",
      frecuencia: "50/60Hz",
      numero_fases: "Monofásico",
      tipo: "UPS",
    },
    {
      id: 7,
      img: "img/1453249090579.jpg",
      nombre: "UPS Online Forza FDC-1002T 1000VA 800W AC 220V",
      marca: "FORZA",
      categoria: "Online",
      precio: 1467.0,
      potencia: "1000VA",
      tension_salida: "220V",
      tension_entrada: "220V",
      frecuencia: "50/60Hz",
      numero_fases: "Monofásico",
      tipo: "UPS",
    },
    {
      id: 8,
      img: "img/1453241090579.jpg",
      nombre: "UPS Interactivo TrippLite SMX1500LCDT 1500VA 900W 8 Tomas",
      marca: "TRIPP-LITE",
      categoria: "Line-Interactive",
      precio: 862.0,
      potencia: "1500VA",
      tension_salida: "220V / 230V / 240V",
      tension_entrada: "230V",
      frecuencia: "50/60Hz",
      numero_fases: "Monofásico",
      tipo: "UPS",
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
      tipo: "UPS",
    },
    {
      id: 10,
      img: "img/8435325426365.jpg",
      nombre:
        "SAI OFF-LINE 1500VA/900W Entrada 220-240 Vac x4 Shcuko x2 RJ11 x1 USB tipo B x1 VGA",
      marca: "OEM",
      categoria: "Offline",
      precio: 614.97,
      potencia: "1500VA / 900W",
      tension_salida: "230V",
      tension_entrada: "220-240VAC",
      tipo: "UPS",
    },
    {
        id: 11,
        img: "img/D3000702.jpg",
        nombre: "FUENTE TE7061 250W FORMATO FLEX-ATX",
        marca: "TEROS",
        precio: 48,
        tipo: "FUENTE DE PODER",
        categoria: "FLEX-ATX",
        modelo: "TE7061",
        certificacion: "",
        potencia: 250,
        dimensiones: "15.00 x 8.15 x 4.05 cm",
        ventilador: "Interno",
      },
      {
        id: 12,
        img: "img/017473.jpg",
        nombre: "FUENTE 750W COOLER MASTER MWE BRONZE V2 (MPE-7501-ACABW-BUS) 80PLUS BRONZE",
        marca: "COOLER MASTER",
        precio: 368,
        tipo: "FUENTE DE PODER",
        categoria: "ATX",
        modelo: "MWE BRONZE V2",
        certificacion: "Bronze 80 PLUS",
        potencia: 750,
        dimensiones: "140 x 150 x 86 mm",
        ventilador: "120 mm",
      },
      {
        "id": 13,
        "img": "img/CF000202.jpg",
        "nombre": "Fuente de alimentación Gigabyte P650G (US), 650W, 80 PLUS Gold Certified, Formato ATX",
        "marca": "GIGABYTE",
        "precio": 294,
        "tipo": "FUENTE DE PODER",
        "categoria": "ATX",
        "modelo": "",
        "certificacion": "80 PLUS Gold",
        "potencia": 650,
        "dimensiones": "14.00 x 15.00 x 8.60 cm",
        "ventilador": "12 cm (Hydraulic Bearing)"
      },
      {
        "id": 14,
        "img": "img/D2000602.jpg",
        "nombre": "Fuente de alimentación MSI MAG A550BN, 550W, 80 PLUS Bronze Certified, Formato ATX",
        "marca": "MSI",
        "precio": 218.50,
        "tipo": "FUENTE DE PODER",
        "categoria": "ATX",
        "modelo": "",
        "certificacion": "80 PLUS Bronze",
        "potencia": 550,
        "dimensiones": "14.00 x 15.00 x 8.60 cm",
        "ventilador": "12 cm (Cojinete de manguito)",
      },
      {
        "id": 15,
        "img": "img/CD000102.jpg",
        "nombre": "Fuente de alimentación CERTIFICADA Teros TE7160, ATX, 600W, 80 Plus Bronce, 100V - 240VAC",
        "marca": "TEROS",
        "precio": 153,
        "tipo": "FUENTE DE PODER",
        "categoria": "ATX",
        "modelo": "TE-7160WBRZ",
        "certificacion": "80 PLUS Bronze",
        "potencia": 600,
        "dimensiones": "14.00 x 15.00 x 8.60 cm",
        "ventilador": "12 cm",
      },
      {
        "id": 16,
        "img": "img/016974.jpg",
        "nombre": "FUENTE 1000W ANTRYX KIRIN GOLD EVO II (CSZ1000V5) 80 PLUS GOLD MODULAR",
        "marca": "ANTRYX",
        "precio": 679,
        "tipo": "FUENTE DE PODER",
        "categoria": "ATX",
        "modelo": "KIRIN GOLD EVO II",
        "certificacion": "80 PLUS Gold",
        "potencia": 1000,
        "dimensiones": "150 x 150 x 86 mm",
        "ventilador": "120 mm",
      },
      {
        "id": 17,
        "img": "img/017480.jpg",
        "nombre": "FUENTE 750W DEEPCOOL PK750D (R-PK750D-FA0B-US) 80 PLUS BRONZE",
        "marca": "DEEPCOOL",
        "precio": 269,
        "tipo": "FUENTE DE PODER",
        "categoria": "ATX",
        "modelo": "PK750D",
        "certificacion": "80 PLUS Bronze",
        "potencia": 750,
        "dimensiones": "",
        "ventilador": "120 mm",
      },
      {
        "id": 18,
        "img": "img/016151.jpg",
        "nombre": "FUENTE 1200W CORSAIR HX1200 (CP-9020140) 80 PLUS PLATINUM FULL MODULAR",
        "marca": "CORSAIR",
        "precio": 1146,
        "tipo": "FUENTE DE PODER",
        "caracteristica": "ATX",
        "modelo": "HX1200",
        "certificacion": "80 PLUS Platinum",
        "potencia": 1200,
        "dimensiones": "",
        "ventilador": "Zero RPM Fan Mode",
      },
      {
        "id": 19,
        "img": "img/014359.jpg",
        "nombre": "FUENTE 1000W GIGABYTE UD1000GM (GP-UD1000GM) 80 PLUS GOLD",
        "marca": "GIGABYTE",
        "precio": 828,
        "tipo": "FUENTE DE PODER",
        "caracteristica": "ATX",
        "modelo": "UD1000GM",
        "certificacion": "80 PLUS Gold",
        "potencia": 1000,
        "dimensiones": "",
        "ventilador": "120 mm (Cojinete hidráulico HYB)",
      },
      {
        "id": 20,
        "img": "img/014496.jpg",
        "nombre": "FUENTE 1250W COOLER MASTER MWE V2 (MPE-C501-AFCAG-U2) 80 PLUS GOLD FULL MODULAR",
        "marca": "COOLER MASTER",
        "precio": 1234,
        "tipo": "FUENTE DE PODER",
        "caracteristica": "ATX",
        "modelo": "MWE V2",
        "certificacion": "80 PLUS Gold",
        "potencia": 1250,
        "dimensiones": "180 x 150 x 86 mm",
        "ventilador": "140 mm",
      },
      {
        "id": 21,
        "img": "img/13GE-DT5.jpg",
        "nombre": "FUENTE DE PODER AT",
        "marca": "",
        "precio": 0,
        "tipo": "FUENTE DE PODER",
        "caracteristica": "AT",
        "modelo": "",
        "certificacion": "",
        "potencia": 0,
        "dimensiones": "",
        "ventilador": "",
      }
  ];

  function updateSelectOptions(productType) {
    const filteredProducts = productType === 'Todos' ? products : products.filter(p => p.tipo === productType);
    
    const brands = [...new Set(filteredProducts.map(product => product.marca))];
    const categories = [...new Set(filteredProducts.map(product => product.categoria))];

    brandSelect.innerHTML = '<option value="">Seleccionar marca</option>';
    categorySelect.innerHTML = '<option value="">Seleccionar categoría</option>';

    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

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
    const selectedProductType = document.querySelector('input[name="productType"]:checked').value;
    const selectedBrand = brandSelect.value;
    const selectedCategory = categorySelect.value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.nombre.toLowerCase().includes(searchTerm) ||
                              product.marca.toLowerCase().includes(searchTerm) ||
                              product.tipo.toLowerCase().includes(searchTerm);
        const matchesPrice = product.precio >= minPrice && product.precio <= maxPrice;
        const matchesType = selectedProductType === 'Todos' || product.tipo === selectedProductType;
        const matchesBrand = selectedBrand === "" || product.marca === selectedBrand;
        const matchesCategory = selectedCategory === "" || product.categoria === selectedCategory;

        return matchesSearch && matchesPrice && matchesType && matchesBrand && matchesCategory;
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

// Inicializar las opciones de los selects
updateSelectOptions('Todos');

// Mostrar todos los productos al cargar la página
displayProducts(products);

// Eventos para filtrar productos
searchInput.addEventListener('input', filterProducts);
applyFiltersButton.addEventListener('click', filterProducts);
priceRangeMin.addEventListener('input', setMinMax);
priceRangeMax.addEventListener('input', setMinMax);
productTypeRadios.forEach(radio => radio.addEventListener('change', function() {
    updateSelectOptions(this.value);
    filterProducts();
}));
brandSelect.addEventListener('change', filterProducts);
categorySelect.addEventListener('change', filterProducts);

closeModal.addEventListener('click', hideModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});

// Inicializar las etiquetas de precio
updatePriceLabels();
});
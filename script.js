document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalFeatures = document.getElementById('modalFeatures');
    const closeModal = document.getElementsByClassName('close')[0];

    // Datos de ejemplo (en una aplicación real, estos vendrían de una base de datos o API)
    const products = [
        { 
            id: 1, 
            type: 'UPS', 
            brand: 'APC', 
            model: 'Back-UPS Pro 1500', 
            price: 199.99,
            description: 'UPS de alto rendimiento para equipos de oficina y gaming.',
            features: ['1500VA / 900W', 'Regulación automática de voltaje (AVR)', '10 tomas de corriente', 'Puerto USB']
        },
        { 
            id: 2, 
            type: 'Fuente de poder', 
            brand: 'Corsair', 
            model: 'RM750x', 
            price: 129.99,
            description: 'Fuente de poder modular de alta eficiencia para PC de gama alta.',
            features: ['750W', '80 PLUS Gold', 'Totalmente modular', 'Ventilador de 135mm']
        },
        { 
            id: 3, 
            type: 'UPS', 
            brand: 'CyberPower', 
            model: 'CP1500PFCLCD', 
            price: 219.99,
            description: 'UPS de onda sinusoidal pura con pantalla LCD.',
            features: ['1500VA / 1000W', 'Factor de potencia de 0.9', 'Pantalla LCD multifunción', '12 tomas de corriente']
        },
        { 
            id: 4, 
            type: 'Fuente de poder', 
            brand: 'EVGA', 
            model: 'SuperNOVA 650 G5', 
            price: 109.99,
            description: 'Fuente de poder compacta y eficiente para sistemas de gama media.',
            features: ['650W', '80 PLUS Gold', 'Totalmente modular', 'Modo ECO']
        },
        { 
            id: 5, 
            type: 'UPS', 
            brand: 'Tripp Lite', 
            model: 'SMART1500LCDT', 
            price: 189.99,
            description: 'UPS interactivo con pantalla LCD y puerto USB.',
            features: ['1500VA / 900W', 'Regulación automática de voltaje (AVR)', 'Pantalla LCD', '10 tomas de corriente']
        }
    ];

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${product.brand} ${product.model}</h2>
            <p>${product.type}</p>
            <p>$${product.price.toFixed(2)}</p>
        `;
        card.addEventListener('click', () => showModal(product));
        return card;
    }

    function displayAllProducts() {
        resultsContainer.innerHTML = '';
        products.forEach(product => {
            resultsContainer.appendChild(createProductCard(product));
        });
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.brand.toLowerCase().includes(searchTerm) ||
            product.model.toLowerCase().includes(searchTerm) ||
            product.type.toLowerCase().includes(searchTerm)
        );

        resultsContainer.innerHTML = '';
        if (filteredProducts.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            filteredProducts.forEach(product => {
                resultsContainer.appendChild(createProductCard(product));
            });
        }
    }

    function showModal(product) {
        modalTitle.textContent = `${product.brand} ${product.model}`;
        modalDescription.textContent = product.description;
        modalPrice.textContent = `Precio: $${product.price.toFixed(2)}`;
        modalFeatures.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });
        modal.classList.remove('hidden');
    }

    // Mostrar todos los productos al cargar la página
    displayAllProducts();

    // Filtrar productos mientras el usuario escribe
    searchInput.addEventListener('input', filterProducts);

    closeModal.addEventListener('click', () => modal.classList.add('hidden'));
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
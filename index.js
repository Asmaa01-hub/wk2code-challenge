const listContainer = document.getElementById("items_list");
const itemInput = document.querySelector("#item_input");

let shoppingItems = [];

function renderItems() {
    listContainer.innerHTML = ''; // Clear previous items
    shoppingItems.forEach(item => {
        const itemElement = document.createElement("li");
        
        // Check if item is purchased to apply CSS classes and disable button
        const purchasedClass = item.isPurchased ? 'isPurchased' : '';
        const btnDisabled = item.isPurchased ? 'disabled' : '';

        itemElement.innerHTML = `
            <div>
                <p class="${purchasedClass}">${item.name}</p>
                <button class="${btnDisabled}" onclick="togglePurchased('${item.name}')">
                    ${item.isPurchased ? 'Purchased' : 'Purchase'}
                </button>
            </div>
        `;
        listContainer.appendChild(itemElement);
    });
}

function addItem() {
    const value = itemInput.value.trim();
    if (value) {
        shoppingItems.push({
            name: value,
            isPurchased: false
        });
        itemInput.value = ""; // Reset input value
        renderItems();
    }
}

function clearList() {
    shoppingItems = [];
    renderItems();
}

function togglePurchased(itemName) {
    const item = shoppingItems.find(product => product.name === itemName);
    if (item) {
        item.isPurchased = !item.isPurchased;
        renderItems();
    }
}
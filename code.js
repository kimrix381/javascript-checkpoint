const items = document.querySelectorAll(".card-body");
const totalPriceElement = document.querySelector(".total");

function updateTotal() {
  let total = 0;
  items.forEach((item) => {
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    const unitPrice = parseFloat(
      item.querySelector(".unit-price").textContent.replace("$", "")
    );
    total += quantity * unitPrice;
  });
  totalPriceElement.textContent = `${total} $`;
}

items.forEach((item) => {
  const plusButton = item.querySelector(".fa-plus-circle");
  const minusButton = item.querySelector(".fa-minus-circle");
  const deleteButton = item.querySelector(".fa-trash-alt");
  const likeButton = item.querySelector(".fa-heart");
  const quantityElement = item.querySelector(".quantity");

  plusButton.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = ++quantity;
    updateTotal();
  });

  minusButton.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = --quantity;
      updateTotal();
    }
  });

  deleteButton.addEventListener("click", () => {
    item.parentElement.remove();
    updateTotal();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
  });
});

const style = document.createElement("style");
style.textContent = `
  .fa-heart.liked {
    color: red;
  }
`;
document.head.appendChild(style);

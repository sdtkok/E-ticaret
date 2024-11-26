// Veriyi Apı dan alan fonksiyon
export const fetchProducts = async () => {
    try {
        // Apı a istel at 
        const response = await fetch("db.json");
        //console.log(response);
        // Hata durumunu kotrol et
        if (!response.ok) {
            // Hata varsa hata fırlat
            throw new Error("URL Yanlış");
        }
        // Hata Yoksa veriyi return et
        return await response.json();
    } catch (error) {
        // Hata varsa bunu console a yazdır
        console.error(error);
        return [];
    }
};

// Ürünleri render eden fonksiyon
export const renderProducts = (products, addToCartCallBack) => {
    // Html den ürünlerin listeneceği kısmı seç 
    const productList = document.querySelector("#productList");
    // Ürünleri Ekrana bas
    // Html deki productsListin içeriğini dön 
    productList.innerHTML = products.map((product) => `
     <div class="product">
            <img width="200" 
            src="${product.image}" class="product-img"alt="product-img">
            <div class="product-info">
              <h2 class="product-title">${product.title}</h2>
              <p class="product-price">$${product.price}</p>
              <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
            </div>
    </div>
    ` )
    .join("");

    // add to cart butonlarına eriş
    const addToCartButtons = document.getElementsByClassName("add-to-cart");
    // console.log(addToCartButtons);
    // Her bir add to cart butonuna tıklanma olayı ekleniyor
    for(let i= 0; i<addToCartButtons.length; i++){
        const addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener("click",addToCartCallBack);
    }

};
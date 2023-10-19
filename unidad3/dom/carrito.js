window.onload = () => {
    var data = [
        { id: 1, name: "Chillorio", price: 50.00, img: "chilorio.jpeg" },
        { id: 2, name: "Enchilada", price: 75.00, img: "enchilada.jpeg" },
        { id: 3, name: "Tortilla española", price: 60.00, img: "tortilla_espanola.jpeg" },
        { id: 4, name: "Tamal", price: 15.00, img: "tamal.jpeg" },
        { id: 5, name: "Omelet", price: 80.00, img: "omelet.jpeg" }
    ];
    var dataPedido = [];

    var lista = document.querySelector("#listaProductos");
    var pedido = document.querySelector("#pedido");

    var todo = "";
    data.forEach((item) => {
        todo += `<div class="product">
                    <div class="img">
                        <img src="./img/${item.img}" alt="">
                    </div>
                    <div class="data">
                        <h2>${item.name}</h2>
                        <h6 class="price">$${item.price}</h6>
                        <button type="button" class="btnComprar" data-index="${item.id - 1}">Comprar</button>
                    </div>
                </div>`
    })
    lista.innerHTML = todo;
    var buttons = document.querySelectorAll(".btnComprar")
    buttons.forEach((btn) => btn.addEventListener('click', (evt) => {
        let i = evt.target.dataset.index;
        dataPedido.push(data[i]);
        printPedido();
    }))
    let printPedido = () => {
        todo = "";
        let total = 0;
        dataPedido.forEach((item) => {
            todo += `<div class="product">
                        <div class="img">
                            <img src="./img/${item.img}" alt="">
                        </div>
                        <div class="data">
                            <h2>${item.name}</h2>
                            <h6 class="price">$${item.price}</h6>
                            <button type="button" class="btnComprar" data-index="${item.id - 1}">Comprar</button>
                        </div>
                    </div>`
                    total+=item.price;
        });
        pedido.innerHTML = todo;
        document.querySelector("#total").innerHTML="Total: $"+total.toFixed(2);
    }
}
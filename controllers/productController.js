const productController = {
    detalle: (req,res) => {
        res.send("Bienvenidos al detalle del producto " + req.params.idProduct);
    }
}

module.exports = productController;
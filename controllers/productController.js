const productController = {
    detalle: (req,res) => {
        res.render("Bienvenidos al detalle del producto " + req.params.idProduct);
    }
}

module.exports = productController;
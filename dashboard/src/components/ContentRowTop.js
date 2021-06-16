import React, {useEffect,useState} from 'react';
import imagenFondo from '../assets/images/pintura.png'

function ContentRowTop(){
	const urlProduct = "/api/product"
	const urlUsers = "/api/users"
	const [products,setProducts] = useState()
	const [users,setUsers] = useState()
	let [lastProduct, setLastProduct] = useState() 

const fetchApi =  async () => {
	const response1= await fetch(urlProduct);
	const response1JSON = await response1.json();
	setProducts(response1JSON);
	const response2= await fetch(urlUsers);
	const response2JSON = await response2.json();
	setUsers(response2JSON);
	let id = (response1JSON.data.length - 1)
	let lastProductTest = response1JSON.data[id]
	console.log(lastProductTest);
	setLastProduct(response1JSON.data[id]);
}
useEffect(() => {
	fetchApi();
},


[])
	
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard Hecho a Mano</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">

						{/*<!-- Movies in Data Base -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Productos</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{ !products ? 'Cargando...' : products.data.length}</div>
										</div>
			
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Total awards -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total de Usuarios</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{!users ? 'Cargando...' : users.data.length}</div>
										</div>
									
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Actors quantity -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de Categorías
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">6</div>
										</div>
						
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
								</div>
								<div className="card-body">
									<p>{!lastProduct ? 'Cargando...' : lastProduct.name}</p>
									<p>{!lastProduct ? 'Cargando...' : lastProduct.description}</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de Producto</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						
				<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Accesorios
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Ropa y calzado
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Arte
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Hogar
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Juegos
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Cosmética
												</div>
											</div>
										</div>
										

									</div>

									
								</div>
							</div>
						</div>	
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Productos</h5> 
							</div>
								<div className="card-body">
								<div className="row">
												{!products ? 'Cargando...' : products.data.map((products,index)=> {
													return <div className="col-lg-6 mb-4">
														<div className="card bg-dark text-white shadow">
														<div className="card-body">{products.name}</div>
													</div>
									</div>})}
								</div>		
							</div>	
							
						</div>

					</div>
				</div>		
</div>
        </React.Fragment>
    )

}
export default ContentRowTop;
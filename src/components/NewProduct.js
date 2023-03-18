import './NewProduct.css';
import ProductForm from './ProductForm';
function NewProduct(prop){
    
    function saveProduct(){
        console.log("i am inside new product");
        console.log(product);

        //calling parent function
        prop.printProduct(product)
    }
return(<div className='new-product'>
 {/* putting form into NewProduct */}
    <ProductForm onsaveProduct={saveProduct}></ProductForm>

</div>)
}

export default NewProduct;
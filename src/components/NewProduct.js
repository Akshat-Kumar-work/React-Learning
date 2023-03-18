import './NewProduct.css';
import ProductForm from './ProductForm';
function NewProduct(){
    
    function saveProduct(){
        console.log("i am inside new product");
        

        //calling parent function
       // prop.printProduct(product)
    }
return(<div className='new-product'>
 {/* putting form into NewProduct */}
    <ProductForm ></ProductForm>

</div> )
}

export default NewProduct;
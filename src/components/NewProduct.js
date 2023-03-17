import './NewProduct.css';
import ProductForm from './ProductForm';
function NewProduct(){
return(<div className='new-product'>
 {/* putting form into NewProduct */}
    <ProductForm></ProductForm>
</div>)
}

export default NewProduct;
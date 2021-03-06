import React from 'react'
import Product from '../Product/Product'

const ComparedProducts = (props) => {
    return (
        <div className="comparedProducts">
            {props.products.map(product => {
                if (product.chosen === true) {
                    return (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            img={product.image}
                            priceFrom={product.priceFrom}
                            new={product.new}
                            renderComparedProducts={props.renderComparedProducts}
                        />
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default ComparedProducts;
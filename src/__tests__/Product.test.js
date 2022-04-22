import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { EditProductForm } from '../Components/Products/EditProductForm';

test('renders product', () => {

    const product = {

        productName: 'test',
        description: 'test test test',
        price: 21,
        imageLink: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        stockRemaining: 234


    }
    render(<MemoryRouter><EditProductForm product={product} /></MemoryRouter>);

    const productName = screen.getByLabelText("Name");
    const description = screen.getByPlaceholderText("Description");
    const price = screen.getByPlaceholderText("Price");
    const stockRemaining = screen.getByPlaceholderText("Stock Remaining");
    const imageLink = screen.getByPlaceholderText("Image Link");

    expect(productName).toBeInTheDocument();
    expect(productName).toHaveValue(product.productName);

    expect(description).toBeInTheDocument();
    expect(description).toHaveValue(product.description);

    expect(price).toBeInTheDocument();
    expect(price).toHaveValue(product.price);

    expect(imageLink).toBeInTheDocument();
    expect(imageLink).toHaveAttribute('src', product.imageLink);

    expect(stockRemaining).toBeInTheDocument();
    expect(stockRemaining).toHaveValue(product.stockRemaining);

});

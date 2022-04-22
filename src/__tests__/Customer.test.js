import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {AccountDetails} from '../Components/Customers/AccountDetails';

test('renders customer', () => {

  const customer = {
    id: '123',
    email: 'test@test.com',
    firstName: 'test',
    lastName: 'test',
    imageLink: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'


  }
  render(<MemoryRouter><AccountDetails customer={customer} /></MemoryRouter>);

  const email = screen.getByLabelText("Email");
  const firstName = screen.getByPlaceholderText("First name");
  const lastName = screen.getByPlaceholderText("Last name");
  const imageLink = screen.getByAltText("customer-avatar");

  expect(email).toBeInTheDocument();
  expect(email).toHaveValue(customer.email);

  expect(firstName).toBeInTheDocument();
  expect(firstName).toHaveValue(customer.firstName);

  expect(lastName).toBeInTheDocument();
  expect(lastName).toHaveValue(customer.lastName);
  
  expect(imageLink).toBeInTheDocument();
  expect(imageLink).toHaveAttribute('src', customer.imageLink);
});

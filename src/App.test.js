import { act, render, screen } from '@testing-library/react';
import App from './App';
import { CartProvider, useCart } from './context/cartContext';

beforeEach(() => localStorage.clear());

test('renders the storefront with navigation', () => {
  render(<App />);
  expect(screen.getByText(/save 40% on delivery/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link').length).toBeGreaterThan(3);
});

function CartProbe() {
  const { cart, setCart } = useCart();
  return (
    <button onClick={() => setCart([...cart, { id: 1, name: 'Pina LED Table Lamp', price: 18.15 }])}>
      items: {cart.length}
    </button>
  );
}

test('cart survives a reload via localStorage', () => {
  const { unmount } = render(<CartProvider><CartProbe /></CartProvider>);
  act(() => screen.getByRole('button').click());
  expect(screen.getByRole('button')).toHaveTextContent('items: 1');
  unmount();

  render(<CartProvider><CartProbe /></CartProvider>); // fresh provider = page reload
  expect(screen.getByRole('button')).toHaveTextContent('items: 1');
});

test('corrupt saved cart falls back to empty', () => {
  localStorage.setItem('brightworld-cart', '{not json');
  render(<CartProvider><CartProbe /></CartProvider>);
  expect(screen.getByRole('button')).toHaveTextContent('items: 0');
});

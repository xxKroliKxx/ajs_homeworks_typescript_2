import Cart from '../service/Cart';
import Book from "../domain/Book";

test('amountWithoutDiscount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
    expect(cart.amountWithoutDiscount()).toBe(2000);
});

test('amountWithoutDiscount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
    expect(cart.amountWithDiscount(10)).toBe(1800);
});

test('deleteItem findIndex', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
    cart.deleteItem(1001)
    expect(cart.items.length).toBe(0);
});

test('deleteItem unfindIndex', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
    cart.deleteItem(1002)
    expect(cart.items.length).toBe(1);
});
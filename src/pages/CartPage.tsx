import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
import { useLocale } from '../context/LocaleContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './CartPage.css';

const CartPage: React.FC = () => {
  const { t } = useLocale();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalDiscount = cartItems.reduce((sum, item) => {
    if (item.oldPrice) {
      return sum + (item.oldPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const originalSubtotal = cartItems.reduce(
    (sum, item) => sum + (item.oldPrice ?? item.price) * item.quantity,
    0
  );
  const shippingEstimate = subtotal > 100 ? 0 : 9.99;
  const estimatedTotal = subtotal + shippingEstimate;

  return (
    <>
      <Header />
      <main className="cart-page">
        <div className="container">
          <div className="cart-page-header">
            <h1>{t('shoppingCart')}</h1>
            <Link to="/" className="back-link">
              {t('continueShopping')}
            </Link>
          </div>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>{t('cartEmpty')}</p>
              <Link to="/" className="cart-empty-btn">
                {t('startShopping')}
              </Link>
            </div>
          ) : (
            <div className="cart-content">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      {(item.selectedColor || item.selectedSize) && (
                        <div className="cart-item-variants">
                          {item.selectedColor && (
                            <span className="cart-item-variant">
                              {t('color')}: <strong>{item.selectedColor}</strong>
                            </span>
                          )}
                          {item.selectedSize && (
                            <span className="cart-item-variant">
                              {t('size')}: <strong>{item.selectedSize}</strong>
                            </span>
                          )}
                        </div>
                      )}
                      <div className="cart-item-price">
                        {item.oldPrice ? (
                          <>
                            <span className="cart-item-original">${item.oldPrice.toFixed(2)}</span>
                            <span className="cart-item-sale">${item.price.toFixed(2)}</span>
                            <span className="cart-item-savings">
                              {t('youSave')} ${((item.oldPrice - item.price) * item.quantity).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span>${item.price.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="cart-item-actions">
                        <div className="quantity-control">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <HiOutlineMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <HiOutlinePlus />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => removeFromCart(item.cartItemId)}
                          aria-label="Remove item"
                        >
                          <HiOutlineTrash />
                          {t('remove')}
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h2>{t('orderSummary')}</h2>
                {totalDiscount > 0 && (
                  <div className="summary-row summary-discount">
                    <span>{t('discount')}</span>
                    <span className="discount-amount">-${totalDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span>{t('subtotal')}</span>
                  <span>
                    {totalDiscount > 0 && (
                      <span className="summary-original">${originalSubtotal.toFixed(2)} </span>
                    )}
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="summary-row">
                  <span>{t('shipping')}</span>
                  <span>{shippingEstimate === 0 ? t('free') : `$${shippingEstimate.toFixed(2)}`}</span>
                </div>
                <div className="summary-row summary-total">
                  <span>{t('estimatedTotal')}</span>
                  <span>${estimatedTotal.toFixed(2)}</span>
                </div>
                {subtotal < 100 && (
                  <p className="free-shipping-note">
                    {t('addMoreForFreeShipping', { amount: (100 - subtotal).toFixed(2) })}
                  </p>
                )}
                <button type="button" className="checkout-btn">
                  {t('proceedToCheckout')}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;

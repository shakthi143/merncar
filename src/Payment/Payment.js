import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment-page">
      <div className="iphone">
        <header className="header">
          <h1>Checkout</h1>
        </header>

        <form className="form">
          <div>
            <h2>Address</h2>
            <div className="card">
              <address>
                Adam Johnson<br />
                403 Oakland Ave Street, A city, Florida, 32104,<br />
                United States of America
              </address>
            </div>
          </div>

          <fieldset>
            <legend>Payment Method</legend>
            <div className="form__radios">
              <div className="form__radio">
                <label htmlFor="visa">
                  <svg className="icon">
                    <use xlinkHref="#icon-visa" />
                  </svg>Visa Payment
                </label>
                <input checked id="visa" name="payment-method" type="radio" />
              </div>
              <div className="form__radio">
                <label htmlFor="paypal">
                  <svg className="icon">
                    <use xlinkHref="#icon-paypal" />
                  </svg>PayPal
                </label>
                <input id="paypal" name="payment-method" type="radio" />
              </div>
              <div className="form__radio">
                <label htmlFor="mastercard">
                  <svg className="icon">
                    <use xlinkHref="#icon-mastercard" />
                  </svg>Master Card
                </label>
                <input id="mastercard" name="payment-method" type="radio" />
              </div>
            </div>
          </fieldset>

          <div>
            <h2>Shopping Bill</h2>
            <table>
              <tbody>
                <tr>
                  <td>Shipping fee</td>
                  <td align="right">$5.43</td>
                </tr>
                <tr>
                  <td>Discount 10%</td>
                  <td align="right">-$1.89</td>
                </tr>
                <tr>
                  <td>Price Total</td>
                  <td align="right">$84.82</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td align="right">$88.36</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <Link to="/" className="button button--full">
              <svg className="icon">
                <use xlinkHref="#icon-shopping-bag" />
              </svg>Buy Now
            </Link>
          </div>
        </form>

        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol id="icon-shopping-bag" viewBox="0 0 24 24">
            <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
          </symbol>

          <symbol id="icon-mastercard" viewBox="0 0 504 504">
            {/* SVG path data here */}
          </symbol>
          {/* Other symbols here */}
        </svg>
      </div>
    </div>
  );
}

export default Payment;
import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div 
      className='cart-icon-container' 
      onClick={toggleIsCartOpen}
      style={{
        width: '45px',
        height: '45px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <ShoppingIcon 
        className='shopping-icon'
        style={{
          width: '24px',
          height: '24px',
        }}
      />
      <span 
        className='item-count'
        style={{
          position: 'absolute',
          fontSize: '10px',
          fontWeight: 'bold',
          bottom: '12px',
        }}
      >
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;

import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../firebase/firebase';



const Navbar = () => {
    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);

    // Sign out user
    const signOutHandler = () => signOutUser();

    return (
      <Fragment>
        <nav className='flex justify-between pl-5 pr-5 py-7 font-semi-bold font-[Pacifico] text-lg'>
            <Link to='/'>
                <h2>aisi.</h2>
            </Link>
            <div className='space-x-4 flex'>
                <Link to='/shop'>
                    shop
                </Link>
                <Link>
                    contact
                </Link>
                {currentUser ? (
                    <span onClick={signOutHandler} className="cursor-pointer">
                        signout
                    </span>
                ) : (
                    <Link to='/sign-in'>
                    sign in
                </Link>
                )}
                <CartIcon />
            </div>
        </nav>
        {/* Conditionally render CartDropdown component based on isCartOpen */}
        {isCartOpen && <CartDropdown />}
        <Outlet />
      </Fragment>
    )
  }

export default Navbar;

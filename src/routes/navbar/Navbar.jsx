import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../firebase/firebase';

import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';


const Navbar = () => {
    const { currentUser } = useContext(UserContext);

    // Sign out user
    const signOutHandler = () => signOutUser();

    return (
      <Fragment>
        <nav className='flex justify-between pl-5 pr-5 py-7 font-semi-bold font-[Pacifico] text-lg'>
            <Link to='/'>
                <h2>aisi.</h2>
            </Link>
            <div className='space-x-4'>
                <Link>
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
               
                <Link>
                    cart
                </Link>
            </div>
        </nav>
        <Outlet />
      </Fragment>
    )
  }

export default Navbar;

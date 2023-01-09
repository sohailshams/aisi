import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../firebase/firebase';

const SignIn = () => {
  const logInWithGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className='grid place-items-center	h-screen'>
      <div className='flex flex-col items-center p-[10%] shadow-lg bg-slate-50'>
        <h1 className='text-xl font-bold'>
            aisi.
        </h1>
        <button onClick={logInWithGooglePopup} className='mt-20 border-2 border-black bg-black text-slate-50 p-2 shadow-lg hover:bg-slate-50 hover:text-black'>
          Sign In with Google
        </button>
      </div>
    </div>
  )
}

export default SignIn
import './sign-in.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../util/firebase/firebase.utils';

const SignIn = () =>{

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();

        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign On Page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </div>
    )
}

export default SignIn;
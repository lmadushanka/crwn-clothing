import './sign-in.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../util/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () =>{

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign On Page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;
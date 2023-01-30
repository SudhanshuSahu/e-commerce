
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignInForm from "../../components/sign-in-form/sign-in-form-component";
import './authentication-style.scss'
const Authentication = ()=> {

// const logGoogleRedirectUser = async()=>{
//   const {user} = await signInWithGoogleRedirect();
//  console.log(user);
// }
  return (
    <div className="authentication-container">
    <SignInForm/>
   <SignUpForm/>
    </div>

  )

}

export default Authentication;
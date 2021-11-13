import React from 'react';
import { Switch , Route ,Redirect } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shopPage/shopPage.component';
import HomePage  from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in-and-sign-up.components';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.components';

import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import {setCurrentUser} from './components/redux/user/user.actions';
import {selectCurrentUser} from './components/redux/user/user.selector';
class App extends React.Component {
 
  unsubscribeFromAuth = null;
  componentDidMount() {   //When someone login in our application this methods will be useful.
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
          })
        });
      }
      else{
        setCurrentUser({userAuth});
      }
    });
  }

  componentWillUnmount() {   // When someone logout from our application this method will be useful.
    this.unsubscribeFromAuth(); 
  }
  render(){
    return (
      <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/signIn' 
      render = { () => this.props.currentUser 
        ? ( <Redirect to='/' />)
        : ( <SignInAndSignUpPage /> )}  />
      </Switch>
      
      </div>
    );
  }
  
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

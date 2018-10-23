# tahminioRN
- Mobile view for tahmin.io

## TO INSTALL REQUIREMENTS (I guess)
- npm shrinkwrap
- npm install

## TO RUN
- react-native run-android

## REACT DEBUG PROBLEM
- Go to http://localhost:8081/debugger-ui/ . Then stop remote js debugging and run your react native app again. Finally debug js remotely. - Has worked for me.

## Babel patch fix
- npm add @babel/runtime

## TO RUN [import fs from 'fs';] like modules 
- node --experimental-modules ["INSERT YOUR JS FILE NAME HERE"].mjs
- or use var [fs = require('fs')] instead

## Redux
- npm install --save redux react-redux
```
 	const reducer = (state = [], action) => {
		if (action.type === "split_string") {
			return action.payload.split('');
		}
			return state;
	};

	const store = Redux.createStore(reducer);

	store.getState(); // output = []

	const action = {
		type: "split_string"
		payload: 'something'	// payload is object that we want it to be actioned
	}

	store.dispatch(action);

	store.getState();
```

## react-thunk:
-	asyncranic function programming for help
-	npm install --save redux-thunk

On front-end
```
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
    </Provider>
  );
}
```

On back-end
```
		export const loginUser = ({ email, password }) => {
      return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(user => LoginUserSuccess(dispatch, user))         
          // dispatch it first argument becuase it tells the funtion to wait until process is complete
          .catch((error) => {console.log(error)});
      };
    };
```
- dispatch is async way of redux-thunk
- After action creator called and returned a function, Redux-thunk sees that we return a function, calls it with 'dispatch', and waits until request is complete then runs it then Dispatch the action
  
## react-native-router-flux
- npm install --save react-native-router-flux

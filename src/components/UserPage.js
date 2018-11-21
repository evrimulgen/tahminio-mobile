import { View, Text, FlatList } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	userGetMe,
	logoutUser,
	userDeleteMe,
	getAnotherUser,
	userVerify
} from '../actions';
import { Card, CardSection, Input, Button, Spinner, Base } from './common';
import UserSearchData from './UserSearchData';
import { Actions } from 'react-native-router-flux';

class UserPage extends Component {
	state = { count: 0 }
	
/*	componentDidMount() {
		if (this.state.count === 0) {
			console.log("updating info now")
		  const { token } = this.props;
		  this.props.userGetMe({ token });
		  this.setState({ count: this.state.count + 1 });
		}
	}*/

/*	renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
  }*/

	onLogoutUser() {
	  const { token } = this.props;
		this.props.logoutUser({ token });
  }

  onUserDeleteMe() {
  	const { token } = this.props;
		this.props.userDeleteMe({ token });
  }

  ongetAnotherUser() {
  	const { token } = this.props;
  	const user_id = 582;
		this.props.getAnotherUser( user_id, { token } );
  }

  onUserVerify() {
  	// TODO
  	// find out where to tkae verify key
  	const { verification_key } = 1234
  	this.props.userVerify({ verification_key })
  }

	renderPage() {
	  const { user } = this.props;
	  if (user === null) {
			return (
		    <View>
		      <CardSection>
		        <Button onPress={() => Actions.Login()}>
		          Login
		        </Button>
		      </CardSection>

		      <Text>OR</Text>
		      
		      <CardSection>
		        <Button onPress={() => Actions.SignUp()}>
		          Sign Up
		        </Button>
		      </CardSection>
		  	</View>
		  );
	  }

	  return (
      <View>
        <Text>{user.first_name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.last_name}</Text>
        <Text>{user.username}</Text>
        <Text>{user.bio}</Text>
        <CardSection>
          <Button onPress={() => Actions.UpdateMe()}>Update Me</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onLogoutUser.bind(this)}>Logout</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onUserDeleteMe.bind(this)}>Delete yourself</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.ongetAnotherUser.bind(this)}>getAnotherUser</Button>
        </CardSection>
        	{ !user.is_verified
            ? {
            		<CardSection>
            			<Button onPress={this.onUserVerify.bind(this)}>Verify your account</Button>
            		</CardSection>
            	}
        		: null
        	}
        <UserSearchData />
      </View>
    );
	}

	render() {
		return (
			<Base>
				{this.renderPage()}
			</Base>
		);
	}
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateTopProps = state => {
  return {
    user: state.user.user,
    token: state.user.token,
    loading: state.user.loading,
  };
};

export default connect(mapStateTopProps, { 
  userGetMe, logoutUser, userDeleteMe, getAnotherUser
  userVerify,
})(UserPage);

import { View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  usernameChanged,
  emailChanged,
  passwordChanged,
  firstnameChanged,
  lastnameChanged,
  bioChanged,
  logoutUser,
  profilePhotoChanged,
  userUpdateMe,
} from '../actions';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { Card, CardSection, Input, Spinner } from './common';

class UpdateMe extends Component {
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onFirstnameChange(text) {
    this.props.firstnameChanged(text);
  }

  onLastnameChange(text) {
    this.props.lastnameChanged(text);
  }

  onBioChange(text) {
    this.props.bioChanged(text);
  }

  onPhotoAdd() {
  	console.log('updated your PP')
  }

  onButtonPress() {
    const { 
    	token,
      username, 
      email, 
      password,
      first_name,
      last_name,
      bio,
      profile_photo
    } = this.props;
    this.props.userUpdateMe({ token, username, password, email, first_name, last_name, bio, profile_photo });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign Up
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Username"
            placeholder="username123"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>


        <CardSection>
          <Input
            label="first_name"
            placeholder="David"
            onChangeText={this.onFirstnameChange.bind(this)}
            value={this.props.first_name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="last_name"
            placeholder="LAST"
            onChangeText={this.onLastnameChange.bind(this)}
            value={this.props.last_name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Biography"
            placeholder="tell me about yourself"
            onChangeText={this.onBioChange.bind(this)}
            value={this.props.bio}
          />
        </CardSection>

         <CardSection>
          <Button onPress={() => this.onPhotoAdd()}> Add Photo </Button>
        </CardSection>

        {this.renderError()}
        
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
const mapStateTopProps = state => {
  return {
  	token: state.user.data.token,
    username: state.user.username,
    email: state.user.email,
    password: state.user.password,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    bio: state.user.bio,
    profile_photo: state.user.profile_photo, //
    error: state.user.error,
    loading: state.user.loading,
    user: state.user.user,
  };
};

export default connect(mapStateTopProps, { 
  usernameChanged, 
  emailChanged, 
  passwordChanged, 
  logoutUser, 
  firstnameChanged, 
  lastnameChanged, 
  bioChanged,
  profilePhotoChanged,
  userUpdateMe,
})(UpdateMe);

import React from 'react';
import './App.css';
import FormValidation from './FormValidation';

class App extends React.Component {

  state = {
    usernick: '',
    email: '',
    password: '',
    accept: false,
    corectUsernick: false,
    corectEmail: false,
    corectPassword: false,
    isCorrectForm: false
  };

  validation = {
    usernick: /\s/,
    email: /[a-z]+[-_]*[.]*[0-9]*@[a-z]+[0-9]*[.][a-z]{2,3}$/i,
    upperCase: /[A-Z]+/,
    downCase: /[a-z]+/,
    specials: /[!@#$%^&*()-_,.]+/,
    digits: /[0-9]+/
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      usernick: '',
      email: '',
      password: '',
      accept: false,
      corectUsernick: false,
      corectEmail: false,
      corectPassword: false,
      isCorrectForm: false
    });
    alert(`Formularz został wysłany, dziękujemy za rejestracje.`)
  };

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;
    if (name === 'usernick' || name === 'email' || name === 'password') {
      const value = e.target.value
      this.setState({
        [name]: value
      });
    } else if (type === 'checkbox') {
      const checked = e.target.checked
      this.setState({
        [name]: checked
      });
    };
    setTimeout(() => {
      const { usernick, email, password } = this.state;
      const { validation } = this;
      const checkNick = (!validation.usernick.test(usernick) && usernick.length > 0);
      const checkEmail = validation.email.test(email);
      const checkPassword = (validation.upperCase.test(password) && validation.downCase.test(password) && validation.specials.test(password) && validation.digits.test(password) && password.length >= 8);
      if (checkNick && checkEmail && checkPassword && this.state.accept) {
        this.setState({
          isCorrectForm: true
        });
      } else {
        this.setState({
          isCorrectForm: false
        });
      };
      this.setState({
        corectUsernick: checkNick,
        corectEmail: checkEmail,
        corectPassword: checkPassword
      });
    }, 0)
  };

  render() {
    const { usernick, corectUsernick, email, corectEmail, password, corectPassword, accept, isCorrectForm } = this.state
    const { handleChange, handleClick } = this
    return (
      <div className='App'>
        <FormValidation
          change={handleChange}

          userValue={usernick}
          userInfo={!corectUsernick}

          emailValue={email}
          emailInfo={!corectEmail}

          passwordValue={password}
          passwordInfo={!corectPassword}

          acceptChecked={accept}
          acceptInfo={!accept}

          buttonDisabled={!isCorrectForm}
          click={handleClick}
        />
      </div>
    )
  }
}

export default App;
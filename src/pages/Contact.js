import React from 'react';
import GoogleMap from '../components/googleMap';
import { Prompt } from 'react-router-dom';

class Contact extends React.Component {

  state = {
    nameValue: "",
    emailValue: "",
    phoneValue: "",
    textValue: "",
    isEmpty: true,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      nameValue: "",
      emailValue: "",
      phoneValue: "",
      textValue: "",
      isEmpty: true,
    })
  }

  handleNameChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        nameValue: e.target.value,
        isEmpty: false
      })
    } else {
      this.setState({
        nameValue: e.target.value,
        isEmpty: true
      })
    }
  }

  handleEmailChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        emailValue: e.target.value,
        isEmpty: false
      })
    } else {
      this.setState({
        emailValue: e.target.value,
        isEmpty: true
      })
    }
  }

  handlePhoneChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        phoneValue: e.target.value,
        isEmpty: false
      })
    } else {
      this.setState({
        phoneValue: e.target.value,
        isEmpty: true
      })
    }
  }

  handleTextChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        textValue: e.target.value,
        isEmpty: false
      })
    } else {
      this.setState({
        textValue: e.target.value,
        isEmpty: true
      })
    }
  }



  render() {
    return (
      <>
        <div className="contactPage">
          <div className="contact">
            <form onSubmit={this.handleSubmit}>
              <h1>Skontaktuj się z nami!</h1>
              <textarea value={this.state.nameValue} onChange={this.handleNameChange} placeholder="Imię i nazwisko / nazwa firmy" rows="1"></textarea>
              <textarea value={this.state.emailValue} onChange={this.handleEmailChange} placeholder="Adres e-mail" rows="1"></textarea>
              <textarea value={this.state.phoneValue} onChange={this.handlePhoneChange} placeholder="Telefon" rows="1"></textarea>
              <textarea value={this.state.textValue} onChange={this.handleTextChange} placeholder="Treść wiadomości" rows="10"></textarea>
              <button>Wyślij!</button>
            </form>
          </div>
          <div className="general">
            <div className="gen">
              <i class="far fa-clock" ></i>
              <h2>poniedziałek - sobota: 11:00 - 18:00</h2>
            </div>
            <div className="gen">
              <i class="fas fa-map-marker-alt"></i>
              <h2>ul.Przykładowa 16 43-100 Kraśnik</h2>
            </div>
            <div className="gen">
              <i class="fas fa-phone"></i>
              <h2>Recepcja: +48 123456789</h2>
            </div>
            <div className="gen">
              <i class="far fa-envelope"></i>
              <h2>beautystudio@example.com</h2>
            </div>
          </div>
          <Prompt
            when={!this.state.isEmpty}
            message="Niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?" />
        </div >
        <div className="googleMap"><GoogleMap /></div>
      </>
    );
  }
}

export default Contact;
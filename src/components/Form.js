// import React, { useState } from "react";

// const Form = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     sendFeedback("template_1o5sqru", {
//       name,
//       phone,
//       email,
//       message,
//     });
//   };

//   const sendFeedback = (templateId, variables) => {

//     window.emailjs
//       .send("service_mzy6srg", templateId, variables)
//       .then((res) => {
//         console.log('success !');
//         setName("");
//         setPhone("");
//         setEmail("");
//         setMessage("");
//       })
//       .catch(
//         (err) =>
//           document.querySelector('.form-message').innerHTML =
//             "Une erreur s'est produite, veuillez réessayer.")
//   };

//   return (
//     <form className="contact-form">
//       <div className="form-content">
//         <input
//           type="text"
//           id="name"
//           name="name"
//           onChange={(e) => setName(e.target.value)}
//           placeholder="nom *"
//           value={name}
//           autoComplete="off"
//         />

//         <input
//           type="text"
//           id="phone"
//           name="phone"
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="téléphone"
//           value={phone}
//         />
//         <div className="email-content">
//           <input
//             type="mail"
//             id="email"
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="email *"
//             value={email}
//             autoComplete="off"
//           />
//         </div>
//         <textarea
//           id="message"
//           name="message"
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="message *"
//           value={message}
//         />
//       </div>
//       <input
//         className="button"
//         type="button"
//         value="Envoyer"
//         onClick={handleSubmit}
//       />
//       <div className="form-message"></div>
//       {/* <div class="g-recaptcha" data-sitekey="your_site_key"></div> */}

//     </form>
//   );
// };

// export default Form;








import React, { Component } from "react";


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let {name, phone, email, message} = this.state;
    let nameS = document.getElementById('name');
    let emailS = document.getElementById('email');
    let messageS = document.getElementById('message');
    let formMess = document.querySelector('.form-message');

    const isEmail = () => {
      let isMail = document.getElementById('not-mail')
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(email.match(regex)) {
        isMail.style.display = 'none';
        return true;
      } else {
        isMail.style.display = 'block';
        isMail.style.animation = 'dongle 1s';
        setTimeout(() => {
          isMail.style.animation = 'none';
        }, 1000);
        return false;
      }
    }

    if (name && isEmail() && message){
      const templateId = "template_1o5sqru";

      nameS.classList.remove('red');
      emailS.classList.remove('red');
      messageS.classList.remove('red');

      this.sendFeedback(templateId, {
        name,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.color = 'red';
      formMess.style.opacity = '1';

      function error(type, path){
        if (!type) {
          path.classList.add('error');
        }
      }
      error(name,nameS);
      error(email, emailS);
      error(message, messageS);
    }
  }

  sendFeedback(templateId, variables) {
    let formMess = document.querySelector('.form-message');

    window.emailjs
      .send("service_mzy6srg", templateId, variables)
      .then((res) => {
        formMess.innerHTML = "Message envoyé ! ";
        formMess.style.opacity = '1';
        formMess.style.textAlign = 'center';
        formMess.style.fontSize = '2rem';
        formMess.style.color = '#fff';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        this.setState({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          formMess.style.opacity = '0';
        }, 5000);
      })
      .catch((err) =>
        formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer."
      );
  }

  render() {
    return (
      <form className="contact-form">
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={this.handleChange.bind(this)}
            placeholder="nom *"
            value={this.state.name}
            autoComplete="off"
          />

          <input
            type="text"
            id="phone"
            name="phone"
            onChange={this.handleChange.bind(this)}
            placeholder="téléphone"
            value={this.state.phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              required
              onChange={this.handleChange.bind(this)}
              placeholder="email *"
              value={this.state.email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={this.handleChange.bind(this)}
            placeholder="message *"
            required
            value={this.state.message}
          />
        </div>
        <input className="button" type="button" value="envoyer" onClick={this.handleSubmit.bind(this)} />
        <div className="form-message"></div>
      </form>
    );
  }
}

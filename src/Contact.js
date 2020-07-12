import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      nohp: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    alert(`Nama : ${this.state.name}, Email : ${this.state.email}, , No hp : ${this.state.nohp}`);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value})
  }

  render() {
    const {name, email, nohp} = this.state;

    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={this.onSubmit}>
        <label>
          Nama <br />
          <input name="name" type="text" value={name} onChange={this.onChange} required />
        </label><br />
        <label>
          Email: <br />
          <input name="email" type="email" value={email} onChange={this.onChange} required />
        </label><br />
        <label>
          No Hp <br />
          <input name="nohp" type="number" value={nohp} onChange={this.onChange} required />
        </label><br />
        <label>
          Layanan <br />
          <select>
            <option>Web Development</option>
            <option>Mobile Apps</option>
          </select>
        </label><br />
        <label>
         Alamat<br />
        <textarea name="alamat"></textarea>
      </label>
      </form>
      <button type="submit">Submit</button>
      </div>
      
    );
  }
}
 
export default Contact;
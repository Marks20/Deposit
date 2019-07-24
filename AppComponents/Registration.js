import React, {Component} from 'react';

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    signUpClicked = (e) => {
        e.preventDefault();


        let id = e.target.elements.id.value;
        let firstname = e.target.elements.firstname.value;
        let lastname = e.target.elements.lastname.value;
        let dob = e.target.elements.DOB.value;
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;


        this.insertUser(id, firstname, lastname, dob, email, password);
        this.signup();
    }
}

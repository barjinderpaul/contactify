import React from 'react';
import { Input, Button, Container, Message } from 'semantic-ui-react';
import serializeForm from 'form-serialize';
import { Link } from 'react-router-dom'; 

class AddContact extends React.Component{

    state = {
        alertType: 0 //none
    }

    onAddContact = (e) => {
        e.preventDefault();

        const formData = serializeForm(e.target,{hash:true});
        console.log(`name : ${formData.name} , mobileNumber : ${formData.mobileNumber}`)
        if (formData.name === '' ||formData.name === undefined  || formData.mobileNumber === '' || formData.mobileNumber === undefined
            || isNaN(formData.mobileNumber)) {
            this.setState({
                alertType:2 //error
            });
            return;
        }

        this.props.addContact(formData);
        this.setState({
            alertType:1 //success
        })

        e.target.reset();

    }
    render () {
        return (
            <>
                <Container textAlign = 'center' text className = 'add-contact-container'>
                    <Container textAlign="left" >
                        <Link to = "/">
                            <Button icon="long arrow alternate left" circular primary size='massive'/>
                        </Link>
                    </Container>
                    
                    { this.state.alertType === 1 
                        ? <Message color='green' size ='large' >Contact added successfully</Message>
                        :   this.state.alertType === 2 
                            ?  <Message color='red' size='large'>Please enter valid details</Message> 
                            : ''
                    }  

                    <h2>Enter details</h2>
                    <form onSubmit = {this.onAddContact}> 
                        <Input className = "add-contact-container-input" name = "name" placeholder = "Name" size='massive'/> <br />
                        <Input className = "add-contact-container-input" name="mobileNumber" placeholder = "Mobile Number" size='massive' /> <br />
                        <Button content = "Add contact" size = 'massive' icon = 'plus circle' color="green"/>
                    </form>
                </Container>
            </>
        );
    }   
}

export default AddContact;
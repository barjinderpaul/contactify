import React from 'react';
import { Input, Button, Container } from 'semantic-ui-react';
import serializeForm from 'form-serialize';
import { Link } from 'react-router-dom'; 

const AddContact = (props) => {
    const onAddContact = (e) => {
        e.preventDefault();

        const formData = serializeForm(e.target,{hash:true});
        props.addContact(formData);

        e.target.reset();

    }
    return (
        <>
            <Container textAlign = "center" className = 'add-contact-container'>
                <Container textAlign="left" >
                    <Link to = "/">
                        <Button icon="long arrow alternate left" circular primary size='massive'/>
                    </Link>
                </Container>
                <h2>Enter details</h2>
                <form onSubmit = {onAddContact}> 
                    <Input className = "add-contact-container-input" name = "name" placeholder = "Name" size='massive'/> <br />
                    <Input className = "add-contact-container-input" name="mobileNumber" placeholder = "Mobile Number" size='massive' /> <br />
                    <Button content = "Add contact" size = 'massive' icon = 'plus circle' color="green"/>
                </form>
            </Container>
        </>
    );
}

export default AddContact;
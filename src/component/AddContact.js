import React from 'react';
import { Input, Button, Container } from 'semantic-ui-react';
import serializeForm from 'form-serialize'

const AddContact = (props) => {
    const onAddContact = (e) => {
        e.preventDefault();

        const formData = serializeForm(e.target,{hash:true});
        props.addContact(formData);

        e.target.reset();

    }
    return (
        <>
            <Container textAlign = "center">
                <form onSubmit = {onAddContact}> 
                    <Input name = "name" placeholder = "Name..." /> <br />
                    <Input name="mobileNumber" placeholder = "Mobile Number..." /> <br />
                    <Button content = "Add contact" primary/>
                </form>
            </Container>
        </>
    );
}

export default AddContact;
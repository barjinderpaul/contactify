import React from 'react';
import {Card} from 'semantic-ui-react'
import Navbar from './Navbar';
import ContactButton from './ContactButton';

class Contact extends React.Component {

    state = {
        contacts : [
            {
                name : "Gonzalvis Han",
                createdAt : '2020-02-28',
                mobileNumber : '+91-1234567890'
            },
        
            {
                name : "Kate cena",
                createdAt : '2020-03-21',
                mobileNumber : '+91-1234567890'
            },
        
            {
                name : "Sin Gabriel",
                createdAt : '2020-03-22',
                mobileNumber : '+91-1234567890'
            },
        
            {
                name : "John Doe",
                createdAt : '2020-03-25',
                mobileNumber : '+91-1234567890'
            },
            {
                name : "Jalep Gopez",
                createdAt : '2020-03-22',
                mobileNumber : '+91-1234567890'
            },
        
            {
                name : "Daniel Gonaz",
                createdAt : '2020-03-25',
                mobileNumber : '+91-1234567890'
            }        
        ],
        searchQuery : ""
    }

    deleteContact = (name) => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.name !== name)
        });
    }

    updateQuery = (event) => {
        console.log(`query : ${event.target.value}`)
        this.setState({
            searchQuery: event.target.value
        })
    }

    render() {
        const src = "https://api.adorable.io/avatars/200/abott@adorable.png/";
        return (
            <>
                <Navbar updateQuery = {this.updateQuery}/>
                <Card.Group className = "container-custom" itemsPerRow={4}>
                    { this.state.searchQuery === '' ?
                            this.state.contacts.map(contact => (
                                <Card 
                                    key = {contact.name}
                                    image = {src}
                                    header = {contact.name}
                                    meta = {contact.createdAt}
                                    description = {contact.mobileNumber}
                                    extra = {<ContactButton deleteContact = {() => this.deleteContact(contact.name) } />}
                                />
                            ))
                            : 
                                this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                                .map(contact => (
                                    <Card 
                                    key = {contact.name}
                                    image = {src}
                                    header = {contact.name}
                                    meta = {contact.createdAt}
                                    description = {contact.mobileNumber}
                                    extra = {<ContactButton deleteContact = {() => this.deleteContact(contact.name) } />}
                                />
                                ))
                        }
                </Card.Group>   
            </>
        );
    }   
}

export default Contact;
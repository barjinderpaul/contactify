import React from 'react';
import {Card} from 'semantic-ui-react'
import Navbar from './Navbar';
import ContactButton from './ContactButton';
import AddContact from './AddContact';
import {Route} from 'react-router-dom';


class Contact extends React.Component {

    state = {
        contacts : [
            {
                name : "Gonzalvis Han",
                createdAt : '28/3/2020',
                mobileNumber : '+91-1234567890'
            },
        
            {
                name : "Kate cena",
                createdAt : '28/3/2020',
                mobileNumber : '+91-1234567890'
            },
        
            {
                name : "Sin Gabriel",
                createdAt : '28/3/2020',
                mobileNumber : '+91-1234567890'
            },
        
            {
                name : "John Doe",
                createdAt : '28/3/2020',
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

    addContact = ({name, mobileNumber}) => {
        
        let newContact = {
            name,
            createdAt: new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}).split(',')[0],
            mobileNumber
        };

        this.setState({
            contacts: this.state.contacts.concat(newContact)
        });
    }

    updateQuery = this.updateQuery.bind(this);

    render() {
        const src = "https://api.adorable.io/avatars/200/abott@adorable.png/";
        return (
            <>
                <Route exact
                    path="/"
                    render = { ()=> (
                        <>
                        <Navbar updateQuery = {this.updateQuery} query = {this.state.searchQuery}/>
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
                    )} 
                /> 
                <Route 
                    path="/create" 
                    render = { () => ( <AddContact addContact = {(name, mobileNumber) => this.addContact(name,mobileNumber)}/> )} 
                />
            </>
        );
    }   
}

export default Contact;
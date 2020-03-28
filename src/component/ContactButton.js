import React from 'react';
import {Button, Icon} from 'semantic-ui-react'

const ContactButton = () => {
    return (
        <Button animated='vertical' negative>
            <Button.Content visible>Delete Contact</Button.Content>
            <Button.Content hidden>
            <Icon loading name='delete' />
            </Button.Content>
        </Button>
    );
}


export default ContactButton;
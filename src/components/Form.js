import React from 'react'
import TextField from '@material-ui/core/TextField';
import PasswordField from './PasswordField';
import Button from '@material-ui/core/Button';

export default function Form() {
    return (
        <form className='ift-form'>
            <TextField id="filled-basic" label="E-mail" variant="filled" className="textField" />
            <PasswordField className="textField" />
            <Button className='ift-btn' variant="outlined">ENTRAR</Button>
        </form>
    )
};

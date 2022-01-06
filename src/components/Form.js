import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './actions/loginAction';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function Form() {

    // Declarando variáveis e estados iniciais
    const initialPassword = {
        password: '',
        showPassword: false,
    };

    const [email, setEmail] = useState("");
    const [values, setValues] = useState(initialPassword);
    const dispatch = useDispatch();

    const [helperText, setHelperText] = useState("");
    const [textId, setTextId] = useState("filled-basic");
    const [statusText, setStatusText] = useState(false);

    const [helperPass, setHelperPass] = useState("");
    const [passId, setPassId] = useState("filled-adornment-password");
    const [statusPass, setStatusPass] = useState(false);

    // Capturando senha inserida pelo usuário
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        cleanErrorsPassword();
    };

    // Habilitando ou desabilitando a visibilidade dos caracteres de senha do usuário
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    function handleMouseDownPassword(event) {
        event.preventDefault();
    };

    // Capturando e-mail inserido pelo usuário
    function changeEmail(event) {
        let newEmail = event.target.value;
        setEmail(newEmail);
        cleanErrorsEmail();
    };

    // Evento de clique no botão
    function addItemEvent(event) {
        event.preventDefault(); //Evita o comportamento default de um botão dentro de um form.
        if (email && values.password) {
            dispatch(addItem(email, values.password));
            setEmail(""); //Zerando o valor do input text após cada novo item ser inserido. Importante passar um argumento "value" no <input> com valor {text}, para que as modificações sejam renderizadas na tela.
            setValues(initialPassword);
            cleanErrorsEmail();
            cleanErrorsPassword();
        }
        else if (email && !values.password) {
            setHelperText("");
            setTextId("filled-basic");
            setStatusText(false);
            setHelperPass("Insira uma senha.");
            setPassId("component-error");
            setStatusPass(true);
        }
        else if (!email && values.password) {
            setHelperText("Insira um e-mail.");
            setTextId("outlined-error-helper-text");
            setStatusText(true);
            setHelperPass("");
            setPassId("filled-adornment-password");
            setStatusPass(false);
        }
        else if (!email && !values.password) {
            setHelperText("Insira um e-mail.");
            setTextId("outlined-error-helper-text");
            setStatusText(true);
            setHelperPass("Insira uma senha.");
            setPassId("component-error");
            setStatusPass(true);
        }
    };

    // Limpando avisos de erros nos campos de input
    function cleanErrorsEmail() {
        setHelperText("");
        setTextId("filled-basic");
        setStatusText(false);
    };

    function cleanErrorsPassword() {
        setHelperPass("");
        setPassId("filled-adornment-password");
        setStatusPass(false);
    };

    return (
        <form className='ift-form'>
            <TextField error={statusText} id={textId} label="E-mail" variant="filled" className="textField" onChange={changeEmail} value={email} autoComplete="on" helperText={helperText} />
            <div className="textField">
                <FormControl variant="filled" style={{ width: '100%' }} error={statusPass}>
                    <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
                    <FilledInput
                        autoComplete="on"
                        error={statusPass}
                        id={passId}
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText id="component-error-text">{helperPass}</FormHelperText>
                </FormControl>
            </div>
            <Button className='ift-btn' variant="outlined" onClick={addItemEvent}>ENTRAR</Button>
        </form>
    );
};

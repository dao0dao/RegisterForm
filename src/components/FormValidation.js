import React from 'react';
import Button from './Button'

const FormValidation = props => {
    return (
        <>
            <h2>Rejestracja</h2>
            <form noValidate>
                <label className='user' htmlFor="user">
                    <p className='text'>Wpisz swój nick:</p>
                    <input
                        type="text" name="usernick" id="user"
                        value={props.userValue}
                        onChange={props.change}
                    />
                    <div className='info'>
                        {props.userInfo && <p>Nick nie może zawierać spacji!</p>}
                    </div>
                </label>
                <label className='email' htmlFor="email">
                    <p className='text'>Wpisz swój e-mail:</p>
                    <input
                        type="email" name="email" id="email"
                        value={props.emailValue}
                        onChange={props.change}
                    />
                    <div className='info'>
                        {props.emailInfo && <p>Wprowadź prawidłowy email!</p>}
                    </div>
                </label>
                <label className='password' htmlFor="password">
                    <p className='text'>Wpisz swoje hasło:</p>
                    <input
                        type="password" name="password" id="password"
                        value={props.passwordValue}
                        onChange={props.change}
                    />
                    <div className='info infoPassword'>
                        {props.passwordInfo && <div>

                            <p>Hasło musi składać z:</p>
                            <ul>
                                <li>Co najmniej z 8 znaków.</li>
                                <li>Wielkich i małych liter.</li>
                                <li>Liczb.</li>
                                <li>Znaku specjalnego.</li>
                            </ul>
                        </div>}
                    </div>
                </label>
                <label className='accept' htmlFor="accept">
                    <input type="checkbox" name="accept" id="accept"
                        checked={props.acceptChecked}
                        onChange={props.change}
                    />
                    <p className='text'>Zgadzam się z regulaminem</p>
                    <div className='info'>
                        {props.acceptInfo && <p>Zaakceptuj regulamin!</p>}
                    </div>
                </label>
                <Button
                    disable={props.buttonDisabled}
                    click={props.click}
                />
            </form>
        </>
    )
}

export default FormValidation
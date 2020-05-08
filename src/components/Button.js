import React from 'react';

const Button = props => {
    return (
        <button className='buttonSubmit'
            disabled={props.disable}
            type="submit"
            onClick={props.click}
        >
            Zarejestruj się
        </button>
    );
};

export default Button
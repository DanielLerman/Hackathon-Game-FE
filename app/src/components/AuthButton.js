const AuthButton = ({ text, handleClick }) => {
    return (
        <span
            className="logIn-btn rounded-pill align-self-center mt-2"
            onClick={handleClick}
        >
            {text}
        </span>
    );
};

export default AuthButton;

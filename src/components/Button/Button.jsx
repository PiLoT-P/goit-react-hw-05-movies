import css from "./Button.module.css";

const Button = ({ title, type = "button", onClick = null }) => {
  return (
    <button type={type} onClick={onClick} className={css.button}>
      {title}
    </button>
  );
};

export default Button;
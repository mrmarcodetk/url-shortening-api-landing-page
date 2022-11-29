import "./button-hamburger-styles.css";
export interface ButtonHamburgerInterface {
  open: boolean
  onClick: () => void;
}
const ButtonHamburger: React.FC<ButtonHamburgerInterface> = ({ open, onClick }) => {
  return (
    <div className={`icon nav-icon-5 navbar__menu-icon ${!!open && 'open'}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default ButtonHamburger
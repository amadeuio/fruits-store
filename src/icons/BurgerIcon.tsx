interface Props {
  className?: string;
}

const BurgerIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
};

export default BurgerIcon;

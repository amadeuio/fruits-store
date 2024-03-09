interface Props {
  className?: string;
}

const MinusIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );
};

export default MinusIcon;

interface Props {
  className?: string;
  pointsLeft?: boolean;
}

const ChevronIcon: React.FC<Props> = ({ className = null, pointsLeft = false }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      {pointsLeft ? (
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
      ) : (
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
      )}
    </svg>
  );
};

export default ChevronIcon;

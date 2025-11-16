const Tags = ({ text, bgColor }) => {
  return (
    <span className={`badge ${bgColor}`}>
      {text}
    </span>
  );
};

export default Tags;


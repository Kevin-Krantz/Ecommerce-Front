type ErrorMessageProps = {
  message?: string[];
  type: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, type }) => {
  if (!message) return null;

  const errorMessage = message.filter((err) => err.includes(type));

  return (
    <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
      {errorMessage}
    </div>
  );
};

export default ErrorMessage;

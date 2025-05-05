interface Props {
  message: string;
}

const ErrorLabel: React.FC<Props> = ({ message }) => {
  return (
    <p className="font-poppins font-[400] text-destructive text-[12px]">
      {message}
    </p>
  );
};

export default ErrorLabel;

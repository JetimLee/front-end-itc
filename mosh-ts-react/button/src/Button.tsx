interface Props {
  children: string;
  color?: "btn-primary" | "btn-secondary" | "btn-danger";
  onClick: () => void;
}
export const Button = ({ children, onClick, color = "btn-primary" }: Props) => {
  return (
    <button onClick={onClick} type="button" className={color}>
      {children}
    </button>
  );
};

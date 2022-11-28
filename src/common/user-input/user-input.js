export default function FormInput(props) {
  const { placeholder, type, name, value, onChange } = props;

  return (
    <div>
      <input
        placeholder={placeholder}
        className="input-user-register"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

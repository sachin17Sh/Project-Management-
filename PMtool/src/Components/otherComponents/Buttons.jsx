
export default function Buttons({ children, ...props }) {
  return (
    <button
      className="px-4 py-3 rounded-lg text-stone-400  hover:bg-stone-500 hover:text-stone-100 "
      {...props}
    >
      {" "}
      {children}
    </button>
  );
}

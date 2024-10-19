// components/ui/button.js or button.tsx

export function Button({ children }) {
  return (
    <button className="bg-blue-500 text-white py-2 px-4 rounded">
      {children}
    </button>
  );
}

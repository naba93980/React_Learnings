import Header from "./Header";

export default function App() {
  let age = 20;
  return (
    <div>
      <Header />
      {0 && <p>how are you ?</p>}
      {1 && <p>how are you ?</p>}
      {false && <p>how are you ?</p>}
      {true && <p>how are you ?</p>}
      {age > 18 && <p>how are you ?</p>}
    </div>
  );
}
//falsy values except 0 are not visible in browser rendered react code

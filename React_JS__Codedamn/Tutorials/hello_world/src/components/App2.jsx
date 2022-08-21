import Header from "./Header";
import Custom from "./Custom";
function App2() {
  return (
    <div>
      <Header />
      <div id="content">
        <h1>hello {1.5 + 1.5} pipols</h1>
      </div>
      <div className="contant">
        <h1>hello {1.5 * 3.5} pipols, i am from class</h1>
      </div>
      <Custom name_kita="Nabajyoti Modak" age={22} />
    </div>
  );
}
export default App2;

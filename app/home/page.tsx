import dataweb from "../data/direccion.json";
import Category from "../components/Category";
import "./style.css";

export default function Home() {


  const data = dataweb.routes;

  return (
    <div>
      {data.map((data) => (
        <Category
          className="card_home"
          key={data.id}
          id={data.id}
          category={data.category}
          title={data.title}
          text={data.text}
          data={data.data}
          address_base={data.address_base}
        />
      ))}
    </div>
  );
}

//tsrafce

interface Props {
  id: string;
  category: string;
  title: string;
  text: string;
  data: string;
  address_base: string;
  className?: string;
}

const Category = (props: Props) => {
  
  return (
    <div>
      
      <div className={props.className} key={props.id}>
        <h1>Categoria: {props.category}</h1>
        <h2> {props.title} </h2>
        <p> {props.text} </p>
        <p>Fecha: {props.data} </p>
        <p>Ruta: {props.address_base} </p>
      </div>
      
    </div>
  );
};

export default Category;
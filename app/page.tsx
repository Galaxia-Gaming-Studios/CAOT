import Image from "next/image";
import icon from "./favicon.ico";


export default function Home() {
  return (
    <div>
      <div className="card_box_home">
        <Image
          className="img"
          src={icon}
          alt="Imagen"
          width={200}
          height={0}
        />
        <h1>CAOT Project</h1>
        <p>Aqui Hay Projectos Presentaciones ect.</p>
        
        
        
      </div>
    </div>
  );
}
                                                                                      
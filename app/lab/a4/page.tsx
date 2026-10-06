import Image from 'next/image';
import data from './Data.json'
import './style.css';


export default function page() {

  return (
    <div>
      <div className="banner">
        <h1>Pollutions Nuclear</h1>
      </div>
      
      <div className="card-img">
        <Image
          src="/7-10-26/img1.jpg"
          alt="Imagen"
          width="500"
          height="300"
          />
        <Image
          src="/7-10-26/img2.jpg"
          alt="Imagen"
          width="500"
          height="300"
          />
      </div>
      
      <div className="card-title">
          <h1>Hello Welcome</h1>
          <p>Today speaks About Polluction Chernobyl</p>
      </div>

      <div className="question">
        <h1>Have you ever heard about chernobyl? </h1>
        <p>Gave origin to a very dangerous nuclear pollution where radioactive that hard years radiactive material last years.</p>
      </div>
      
      <div className="concept">
        <p>Gave origin to a very dangerous nuclear pollution where radioactive that hard years radiactive material last years.</p>
      </div>

      <div className="s2">
        <h1>How does it affect the environment. </h1>
        <p>Not be inhabite for people dy 300 years or may further for radiactive material.</p>
      </div>

      <div className="s3">
        <h1>How does it affect animal.</h1>
        <p>The kill dy death of animals for radioactive make he evoluction of dog's ADN.</p>
      </div>

      <div className="s4">
        <h1>How does it affect people. </h1>
        <p>It is not inhabite the zone for years because of radioactive material since it is very dangerous.</p>
      </div>
      
      <div className="card_img">
     <video
       src="/7-10-26/video1.mp4"
       autoPlay
       muted
       loop
       playsInline
     />

     <video 
        src="/7-10-26/video2.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      </div>
      
      <div className="s5">
        <h1>Mention 3 consequences of radioactive material. </h1>
        <ol>
          <li>It is not inhabite for years.</li>
          <li>You can't drink water dy zone for dangerous.</li>
          <li>Don't be near to tag logo with symbol and radioactive hat have in yellou and red because it is dangerous.</li>
        </ol>
      </div>

      <div className="s6">
        <h1>Mention 3 ways to prevent radiactive nuclear? </h1>
        <ol>
          <li>Elderly security in sistem. </li>
          <li>Do not turn off primary the sistem security as in chernobyl.</li>
          <li>Train to the staff to handle the plant nuclear and avoid future pollutions. </li>
        </ol>
      </div>

      <div className="s7">
        <p>Thank you!</p>
        <p>Do You have any questions?</p>
      </div>
    </div>
  )
}
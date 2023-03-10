import Maqam from "../../images/shapes/bridge.png";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import SectionTitle from "../../components/shared/SectionTitle";
import Image from "next/image";
import vivekkapur from "../../images/teams/vivekkapur.jpg";
import smitanirkhi from "../../images/teams/smitanirkhi.jpg";
import tabassumkhan from "../../images/teams/tabassumkhan.jpg";
import shardachabbria from "../../images/teams/shardachabbria.jpg";
import Ravindranath from "../../images/teams/ravindranath.jpg";
import Linkedin from "../../images/teams/linkedin.png";
import { useEffect } from "react";
const Committee = () =>{
    
    return (
        <section id='committee' className="relative section-container">
            <div className="mb-12 lg:mb-0">
        <SectionTitle title={"Committee Members"} /> 
        
      </div>

      <div className="visible absolute sm:bottom-0 sm:right-0 sm:w-[45px] md:top-0 md:right-0 md:w-[55px] md:h-[55px] lg:top-1/4 lg:right-[50px] lg:top-[50px] lg:w-[100px] 2xl:w-[150px] 2xl:h-[120px] z-25 ">
        <Image src={Maqam} alt="maqam" layout="fill" />
      </div>

      <div className="absolute sm:w-[40px] sm:h-[2rem] md:top-1/4 md:w-[55px] md:h-[55px] lg:left-[10px] lg:top-1/4 lg:w-[82px] lg:h-[82px] z-25  ">
        <Image src={globe} alt="globetop" layout="fill" />
      </div>

      <div className="absolute right-1/4 sm:bottom-0 sm:w-[10px] sm:h-[12px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px] lg:right-0 lg:bottom-0 z-25 ">
        <Image src={globe} alt="globebottom" layout="fill" />
      </div>

      <div className="hidden lg:block absolute  lg:w-[40px] bottom-[2rem] right-0 lg:bottom-0 lg:right-1/2">
        <Image src={computer} alt="computer" />
      </div>

      <div className="absolute sm:bottom-0 sm:right-0 sm:w-[45px] md:right-1/2 lg:w-[40px] top-[2rem] right-0 lg:bottom-0 lg:right-1/2">
        <Image src={atom} alt="atomtop" />
      </div>

      <div className="hidden lg:block absolute bottom-[4rem] left-0 lg:bottom-10 lg:right-1/4 lg:w-[80px] 2xl:w-[150px]">
        <Image src={atom} alt="atombotton" />
      </div>
      <br></br>
      {/*Added code*/}
      <div class="row">
  <div class="column">
    <div class="card">
      <Image src={vivekkapur} alt="Vivek Kapur" style="width:100%"/>
      <div class="container">
        <h2>Dr. Vivek Kapur</h2>
        <p class="title">Director</p>
        <p><a href="https://www.linkedin.com/in/vivek-kapur1130"><button class="button">Contact</button></a></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <Image src={smitanirkhi} alt="Smita Nirkhi" style="width:100%"/>
      <div class="container">
        <h2>Dr.Smita Nirkhi</h2>
        <p class="title">HOD AI</p>
        <p><a href="https://in.linkedin.com/in/dr-smita-nirkhi-singh-b803a859"><button class="button">Contact</button></a></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <Image src={tabassumkhan} alt="Tabassum Khan" style="width:100%"/>
      <div class="container">
        <h2>Prof. Tabassum Khan</h2>
        <p class="title">Coordinator</p>
        <p><a href="linkedin.com/in/tabassum-h-khan-b24b5a1a4"><button class="button">Contact</button></a></p>
      </div>
    </div>
  </div>
</div>  
			  </section>

    )
}
export default Committee;
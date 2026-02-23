import "./members.css";
import { TWICE_MEMBERS } from "../../assets/data/members";

function Members() {
  return (
    <section className="memberswrapper">
      {TWICE_MEMBERS.map(members => ( 
        <section key={members.id} className="cardswrapper">
            <section className="frontcard"> 
              <img src={members.chibiimage} alt="members chibi" />
            </section>
             <section className="hovercard">
              <img className="hoverimage" src={members.image} alt="members images" />
              <aside className="hoverinfo">
              <h2> Name: {members.name}</h2>
              <h2> Age: {members.age}</h2>
              <h2> Role: {members.role} </h2>
              <h2> Nationality: {members.nationality} </h2>
              </aside>
            </section>  
        </section>
      ))}
    </section>
  );
}

export default Members;

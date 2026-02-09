import './members.css'
import { TWICE_MEMBERS } from '../../assets/data/members';

function Members(){

    
    return(
        <section>
           {TWICE_MEMBERS.map(members => 
            <p key={members.id}> {members.name}</p>
           )}
        </section>
    ) 
}


export default Members;
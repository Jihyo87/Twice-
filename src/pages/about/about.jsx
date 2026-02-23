import './about.css'
import twicefeelspecial from '../../assets/images/twice-feel-special-all-members-uhdpaper.com-4K-5.954.jpg';


function About(){
    return(
        <section className='about'>
            <article className='aboutheaders'>
                <h2> 21:29 </h2>
                <h3> The Golden Hour Of Nine </h3>
            </article>
                <img className='aboutimage' src={twicefeelspecial} alt='about image' />
            <article className='abouttext'>
                <p> In the world of K-pop, groups come and go, but every once in a while, a "One in a Million" bond is formed. For TWICE, that bond was forged in the heat of the 2015 survival show SIXTEEN. What started as a competition ended with nine sisters—Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu—vowing to touch hearts twice: once through the ears and once through the eyes.</p>
                <p>From their debut with "Like OOH-AHH" to the viral sensation "TT," 
                    TWICE captured hearts instantly. Each song brought its own magic, from catchy choreography to unforgettable lines that fans would sing along to for years. Every comeback felt like a celebration, and ONCEs were there for every moment.</p>
                <p>TWICE isn’t just music—they're a connection. Across stadiums in Korea, Japan, and beyond, the group has built a bond with fans that goes deeper than charts or awards. Each performance, each fan meeting, each smile shared online strengthens that "One in a Million" feeling.</p>
                <p>This site is a small tribute to that journey, celebrating the laughter, the tears, and the music that brings us all together. For ONCE, TWICE isn’t just a group—it’s family, it’s memories, and it’s magic that we get to cherish together.</p>
            </article> 
        </section>
    )
}

export default About;
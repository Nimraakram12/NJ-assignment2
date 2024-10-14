import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 style={{marginTop:"5px", fontSize:"40px", color:"white", fontWeight:"bold",fontFamily:"sans-serif",justifyContent:"center"}}>Welcome to AI ACADEMY</h1>
        <p className={styles.description}> we are dedicated to empowering individuals and organizations through cutting-edge artificial intelligence education. Whether youre a beginner exploring the fundamentals of AI or a seasoned professional looking to deepen your expertise, our tailored programs offer the perfect blend of theory and practical application. With expert instructors, real-world projects, and a dynamic learning environment, AI Academy equips you with the knowledge and skills to thrive in the rapidly evolving AI landscape. Join us to innovate, lead, and shape the future with AI.</p>
        <button className={styles.cta}>Learn More</button>
        <button className={styles.ctb}>Enroll Now</button>
      </div>
    </section>
  );
};

export default HeroSection;

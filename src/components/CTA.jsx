import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind or something related? <br className='sm:block hidden' />
        Let’s Collab!
      </p>
      <Link to='/contact' className='btn'>
        Connect
      </Link>
    </section>
  );
};

export default CTA;


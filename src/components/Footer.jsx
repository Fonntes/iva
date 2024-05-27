import '../App.css';
import githubIcon from '../assets/githubIcon.png';

function Footer() {
  return (
    <div className='bg-black text-zinc-100 p-8'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-2 gap-8'>
        <div>
          <h2 className='font-bold text-lg mb-2'>Redes:</h2>
          <ul>
            <li className='flex items-center'>
              <a href="https://github.com/Fonntes" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                <img src={githubIcon} className="logo mr-2" alt="GitHub logo" />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;

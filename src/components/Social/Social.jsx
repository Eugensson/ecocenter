import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Social = () => {
  return (
    <ul className="socialList">
          <li>
            <Link
              className="socialLink"
              href="https://telegram.org/"
              target="_blank"
            >
              <TelegramIcon aria-label="Іконка Telegram"/>              
            </Link>
          </li>
          <li>
            <Link
              className="socialLink"
              href="https://twitter.com/"
              target="_blank"
            >
              <TwitterIcon aria-label="Іконка Twitter"/>              
            </Link>
          </li>
          <li>
            <Link
              className="socialLink"
              href="https://facebook.com/"
              target="_blank"
            >
              <FacebookIcon aria-label="Іконка Facebook"/>              
            </Link>
          </li>
          <li>
            <Link
              className="socialLink"
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <LinkedInIcon aria-label="Іконка linkedIn"/>              
            </Link>
          </li>
        </ul>
  );
};

export default Social;
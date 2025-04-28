import Link from 'next/link';
import Image from 'next/image';
import { CLoseSvg, SearchSvgTwo } from '../svg';

import LogoWhite from '@/assets/img/logo/white-logo.png';

// Props type
type SearchProps = {
  isPopUpOpen: boolean;
  setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchPopUp = ({ isPopUpOpen, setIsPopUpOpen }: SearchProps) => {
  return (
    <div
      className={isPopUpOpen ? 'search__popup search-opened' : 'search__popup'}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="search__wrapper">
              <div className="search__top d-flex justify-content-between align-items-center">
                <div className="search__logo">
                  <Link href="/">
                    <Image
                      src={LogoWhite}
                      alt="Travello"
                      width={129}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="search__close">
                  <button
                    type="button"
                    className="search__close-btn search-close-btn"
                    onClick={() => setIsPopUpOpen(false)}
                  >
                    <CLoseSvg />
                  </button>
                </div>
              </div>
              <div className="search__form">
                <form action="#">
                  <div className="search__input">
                    <input
                      className="search-input-field"
                      type="text"
                      placeholder="Type here to search..."
                    />
                    <span className="search-focus-border"></span>
                    <button type="submit">
                      <SearchSvgTwo />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPopUp;

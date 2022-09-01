import './main.scss';
import photo_alex from '../../../assets/img/member__alex.jpg';
import photo_alexandrovsky from '../../../assets/img/member_alexandrovsky.jpg';
import photo_binn from '../../../assets/img/member_binn.jpg';
import photo_kobzar from '../../../assets/img/member_kobzar.jpg';
import photo_melnik from '../../../assets/img/member_melnik.jpg';
import photo_patrikov from '../../../assets/img/member_patrikov.jpg';
import photo_wolk from '../../../assets/img/member_wolk.jpg';
import photo_anna from '../../../assets/img/member_anna.jpg';
import facebook_like from '../../../assets/icon/facebook_like.png';
import twitter from '../../../assets/icon/twitter.svg';
import instagram from '../../../assets/icon/instagram.svg';
import facebook from '../../../assets/icon/facebook.svg';
import google_plus from '../../../assets/icon/google_plus.svg';
import linkedin from '../../../assets/icon/linkedin.svg';

function FooterMiddle() {
  const arrUsersPhoto = [
    photo_alex,
    photo_alexandrovsky,
    photo_binn,
    photo_kobzar,
    photo_melnik,
    photo_patrikov,
    photo_wolk,
    photo_anna,
  ];

  const twitterInfo = [
    {
      img: twitter,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },

    {
      img: twitter,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
  ];

  const informationItems = [
    'Sed ultrices purus non.',
    'Sodales sodales.',
    'Curabitur pretium dui vitae.',
    'Donec gravida mi in nisl.',
    'Faucibus leo condimentum.',
    'Donec et lorem suscipit.',
  ];

  const contactItems = [
    'Leo Store',
    'Leopards media',
    'KVM Rpad, 4590GH',
    '+1 489-8888-0099',
    'mail@email.com',
  ];

  const socialIcons = [instagram, facebook, linkedin, google_plus];

  return (
    <div className="footer-middle">
      <div className="container">
        <div className="footer-middle__wrap">
          <div className="footer-middle__facebook">
            <h4 className="title-h4 footer-middle__title">Facebook</h4>
            <p className="footer-middle__facebook--txt">20000 Members</p>
            <button className="footer-middle__facebook--btn">
              <img
                className="footer-middle__facebook--btn-icon"
                src={facebook_like}
              />
              <p className="footer-middle__facebook--btn-link">Link</p>
            </button>
            <div className="footer-middle__facebook--member">
              {arrUsersPhoto.map((userPhoto) => {
                return (
                  <div className="footer-middle__facebook--member-item">
                    <img
                      className="footer-middle__facebook--member-img"
                      src={userPhoto}
                    />
                  </div>
                );
              })}
            </div>
            <p className="footer-middle__facebook--txt">
              facebook Social plugin
            </p>
          </div>
          <div className="footer-middle__twitter">
            <h4 className="title-h4 footer-middle__title">From twitter</h4>
            {twitterInfo.map((elem) => {
              return (
                <div className="footer-middle__twitter-info">
                  <div className="footer-middle__twitter-img">
                    <img
                      className="footer-middle__twitter-img--icon"
                      src={elem.img}
                    />
                  </div>
                  <p className="footer-middle__twitter-txt">{elem.text}</p>
                </div>
              );
            })}
          </div>
          <div className="footer-middle__info">
            <h4 className="title-h4 footer-middle__title">Information</h4>
            <ul className="footer-middle__info-list">
              {informationItems.map((item) => {
                return (
                  <li className="footer-middle__info-list--item">
                    <div className="arrow arrow-right"></div>
                    <p className="footer-middle__info-list--txt">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-middle__contact">
            <h4 className="title-h4 footer-middle__title">Contact Us</h4>
            <ul className="footer-middle__contact-list">
              {contactItems.map((item) => {
                return (
                  <li className="footer-middle__contact-list--item">{item}</li>
                );
              })}
            </ul>
            <ul className="footer-middle__contact-social">
              {socialIcons.map((icon) => {
                return (
                  <li className="footer-middle__contact-social--item">
                    <a className="footer-middle__contact-social--link" href="#">
                      <img
                        className="footer-middle__contact-social--icon"
                        src={icon}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMiddle;

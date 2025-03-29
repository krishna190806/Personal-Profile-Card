import github from "../../public/github.png";
import insta from "../../public/insta.png";
import twitter from "../../public/twitter.png";
import linkedin from "../../public/linkedin.png";

function ProfileCard() {
  return (
    <main>
      <div className="profile-card">
        <div className="card-header">
          <img src="/profile.jpg" alt="profile thumbnail" className="avatar" />
          <div className="profile-info">
            <p className="profile-name">Krishna Chikhaliya</p>
            <p className="profile-title">FrontEnd Engineer</p>
          </div>
        </div>
        <p className="profile-bio">
          I turn coffee into bugs which are fixed by someone else. 
          Certified Stack Overflow and ChatGPT developer.
        </p>
        <button className="contact-button">Contact me</button>
        <div className="actions-container">
          <a
            href="https://github.com/krishna190806"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="icon" aria-label="github link" />
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-chikhliya-3b4187285/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="icon" aria-label="linkedin link" />
          </a>
          <a
            href="https://www.instagram.com/_itz_kano_1908/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} className="icon" aria-label="insta link" />
          </a>
          <a
            href="https://x.com/KrishnaChi78503"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} className="icon" aria-label="twitter link" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProfileCard;

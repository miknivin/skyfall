import Link from 'next/link';
import Image from 'next/image';
import { ITeamDT } from '@/types/team-d-t';

interface TeamItemProps {
  team: ITeamDT;
}

const TeamItemOne = ({ team }: TeamItemProps) => {
  return (
    <div className="it-team-item">
      <div className="it-team-content text-center">
        <div className="it-team-thumb">
          <Image
            src={team.image}
            alt={team.name}
            width={270}
            height={270}
            style={{ height: 'auto' }}
          />
        </div>
        <div className="it-team-text mb-30">
          <h3 className="it-team-title">
            <Link href="#">{team.name}</Link>
          </h3>
          <span className="it-team-designation">{team.designation}</span>
        </div>
        <div className="it-team-social-box">
          {team.socials?.map((social, index) => (
            <Link key={index} href={social.link}>
              <i className={social.platform}></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamItemOne;

import Image from 'next/image';
import Link from 'next/link';
import { ITeamDT } from '@/types/team-d-t';

interface TeamItemProps {
  team: ITeamDT;
}

const TeamItemTwo = ({ team }: TeamItemProps) => {
  return (
    <div className="it-team-3-item">
      <div className="it-team-3-thumb mb-25">
        <Image
          src={team.image}
          alt={team.name}
          width={270}
          height={270}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-team-3-content">
        <h3 className="it-team-title">
          <Link href="#">{team.name}</Link>
        </h3>
        <span className="it-team-designation">{team.designation}</span>
      </div>
    </div>
  );
};
export default TeamItemTwo;

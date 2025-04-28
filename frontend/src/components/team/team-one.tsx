import { teamDataOne } from '@/data/team-data';
import TeamItemOne from './team-item/team-item-one';

const TeamOne = () => {
  return (
    <div className="it-team-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          {teamDataOne.map((team) => (
            <div key={team.id} className="col-xl-4 col-lg-4 col-md-6">
              <TeamItemOne team={team} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamOne;

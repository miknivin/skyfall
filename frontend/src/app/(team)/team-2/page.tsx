import { Metadata } from 'next';
import TeamTwoMain from '@/pages/team-2/team-2';

export const metadata: Metadata = {
  title: 'Skyfall - Team Page',
};

const TeamTwoPage = () => {
  return <TeamTwoMain />;
};

export default TeamTwoPage;

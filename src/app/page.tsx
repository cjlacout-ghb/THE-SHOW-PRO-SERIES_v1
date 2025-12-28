import { getTeams, getGames } from './actions'
import TournamentManager from '@/components/TournamentManager'

export default async function Home() {
  const teams = await getTeams()
  const games = await getGames()

  return (
    <TournamentManager
      initialTeams={teams}
      initialGames={games}
    />
  )
}

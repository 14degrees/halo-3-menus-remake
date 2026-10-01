import Lobby from '../components/Lobby';
import lobbyData from '../data/lobbyMenuData.json';
import switchLobbyData from '../data/switchLobby.json';

export async function getStaticProps() {
  return {
    props: {
      lobby: lobbyData.lobbies.multiplayer,
      switchLobby: switchLobbyData.items,
    },
  };
}

export default function Multiplayer({ lobby, switchLobby }) {
  return <Lobby lobby={lobby} switchLobby={switchLobby} />;
}

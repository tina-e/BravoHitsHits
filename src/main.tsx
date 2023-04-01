import { Album, Track } from "./App";
import { useApp } from "./appContext";
import { Header } from "./header";
import { SongTable } from "./song_table";
import { Welcome } from "./welcome";

type MainProps = {
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
  albums: Album[];
  setTracks: React.Dispatch<React.SetStateAction<Track[]>>;
  tracks: Track[];
};

export const Main = (props: MainProps) => {
  const { state, setState } = useApp();

  return (
    <div className="overflow-hidden">
      <Header></Header>
      {state === 0 ? (
        <Welcome
          albums={props.albums}
          tracks={props.tracks}
          setAlbums={props.setAlbums}
        ></Welcome>
      ) : (
        <SongTable
          albums={props.albums}
          tracks={props.tracks}
          setAlbums={props.setAlbums}
          setTracks={props.setTracks}
        ></SongTable>
      )}
    </div>
  );
};

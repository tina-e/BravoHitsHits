import Papa, { ParseResult } from "papaparse";
import React, { useEffect } from "react";
import { AppProvider, useApp } from "./appContext";
import { Header } from "./header";
import { Main } from "./main";
import { SongTable } from "./song_table";
import { Welcome } from "./welcome";

export type Track = {
  id: string;
  title: string;
  artists: string;
  releasename: string;
  releaseyear: string;
  releaseurl: string;
  cd: number;
  track: number;
  volume: number;
};

export type Album = {
  id: string;
  title: string;
  volume: number;
  resource_url: string;
  year: number;
  tracks?: Track[];
};

export const App = () => {
  const [albums, setAlbums] = React.useState<Album[]>([]);
  const [tracks, setTracks] = React.useState<Track[]>([]);

  const getTracks = () => {
    Papa.parse("/tracks.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Track>) => {
        setTracks(results.data);
      },
    });
  };

  const getAlbums = () => {
    // let albums_in: Album[] = [];
    Papa.parse("/albums.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Album>) => {
        // albums_in = results.data.map((album: Album) => ({
        //   ...album,
        //   tracks: [],
        // }));
        // tracks.forEach((track) => {
        //   albums_in.forEach((album: Album) => {
        //     if (track.volume === album.volume) {
        //       album.tracks?.push(track);
        //     }
        //   });
        // });
        // setAlbums(albums_in);
        setAlbums(results.data);
      },
    });
  };

  useEffect(() => {
    getTracks();
    getAlbums();
  }, []);

  return (
    <>
      <AppProvider>
        <Main
          albums={albums}
          tracks={tracks}
          setAlbums={setAlbums}
          setTracks={setTracks}
        ></Main>
      </AppProvider>
    </>
  );
};

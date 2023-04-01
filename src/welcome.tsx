import Papa, { ParseResult } from "papaparse";
import React from "react";
import { Album, Track } from "./App";
import { useApp } from "./appContext";

type WelcomeProps = {
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
  albums: Album[];
  tracks: Track[];
};

export const Welcome = (props: WelcomeProps) => {
  const { state, setState } = useApp();

  const matchTracksAndAlbum = () => {
    setState(1);
    let albums_in = props.albums.map((album: Album) => ({
      ...album,
      tracks: [],
    }));
    props.tracks.forEach((track) => {
      albums_in.forEach((album: Album) => {
        if (track.volume === album.volume) {
          album.tracks?.push(track);
        }
      });
    });
    props.setAlbums(albums_in);
    // TODO: auswahl der Alben beschränken
  };

  return (
    <div className="w-full flex flex-col p-[7vw] justify-between gap-[5vw]">
      <div className="flex flex-col text-darkLogo font-semibold text-lg">
        <span className="text-md">Jeder kennt sie, jeder liebt sie:</span>
        <span className="text-3xl">Die Bravo Hits</span>
        <br></br>
        <span>
          Die größten Hits der letzten Monate auf einem Tonträger - ein
          Träumchen.
        </span>
        <br></br>
        <span>Doch was sind eigentlich die größten Hits aller Hits?</span>
        <span>Wäre es nicht genial, wenn es eine Zusammenstellung</span>
        <span>der besten Bravo Hits gäbe? Die Bravo Hits Hits quasi.</span>
        <br></br>
        <span className="text-xl">
          Lasst uns zusammen die besten Hits der Hits finden!
        </span>
      </div>
      <div
        className="w-fit p-2 hover:text-darkLogo text-logo rounded-lg text-xl font-semibold border-solid border-2 hover:border-darkLogo border-logo"
        onClick={() => {
          matchTracksAndAlbum();
        }}
      >
        Jetzt starten
      </div>
    </div>
  );
};

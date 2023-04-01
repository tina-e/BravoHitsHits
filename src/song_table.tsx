/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Album, Track } from "./App";

type SongTableProps = {
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
  albums: Album[];
  setTracks: React.Dispatch<React.SetStateAction<Track[]>>;
  tracks: Track[];
};

type Row = {
  id: any;
  artist: any;
  title: any;
  listen: any;
  vote: any;
};

export const SongTable = (props: SongTableProps) => {
  console.log(props.albums);
  const [rows, setRows] = React.useState<Row[]>([]);

  const getRowsByAlbums = (albumNum: number) => {
    let row_list: Row[] = [];
    props.albums[albumNum].tracks?.forEach((track: Track) => {
      const r: Row = {
        id: <div className="p-2 text-center">{track.id}</div>,
        artist: <div className="p-2 text-center">{track.artists}</div>,
        title: <div className="p-2 text-center">{track.title}</div>,
        listen: (
          <div className="l-0 w-[25vw] min-w-[225px] h-[11vh] relative scale-75 -z-10">
            <iframe
              src="https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L?utm_source=oembed"
              className="t-0 l-0 w-full h-full absolute"
              allow="clipboard-write; encrypted-media; fullscreen;"
            ></iframe>
            {/* <iframe src="https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L?utm_source=oembed"></iframe> */}
          </div>
        ),
        vote: <div className="p-2 text-center">like?</div>,
      };
      row_list.push(r);
    });
    setRows(row_list);
  };

  useEffect(() => {
    getRowsByAlbums(0);
  }, []);

  const data = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
      },
      {
        label: "Artist",
        field: "artist",
        sort: "asc",
      },
      {
        label: "Title",
        field: "title",
        sort: "asc",
      },
      {
        label: "Reinhören",
        field: "listen",
        sort: "asc",
      },
      {
        label: "Vote",
        field: "vote",
        sort: "asc",
      },
    ],
    rows: rows,
  };

  return (
    <div className="mx-[7vw] my-[3vw]">
      <span className="text-xl font-semibold">
        Wähle deine Top-5 aus: {props.albums[0].title}
      </span>
      <div className="p-2 mt-4 rounded-lg border-solid border-2 border-darkLogo">
        <MDBTable responsive>
          <MDBTableHead columns={data.columns} />
          <MDBTableBody rows={data.rows} />
        </MDBTable>
      </div>
    </div>
  );
};

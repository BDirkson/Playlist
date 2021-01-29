import React from "react";

const SongHeader = () => {
  return (
    <table class="table-head">
      
        <tr>
          <th scope="col" className="row">
            Song
          </th>
          <th scope="col" className="row">
            Artist
          </th>
          <th scope="col" className="row">
            Genre
          </th>
          <th scope="col" className="row">
            Rating
          </th>
        </tr>
     
    </table>
  );
};

export default SongHeader;
import React from 'react';
import {connect} from 'react-redux';
/* const SongDetail = (props)=>{
    console.log(props);
    return<div>song detaial</div>
} */
const SongDetail = ({selectedSong})=>{
    console.log("song detail");
    console.log(selectedSong);
   if(!selectedSong)
   {
       return<div>select a song</div>
   }
    return(<div>
    <h3>Details for : </h3>
    Title: {selectedSong.title}
    <br/>
    Duration:{selectedSong.duration}
    </div>);
}
const mapStateToProps =(state)=>{
  return  { selectedSong: state.selectedSong}
};
export default connect(mapStateToProps)(SongDetail);
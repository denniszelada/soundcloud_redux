import * as actionTypes from '../constants/actionType';

export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  };
};

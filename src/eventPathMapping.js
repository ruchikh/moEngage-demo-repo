import { generatePath } from "react-router-dom";

export const path = {
  tvScreen: "/tv-screen/:id",
  lotImageViewer: "/lotImageViewer",
};

const Mapping = {
  auction_ended: path.lotImageViewer,
  favourite_lot_added: path.tvScreen,
};

export const EventPathMapping = (event, data) => {
  return `${window.location.origin}${generatePath(Mapping[event], data)}`;
};
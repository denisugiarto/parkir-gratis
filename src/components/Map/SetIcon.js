import L from 'leaflet';

const SetIcon = ({
  iconUrl,
  iconSize,
  iconAnchor,
  popupAnchor,
  shadowUrl,
  shadowSize,
  shadowAnchor,
}) => {
  return L.icon({
    iconUrl,
    iconSize,
    iconAnchor,
    popupAnchor,
    shadowUrl,
    shadowSize,
    shadowAnchor,
  });
};

export default SetIcon;

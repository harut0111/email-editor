import React from 'react'
import { MdTextFields } from "react-icons/md";
import { TiDivideOutline } from "react-icons/ti";
import { FaRegPlayCircle, FaImage } from "react-icons/fa";
import { IoIosImages, IoMdShare } from "react-icons/io";
import { FiHeadphones, FiLink2, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import Text from "../Settings/Text";
import Video from "../Settings/Video";
import Image from "../Settings/Image";
import Slider from "../Settings/Slider";
import SocialMedia from "../Settings/SocialMedia";
import Audio from "../Settings/Audio";
import Map from "../Settings/Map";
import LinkButton from "../Settings/LinkButton";
import Divider from "../Settings/Divider";

import TextData from "../Dashboard/TextData";
import VideoData from "../Dashboard/VideoData";
import MapData from "../Dashboard/MapData";
import DividerData from "../Dashboard/DividerData";
import ImageData from "../Dashboard/ImageData";
import SliderData from "../Dashboard/SliderData";
import SocialMediaData from "../Dashboard/SocialMediaData";
import AudioData from "../Dashboard/AudioData";
import LinkButtonData from "../Dashboard/LinkButtonData";
import uuid from 'uuid';

export const EL_LIST = [
  { label: "Text", Icon: MdTextFields, Settings: Text },
  { label: "Video", Icon: FaRegPlayCircle, Settings: Video },
  { label: "Image", Icon: FaImage, Settings: Image },
  { label: "Slider", Icon: IoIosImages, Settings: Slider },
  { label: "Social Media", Icon: IoMdShare, Settings: SocialMedia },
  { label: "Audio", Icon: FiHeadphones, Settings: Audio },
  { label: "Map", Icon: FiMapPin, Settings: Map },
  { label: "Link/Button", Icon: FiLink2, Settings: LinkButton },
  { label: "Divider", Icon: TiDivideOutline, Settings: Divider }
];

export const EL_DATA_LIST = [
  { label: "Text", Data: TextData, id: uuid.v4() },
  { label: "Video", Data: VideoData, id: uuid.v4() },
  { label: "Image", Data: ImageData, id: uuid.v4() },
  { label: "Slider", Data: SliderData, id: uuid.v4() },
  { label: "Social Media", Data: SocialMediaData, id: uuid.v4() },
  { label: "Audio", Data: AudioData, id: uuid.v4() },
  { label: "Map", Data: MapData, id: uuid.v4() },
  { label: "Link/Button", Data: LinkButtonData, id: uuid.v4() },
  { label: "Divider", Data: DividerData, id: uuid.v4() }
];

export const BORDER_TYPE_LIST = ["solid", "dotted", "dashed", "double", "none"];

export const BAR_LIST = ["Elements", "Component Settings"];

export const VIDEO_PROVIDER_LIST = [
  "YouTube",
  "Facebook",
  "Vimeo",
  "Metacafe",
  "Veoh"
];

export const AUDIO_PROVIDER_LIST = ["Soundcloud"];
export const SOCIAL_MEDIA_LIST = [
  { label: "Facebook", Icon: <FaFacebook />},
  { label: "Twitter", Icon: <FaTwitter/> },
  { label: "Instagram", Icon: <FaInstagram />},
  { label: "YouTube", Icon: <FaYoutube /> }
];

export const FORMAT_LIST = [
  { label: "Autoplay: ", name: "autoplay", defaultVal: false },
  { label: "Loop: ", name: "loop", defaultVal: false },
  { label: "Control: ", name: "control", defaultVal: true }
];

export const getActiveEl = layout => {
  const filteredItem = layout.elements.filter(
    el => el.elId === layout.activeEl.id
  );
  return filteredItem[0];
};

export const filterElement = (layout, id) => {
  const filteredItem = layout.elements.filter(el => el.elId !== id);
  return filteredItem;
};

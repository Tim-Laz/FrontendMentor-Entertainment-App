import MediaData from "../data.json";
import { createContext, useContext, useReducer } from "react";

const initialMedia = MediaData;

const MediaContext = createContext(null);
const MediaDispatchContext = createContext(null);

export function MediaProvider({ children }) {
  const [media, dispatch] = useReducer(mediaReducer, initialMedia);
  return (
    <MediaContext.Provider value={media}>
      <MediaDispatchContext.Provider value={dispatch}>
        {children}
      </MediaDispatchContext.Provider>
    </MediaContext.Provider>
  );
}

export function useMedia() {
  return useContext(MediaContext);
}
export function useMediaDispatch() {
  return useContext(MediaDispatchContext);
}

function mediaReducer(media, action) {
  switch (action.type) {
    case "bookmark": {
      const newMedia = media.map((item) => {
        if (item.title === action.title) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }
        return item;
      });
      return newMedia;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

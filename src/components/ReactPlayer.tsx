"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Button } from "./ui/button";
import { Icon } from "./Icons";
import { cn } from "@/lib/utils";

const Player = ({ videoId }: { videoId: string }) => {
  const [mounted, setIsMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playerState, setPlayerState] = useState({
    main: false,
    secondary: false,
  });

  useEffect(() => {
    setIsMounted(true);
  }, [mounted]);

  if (!mounted) {
    return null;
  }
  const handleOnReady = () => {
    setPlayerState({
      ...playerState,
      main: true,
    });
  };

  const handleOnReady2 = () => {
    setPlayerState({
      ...playerState,
      secondary: true,
    });
  };
  return (
    <div className="w-full group aspect-video relative">
      <div className="w-full h-full rounded-xl overflow-hidden relative  p-0.5 bg-gradient-to-t from-neutral-600 to bg-neutral-300">
        <div
          className={cn(
            "absolute bottom-0 left-2 z-20 before:absolute before:transition-opacity before:size-20 before:bg-black/40 before:blur-xl before:opacity-0 before:group-hover:opacity-100  before:-bottom-1/4 before:-left-1/4",
            !playerState.main && "before:opacity-100"
          )}
        >
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setMuted(!muted)}
            className={cn(
              "w-20 justify-start group-hover:opacity-100 opacity-0",
              !playerState.main && "opacity-100"
            )}
          >
            <Icon
              className={muted ? "translate-x-[0.43rem]" : ""}
              iconName={muted ? "VolumeMute02Icon" : "VolumeMute01Icon"}
            />
          </Button>
        </div>
        <div className="w-full h-full rounded-[0.625rem] overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            playing={playerState.main && playerState.secondary}
            onReady={handleOnReady}
            onPause={() => setPlayerState({ main: false, secondary: false })}
            onPlay={() => setPlayerState({ main: true, secondary: true })}
            width={"100%"}
            height={"100%"}
            style={{
              scale: 1.01,
            }}
            muted={muted}
          />
        </div>
      </div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={"100%"}
        height={"100%"}
        playing={playerState.main && playerState.secondary}
        onReady={handleOnReady2}
        style={{
          zIndex: -10,
          position: "absolute",
          inset: 0,
          filter: "blur(80px)",
        }}
        muted
      />
    </div>
  );
};

export default Player;

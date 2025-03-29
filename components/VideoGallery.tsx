import { useState, useRef } from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Film,
  Sparkles,
} from "lucide-react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

const VideoGallery = () => {
  const [videos] = useState<Video[]>([
    {
      id: "lop12ytJ6eU",
      title: "Chavadi Estates - Corporate Video",
      thumbnail:
        "https://ik.imagekit.io/chavadiestates2025/chavadi_estates_thumbnail.png?updatedAt=1743256948605",
    },
    {
      id: "NSMYmdjvWB8",
      title: "Luxury Villa Project Walkthrough",
      thumbnail: "https://img.youtube.com/vi/NSMYmdjvWB8/0.jpg",
    },
    {
      id: "0R1lutYNLNA",
      title: "Premium Apartment Tour",
      thumbnail: "https://img.youtube.com/vi/0R1lutYNLNA/0.jpg",
    },
    {
      id: "broPN9k-Ctw",
      title: "Premium Apartment Tour",
      thumbnail: "https://img.youtube.com/vi/broPN9k-Ctw/0.jpg",
    },
    {
      id: "OsJx0UNJaYQ",
      title: "Premium Apartment Tour",
      thumbnail: "https://img.youtube.com/vi/OsJx0UNJaYQ/0.jpg",
    },
  ]);

  const [activeVideoId, setActiveVideoId] = useState<string>(videos[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const playerRef = useRef<any>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
    },
  };

  const handleReady = (event: any) => {
    playerRef.current = event.target;
    playerRef.current.mute();
    setIsMuted(true);
  };

  const handleVideoSelect = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        carouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-200/30 to-teal-200/20 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-l from-emerald-200/30 to-amber-100/20 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-amber-100/40 blur-xl"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-teal-100/40 blur-xl"></div>

      <div className="absolute -left-16 top-1/3 opacity-10">
        <Film size={140} className="text-emerald-900 rotate-12" />
      </div>
      <div className="absolute -right-16 bottom-1/3 opacity-10">
        <Film size={140} className="text-emerald-900 -rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 relative">
          <span className="text-emerald-600 uppercase tracking-wider text-sm font-medium flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-amber-500" />
            Video Gallery
            <Sparkles size={16} className="text-amber-500" />
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold title-with-line-center after:bg-emerald-500">
            Explore Our Projects
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Take a virtual tour of our exceptional properties and developments
            through our video gallery.
          </p>

          <div className="absolute top-0 right-1/4 opacity-70">
            <Sparkles size={20} className="text-amber-400" />
          </div>
          <div className="absolute bottom-0 left-1/4 opacity-70">
            <Sparkles size={16} className="text-amber-400" />
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-slate-700 aspect-video shadow-2xl relative mb-8 ring-1 ring-white/20 ring-offset-4 ring-offset-emerald-50/50">
          <YouTube
            videoId={activeVideoId}
            opts={opts}
            onReady={handleReady}
            className="w-full h-full"
          />

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between lg:backdrop-blur-sm">
            <div className="flex items-center">
              <button
                onClick={togglePlay}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-lg"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause size={22} />
                ) : (
                  <Play size={22} className="ml-1" />
                )}
              </button>
              <span className="text-white text-sm ml-4 hidden sm:block font-medium">
                {videos.find((v) => v.id === activeVideoId)?.title}
              </span>
            </div>
            <button
              onClick={toggleMute}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 shadow-lg text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all hidden sm:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-6 pt-2 px-2 space-x-6 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className={`flex-shrink-0 group cursor-pointer snap-start transform transition-all duration-300 hover:-translate-y-2 ${
                  video.id === activeVideoId
                    ? "ring-2 ring-emerald-500 rounded-lg scale-105"
                    : ""
                }`}
                onClick={() => handleVideoSelect(video.id)}
                style={{ width: "calc(33.333% - 1.5rem)", minWidth: "220px" }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <Play
                        className={`w-7 h-7 text-white ${
                          video.id === activeVideoId
                            ? "opacity-0"
                            : "opacity-90"
                        } group-hover:opacity-100 transition-opacity ml-1`}
                      />
                    </div>
                  </div>
                  {video.id === activeVideoId && (
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-500 py-1.5 px-3 backdrop-blur-sm">
                      <span className="text-xs font-medium text-white">
                        Now Playing
                      </span>
                    </div>
                  )}
                </div>
                <h4 className="mt-3 text-sm font-medium line-clamp-2 text-slate-800 group-hover:text-emerald-600 transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollCarousel("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 shadow-lg text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all hidden sm:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;

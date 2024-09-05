import dynamic from "next/dynamic";

export const Map = dynamic(() => import("@/components/map/map"), {
  ssr: false,
});

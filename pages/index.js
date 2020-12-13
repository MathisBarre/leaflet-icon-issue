import dynamic from "next/dynamic"

export default function Home() {

  let Map = dynamic(
    () => import('../components/leaflet-map.js'),
    { ssr: false }
  )

  return (
   <Map/>
  )
}

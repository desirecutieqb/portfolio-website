import HomeLinks from "./components/HomeLinks";
import ClientWrapper from "./components/ThreeWrapper";
export default function Home() {
  return (
    <main
      style={{
        position: 'relative',
        display: 'flex',
        height: '100vh',
        width: '100vw',
      }}
    >
      <section style={{ width: '60%', zIndex: 30 }}>
        <ClientWrapper />
      </section>
      <HomeLinks />
    </main>
  );
}
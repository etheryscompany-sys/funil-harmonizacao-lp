export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);",
        }}
      />
      <link
        rel="preload"
        href="https://scripts.converteai.net/73ebb8bc-6165-42ee-9f3c-00d6e692a704/players/69a6176510258bc4a105866b/v4/player.js"
        as="script"
      />
      <link
        rel="preload"
        href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
        as="script"
      />
      <link
        rel="preload"
        href="https://cdn.converteai.net/73ebb8bc-6165-42ee-9f3c-00d6e692a704/69a6173fd4eb2a015af22ab8/main.m3u8"
        as="fetch"
      />
      <link rel="dns-prefetch" href="https://cdn.converteai.net" />
      <link rel="dns-prefetch" href="https://scripts.converteai.net" />
      <link rel="dns-prefetch" href="https://images.converteai.net" />
      <link rel="dns-prefetch" href="https://api.vturb.com.br" />
    </>
  );
}
